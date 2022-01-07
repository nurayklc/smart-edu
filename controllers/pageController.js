const nodemailer = require('nodemailer');

exports.getIndexPage = (req, res) => {
  res.status(200).render('index', {
    pageName: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    pageName: 'about',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    pageName: 'contact',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    pageName: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    pageName: 'login',
  });
};

exports.sendMail = async (req, res) => {
  try {
    const outputMessage = `
  <h1>Mail Details</h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
  </ul>
  <h1>Message</h1>
  <p> ${req.body.message} </p>
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'nuraykilic0101@gmail.com', // gmail account
        pass: 'bpzvcliqmzhrinmi', // gmail password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Smart Edu Contact Form 👻" <nuraykilic0101@gmail.com>', // sender address
      to: 'nuraykilic0101@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      html: outputMessage, // html body
    });

    req.flash('success', 'We Received your message succesfully');
    

    res.status(200).redirect('/contact');

  } catch (error) {
    req.flash('error', 'Something happened!');
    res.status(200).redirect('/contact');
  }
};
