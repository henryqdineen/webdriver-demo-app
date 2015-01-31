var express = require('express');
var nodemailer = require("nodemailer");
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebDriver Demo App' });
});

router.post('/send', function(req, res, next) {
  var transport;

  transport = nodemailer.createTransport("SMTP",{
    host: "127.0.0.1",
    secureConnection: false,
    port: 1025
  });

  transport.sendMail({
    from: "Henry Q. Dineen <henry.dineen@example.com>",
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  }, function(error, response){
    if(error){ throw Error(); }
    else{
      setTimeout(function() {
        res.json({});
      }, 3e3);
    }
  });
});

module.exports = router;
