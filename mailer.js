import nodemailer from 'nodemailer';
import _ from 'lodash';
import * as CONFIG from './config';

const initMailer = () => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: CONFIG.EMAIL_USER,
    pass: CONFIG.EMAIL_PASS
  }
});

let defaultOption = {
  from: CONFIG.EMAIL_FROM, // sender address
  to: CONFIG.ADMIN_EMAIL, // list of receivers
  subject: 'VN30 NOTIFICATION DEFAULT TITLE', // Subject line
  text: 'VN30 NOTIFICATION DEFAULT MESSAGE', // plain text body
};
const send = (option) => {
  const transporter = initMailer();
  const sendOption = _.pick(_.defaults(option, defaultOption),['from', 'to', 'subject', 'text', 'html']);

  if(!sendOption.html){
    sendOption.html = `<p>${sendOption.text}</p>`;
  }

  transporter.sendMail(sendOption, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(`Email sent: ${subject}`);
  });
};

export default {
  send,
}