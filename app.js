import moment from 'moment';
import { checkAndTrack } from './check-and-track';
import * as CONFIG from './config';

setInterval(checkAndTrack, CONFIG.CHECK_INTERVAL);

checkAndTrack();
