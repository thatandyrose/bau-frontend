export default {
  baseUrl () {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'https://something.com'
      case 'development':
        return 'http://localhost:3000'
    }
  },
  index (options) {
    let qString = '?' + $.param(_.pick(options, ['startDate', 'endDate']))
    return $.getJSON(this.baseUrl() + '/rota_assignments/' + qString, options.success)
  },
  createForDates (options) {
    return $.post(
      this.baseUrl() + '/rota_assignments/create_for_dates/',
      _.pick(options, ['startDate', 'endDate']),
      options.success
    )
  }
}
