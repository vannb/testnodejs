import request from 'request-promise-native';

import * as CONFIG from './config';
import { minus, inRange40, inRange2, inRange3 } from './calculation';
import * as Notify from './send-notification';

let oldResult = null;
export const check = async (retries = 0) => {
  try {
    const { result } = JSON.parse(await request(CONFIG.API_URL));

    console.log(`Result: ${JSON.stringify(result)} - Minus: ${minus(result)}, InRange40: ${inRange40(result)}`);

    if (oldResult) {
      if ((minus(result) * minus(oldResult) <= 0)) {
        Notify.cross(result);
      }

      if (!inRange2(oldResult) && inRange2(result)) {
        Notify.enterRange2(result);
      }
      if (!inRange3(oldResult) && inRange3(result)) {
        Notify.enterRange3(result);
      }

      if (inRange40(oldResult) && !inRange40(result)) {
        Notify.exitRange40(result);
      }
    }

    oldResult = result;
    return true;
  } catch (error) {
    console.log(`${error.message} (retries: ${retries})`)

    if (retries >= CONFIG.MAX_INTERVAL_RETRIES) {
      return false;
    }

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(check(retries + 1));
      }, CONFIG.RETRY_AFTER);
    });
  }
}