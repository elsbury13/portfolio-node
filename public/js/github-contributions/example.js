var contributions = require('./')
var user = 'elsbury13'

let commits

contributions(user)
  .then(data => {
    commits = data
})

// Can access commits once the promise has resolved

// var weeklyCommits = commits.week
//var monthlyCommits = commits.month
//var yearlyCommits = commits.year

contributions(user)
  .then(data => {
    console.log(data.week)
    console.log(data.month)
    console.log(data.year)
})

