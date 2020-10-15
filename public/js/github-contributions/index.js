var fetch = require('node-fetch')

async function contributions(user) {
  return fetch('https://github.com/users/{user}/contributions'.replace('{user}', user))
    .then((res) => res.text())
    .then(loadGraph)
}

function loadGraph (text) {
  var todaysDate = new Date()
  var lastMonth = todaysDate.setMonth(todaysDate.getMonth() - 1)
  var date = new Date()
  var lastWeek = date.setDate(date.getDate() - 7)

  matches = text.match(
    /(data-count="\d+".*data-date="\d{4}-\d{2}-\d{2}")/g
  )

  return {
    week: contribution(matches, 'week', lastWeek),
    month: contribution(matches, 'month', lastMonth),
    year: contribution(matches, 'year', false)
  }
}

function contribution (matches, type, check)
{
  var total = 0
  var checkDate

  data = matches.map(function (match) {
    if (type == 'year') {
      return {
        count: +match.match(/data-count="(\d+)"/)[1],
        date: match.match(/data-date="(\d{4}-\d{2}-\d{2})"/)[1],
      }
    } 
    
    var date = new Date(match.match(/data-date="(\d{4}-\d{2}-\d{2})"/)[1])
    checkDate = check == 'month' ? date.setMonth(date.getMonth()) : date.setDate(date.getDate())

    if (checkDate >= check) {
      return {
        count: +match.match(/data-count="(\d+)"/)[1],
        date: match.match(/data-date="(\d{4}-\d{2}-\d{2})"/)[1]
      }
    } else {
      return {
        count: 0,
        date: match.match(/data-date="(\d{4}-\d{2}-\d{2})"/)[1]
      }
    }
  })
  
  for (var idx = 0; idx <= data.length - 1; idx++) {
    total += +data[idx].count
  }

  return total
}

module.exports = contributions