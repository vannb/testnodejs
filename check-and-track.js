import * as CONFIG from './config';
import { check } from './check';
import * as Notify from './send-notification'

const counter = { total: 0, success: 0, failed: 0, failedContinuous: 0, successContinuous: 0 };

export const checkAndTrack = async () => {
  const isSuccess = await check();
  counter.total++;
  if (isSuccess) {
    counter.success++;
    counter.successContinuous++;
    counter.failedContinuous = 0;
    console.log(`==================== Check: #${counter.total}, Success: ${counter.successContinuous}(${counter.success}), Failed: ___(${counter.failed}) ====================`);
  } else {
    counter.failed++
    counter.failedContinuous++;
    counter.successContinuous = 0;
    console.log(`==================== Check: #${counter.total}, Success: ___(${counter.success}), Failed: ${counter.failedContinuous}(${counter.failed}) ====================`);
    if(CONFIG.NOTIFY_FAILED_CONTINUOUS.includes(counter.failedContinuous)){
      Notify.serverIsDown(counter.failedContinuous);
    }
  }
}