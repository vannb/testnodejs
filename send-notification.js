import _ from 'lodash';

import Mailer from './mailer';
import * as CONFIG from './config';

export const sendAdmin = (options) => {
  const option = _.pick(options,['subject','text','html']);
  option.to = CONFIG.ADMIN_EMAIL;
  Mailer.send(option);
}

export const sendCustomer = (options) => {
  const option = _.pick(options,['subject','text','html']);
  option.to = CONFIG.CUSTOMER_EMAIL;
  Mailer.send(option);
}


export const serverIsDown = (failed) => {
  const options = {
    'subject': 'VN30 SMMA NOTIFICATION SERVER IS DOWN! PLEASE CHECK',
    'text': `Failed: ${failed}`,
  }
  sendAdmin(options);
  sendCustomer(options);
}

export const cross = (result) => {
  const options = {
    'subject': 'CROSSED NOTIFICATION',
    'text': `Current value: SMMA50: ${result.sma50}, SMMA7:${result.sma7}.`,
    'html': `<p>Current value:</p><p>SMMA50: ${result.sma50}</p><p>SMMA7:${result.sma7}</p>`
  }
  sendAdmin(options);
  sendCustomer(options);
}
export const exitRange40 = (result) => {
  const options = {
    'subject': 'EXIT RANGE 40 NOTIFICATION',
    'text': `Current value: SMMA50: ${result.sma50}, SMMA7:${result.sma7}.`,
    'html': `<p>Current value:</p><p>SMMA50: ${result.sma50}</p><p>SMMA7:${result.sma7}</p>`
  }
  sendAdmin(options);
  sendCustomer(options);
}