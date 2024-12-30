const { Router } = require('express')
const router = Router()
const contributions = require('../public/js/github-contributions')

let commits

contributions('elsbury13')
  .then(data => {
    commits = data
})

router.get('/', function (req, res) {
  var welcome = 'Software Developer with a demonstrated history of working in the computer software industry. Skilled in Scrum, JavaScript, PHP, MySQL, Linux. Strong engineering professional graduated from University of Plymouth.'
  var title = 'Andy Elsbury'
  var tags = ['Software Developer', 'Scrum Master', 'Release Manager']
  var avatar = 'img/andyelsbury.jpg'

  var social = {
    twitter: { icon: 'twitter', name: 'Twitter', link: 'https://twitter.com/AndyElsbury' },
    github: { icon: 'github', name: 'Github', link: 'https://github.com/elsbury13' },
    linkedin: { icon: 'linkedin', name: 'Linkedin', link: 'https://www.linkedin.com/in/andy-elsbury-5b6a2b8b/' },
    email: { icon: 'envelope-o', name: 'Email', link: '#email' }
  }

  var contact = ['07891090964', '+447891090964', 'andy.elsbury@gmail.com']

  var projects = {
    eventsOnTheGreen: { image: 'img/eventsonthegreen.png', link: 'https://eventsonthegreen.co.uk', name: 'Events On The Green' },
    swift: { image: 'img/swift.png', link: 'https://www.swiftsportscoaching.co.uk', name: 'Swift Sports Coaching' },
    laurenJamoe: { image: 'img/laurenjamie.png', link: 'https://laurenjamiehairandmakeup.com', name: 'Lauren Jamie' },
    tkkma: { image: 'img/tkkma.png', link: 'https://www.tkkma.co.uk', name: 'TKKMA' },
    desireHairdressing: { image: 'img/desire.png', link: 'https://www.desirehairdressing.com', name: 'Desire Hairdressing' },
    theWeddingArtistsUk: { image: 'img/theWeddingArtistsUk.png', link: 'https://theweddingartists.uk', name: 'The Wedding Artists Uk' },
    shaddick: { image: 'img/shaddick.png', link: 'https://andyelsbury.uk/andy/shaddick', name: 'Mark Shaddick' },
    bilbao: { image: 'img/bristolbilbao2.png', link: 'https://www.bristolbilbao.co.uk', name: 'Bristol Bilbao' },
    wedding: { image: 'img/wedding.png', link: 'https://andyelsbury.uk/andy/mrandmrselsbury/public/', name: 'Mr & Mrs Elsbury' },
    christian: { image: 'img/tanikaandchristian.png', link: 'https://andyelsbury.uk/andy/tanikaandchristianswedding/public', name: 'Tanika & Christian\'s Wedding' },
    challenge: { image: 'img/thechallenge.png', link: 'https://andyelsbury.uk/andy/thechallenge/', name: 'The Challenge' },
    education: { image: 'img/education1st.png', link: 'https://andyelsbury.uk/andy/education1st/', name: 'Education 1st' }
  }

  res.render('index', {
    title,
    welcome,
    avatar,
    tags,
    projects,
    social,
    contact,
    commits
  })
})

module.exports = router
