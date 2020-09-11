const { Router } = require('express')
const router = Router()
const nodemailer = require('nodemailer')

router.get('/', function (req, res) {
  var sent
  if (req.query.sent === '1') {
    sent = true
  }

  if (req.query.sent === '0') {
    sent = false
  }

  var welcome = 'Software Developer with a demonstrated history of working in the computer software industry. Skilled in Scrum, JavaScript, PHP, MySQL, Linux. Strong engineering professional graduated from University of Plymouth.'
  var title = 'Andy Elsbury'
  var tags = ['Software Developer', 'Scrum Master']
  var avatar = 'img/andyelsbury.jpg'

  var social = {
    twitter: { icon: 'twitter', name: 'Twitter', link: 'https://twitter.com/AndyElsbury' },
    github: { icon: 'github', name: 'Github', link: 'https://github.com/elsbury13' },
    linkedin: { icon: 'linkedin', name: 'Linkedin', link: 'https://www.linkedin.com/in/andy-elsbury-5b6a2b8b/' },
    email: { icon: 'envelope-o', name: 'Email', link: '#email' }
  }

  var contact = ['07891090964', '+447891090964', 'andy.elsbury@gmail.com']

  var projects = {
    gates: { image: 'img/gatestranslate.jpg', link: '#', name: 'Gates Translate' },
    education: { image: 'img/education1st.png', link: 'https://andyelsbury.uk/andy/education1st/', name: 'Education 1st' },
    challenge: { image: 'img/thechallenge.png', link: 'https://andyelsbury.uk/andy/thechallenge/', name: 'The Challenge' },
    swift: { image: 'img/swift.png', link: 'https://www.swiftsportscoaching.co.uk', name: 'Swift Sports Coaching' },
    tkkma: { image: 'img/tkkma.png', link: 'https://www.tkkma.co.uk', name: 'TKKMA' },
    bilbao: { image: 'img/bristolbilbao2.png', link: 'https://www.bristolbilbao.co.uk', name: 'Bristol Bilbao' },
    wedding: { image: 'img/wedding.png', link: 'https://andyelsbury.uk/andy/mrandmrselsbury/public/', name: 'Mr & Mrs Elsbury' },
    christian: { image: 'img/tanikaandchristian.png', link: 'https://andyelsbury.uk/andy/tanikaandchristianswedding/public', name: 'Tanika & Christian\'s Wedding' }
  }

  res.render('index', {
    title,
    welcome,
    avatar,
    tags,
    projects,
    social,
    contact,
    sent
  })
})

router.post('/contact', (req, res) => {
  if (req.body.about) {
    res.redirect('/')
  }

  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'andy.elsbury@gmail.com',
      pass: ''
    }
  })

  const mailOpts = {
    from: `${req.body.email}`,
    to: 'andy.elsbury@gmail.com',
    subject: `${req.body.subject}`,
    text: `${req.body.name} (${req.body.email}) says: \n${req.body.message}`
  }

  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('/?sent=0#email')
    } else {
      res.redirect('/?sent=1#email')
    }
  })
})

module.exports = router