export default {
  baseUrl () {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'https://bau-api.herokuapp.com'
      case 'development':
        return 'http://localhost:3000'
    }
  },
  index (options) {
    let qString = '?' + $.param(_.pick(options, ['start_date', 'end_date']))
    return $.getJSON(this.baseUrl() + '/rota_assignments.json' + qString, options.success)
  },
  createForDates (options) {
    return $.post(
      this.baseUrl() + '/rota_assignments/create_for_dates.json',
      _.pick(options, ['start_date', 'end_date']),
      options.success
    )
  }
}
