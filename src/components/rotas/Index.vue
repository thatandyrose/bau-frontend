<template lang="pug">
  div
    .row.m-b-40
      .col-sm-3
        .day.center-text.border-2.border-radius-85.invert.xs-m-b-20
          .month.h2 {{date.format('MMMM')}}
          .date.text-xlg
            strong {{date.format('Do')}}
          .day.h3 {{date.format('dddd')}}
      .col-sm-9
        template(v-if="rotaAssignmentsForCurrentDate.length == 0")
          p <span class="h1">😱</span> <strong>Oh snap!</strong>
          p.m-b-40 There's no one on support <strong>{{isCurrentDateToday ? "today" : "for the " + date.format("Do")}}...</strong>
          p
            button.bau-btn(@click="createRotaAssignmentsForCurrentDate()") Assign developers {{isCurrentDateToday ? "for today" : "for the " + date.format("Do")}}
          p(v-if="daysWithoutAssignments.length > 1")
            a(href="#", @click.prevent="createRotaAssignmentsForNextWeek()") or just <strong>assign developers for all {{daysWithoutAssignments.length}} missing days</strong>
        template(v-else="")
          p <span class="h1">😎</span> <strong>Phew!</strong>
          p We've got some <strong>heroes</strong> {{isCurrentDateToday ? "for today" : "for the " + date.format("Do")}}
          .row
            .col-xs-6.col-sm-4.col-md-3(v-for="assignment in rotaAssignmentsForCurrentDate")
              .position-relative
                img.img-responsive(src="../../assets/download-7.jpg")
                .invert.position-absolute.top-50p.left-0
                  small.invert <strong>{{assignment.slot}}</strong> / {{assignment.developer.name}}
    hr.m-t-50.m-b-50
    h3 Rota for coming week
    .row.equal
      .col-xs-4.col-sm-2.col-md-2.m-b-5(v-for="day in nextWeek")
        .border-2.p-t-5.pointer.height-fill(@click="selectDate(day.date)", :class="isDateSelected(day.date) ? 'invert' : ''")
          p.center-text
            small
              strong {{day.date.format("ddd Do")}}
          template(v-if="isDevForDate(day.date)")
            .position-relative(v-for="assignment in day.assignments")
              img.img-responsive(src="../../assets/download-7.jpg")
              .invert.position-absolute.top-50p.left-0
                small.invert <strong>{{assignment.slot}}</strong> / {{assignment.developer.name}}
          template(v-else="")
            .text-xlg.center-text 💩


</template>

<script>
export default {
  name: 'RotasIndex',
  data () {
    return {
      date: null,
      rotaAssignments: [
        {date: '2017-12-22T20:45:28', slot: 'am', developer: {name: 'andrew rose', image_url: '../../assets/download-7.jpg'}},
        {date: '2017-12-22T20:45:28', slot: 'pm', developer: {name: 'georigia ciancimino', image_url: '../../assets/download.jpg'}},
        {date: '2017-12-24T20:45:28', slot: 'am', developer: {name: 'dave smith', image_url: '../../assets/download-7.jpg'}},
        {date: '2017-12-24T20:45:28', slot: 'pm', developer: {name: 'lucy jane rose', image_url: '../../assets/download.jpg'}}
      ]
    }
  },
  created () {
    this.showFirstMissingDateOrFirstDate()
  },
  methods: {
    orderedAssignments (assignments) {
      return _.orderBy(assignments, ['slot'])
    },
    showFirstMissingDateOrFirstDate () {
      let firstDateWithoutAssignment = this.daysWithoutAssignments[0]

      if (firstDateWithoutAssignment) {
        this.date = firstDateWithoutAssignment.date
      } else {
        this.date = moment(new Date())
      }
    },
    isDevForDate (date) {
      return this.rotaAssignmentsForDate(date).length > 0
    },
    createRotaAssignmentsForCurrentDate () {
    },
    createRotaAssignmentsForNextWeek () {
    },
    selectDate (date) {
      this.date = date
    },
    isDateSelected (date) {
      return date.isSame(this.date, 'day')
    },
    rotaAssignmentsForDate (date) {
      return _.filter(this.rotaAssignments, (r) => {
        return moment(r.date).isSame(date, 'day')
      })
    }
  },
  computed: {
    daysWithoutAssignments () {
      let self = this
      return _.filter(this.nextWeek, (day) => {
        return !self.isDevForDate(day.date)
      })
    },
    nextWeek () {
      return _.map(_.range(7), (i) => {
        let d = moment().add(i, 'days')
        return {date: d, assignments: this.orderedAssignments(this.rotaAssignmentsForDate(d))}
      })
    },
    isCurrentDateToday () {
      return moment(this.date).isSame(new Date(), 'day')
    },
    rotaAssignmentsForCurrentDate () {
      return this.orderedAssignments(this.rotaAssignmentsForDate(this.date))
    }
  }
}
</script>

<style>

</style>
