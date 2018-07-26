import moment from 'moment';
import { checkAndTrack } from './check-and-track';
import * as CONFIG from './config';
import { applicationStarted } from './send-notification';

setInterval(checkAndTrack, CONFIG.CHECK_INTERVAL);

checkAndTrack();

applicationStarted();
