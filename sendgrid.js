// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail';
import _ from 'lodash';
import * as CONFIG from './config';


let defaultOption = {
  from: CONFIG.EMAIL_FROM, // sender address
  to: CONFIG.ADMIN_EMAIL, // list of receivers
  subject: 'VN30 NOTIFICATION DEFAULT TITLE', // Subject line
  text: 'VN30 NOTIFICATION DEFAULT MESSAGE', // plain text body
  html: '<strong>VN30 NOTIFICATION DEFAULT MESSAGE</strong>',
};

const send = (option = {}) => {
  sgMail.setApiKey(CONFIG.SENDGRID_API_KEY);

  const sendOption = _.pick(_.defaults(option, defaultOption),['from', 'to', 'subject', 'text', 'html']);

  if(!sendOption.html){
    sendOption.html = `<p>${sendOption.text}</p>`;
  }

  sgMail.send(sendOption);
}
export default {
  send,
}

