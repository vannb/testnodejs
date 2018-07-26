import _ from 'lodash';

import Mailer from './mailer';
import SendGrid from './sendgrid';
import * as CONFIG from './config';

export const sendAdmin = (options) => {
  const option = _.pick(options,['subject','text','html']);
  option.to = CONFIG.ADMIN_EMAIL;

  SendGrid.send(option);
  // Mailer.send(option);
};

export const sendCustomer = (options) => {
  const option = _.pick(options,['subject','text','html']);
  option.to = CONFIG.CUSTOMER_EMAIL;

  // Mailer.send(option);
  SendGrid.send(option);
};

export const serverIsDown = (failed = 0) => {
  const options = {
    'subject': 'VN30 SMMA NOTIFICATION SERVER IS DOWN! PLEASE CHECK',
    'text': `Server is down(Failed: ${failed} times)`,
    'html': `<p>Server is down(Failed: ${failed} times)</p>`,
  }
  sendAdmin(options);
  sendCustomer(options);
};
export const applicationStarted = () => {
  const options = {
    'subject': 'VN30 SMMA NOTIFICATION APP STARTED',
    'text': 'This is a test notification from VN30 SMMA NOTIFICATION',
    'html': '<p>This is a test notification VN30 SMMA NOTIFICATION</p>',
  }
  sendAdmin(options);
  sendCustomer(options);
};

export const cross = (result) => {
  const options = {
    'subject': 'CROSSED NOTIFICATION',
    'text': `Current value: SMMA50: ${result.sma50}, SMMA7:${result.sma7}.`,
    'html': `<p>Current value:</p><p>SMMA50: ${result.sma50}</p><p>SMMA7:${result.sma7}</p>`
  }
  sendAdmin(options);
  sendCustomer(options);
};

export const exitRange40 = (result) => {
  const options = {
    'subject': 'EXIT RANGE 40 NOTIFICATION',
    'text': `Current value: SMMA50: ${result.sma50}, SMMA7:${result.sma7}.`,
    'html': `<p>Current value:</p><p>SMMA50: ${result.sma50}</p><p>SMMA7:${result.sma7}</p>`
  }
  sendAdmin(options);
  sendCustomer(options);
};

export const enterRange2 = (result) => {
  const options = {
    'subject': 'SMMA 50 - SMMA7 is entering RANGE 2',
    'text': `Current value: SMMA50: ${result.sma50}, SMMA7:${result.sma7}.`,
    'html': `<p>Current value:</p><p>SMMA50: ${result.sma50}</p><p>SMMA7:${result.sma7}</p>`
  }
  sendAdmin(options);
  sendCustomer(options);
};

export const enterRange3 = (result) => {
  const options = {
    'subject': 'SMMA 50 - SMMA7 is entering RANGE 3',
    'text': `Current value: SMMA50: ${result.sma50}, SMMA7:${result.sma7}.`,
    'html': `<p>Current value:</p><p>SMMA50: ${result.sma50}</p><p>SMMA7:${result.sma7}</p>`
  }
  sendAdmin(options);
  sendCustomer(options);
};
