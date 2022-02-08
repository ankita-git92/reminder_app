import { APP_URL } from '@env';
let APP_URL_PREFIX = APP_URL;

if (APP_URL_PREFIX.charAt(APP_URL_PREFIX.length - 1) === '/') {
  APP_URL_PREFIX = APP_URL_PREFIX.substr(0, APP_URL_PREFIX.length - 1);
}

const API = 'api';
export const API_CONFIG = {
  LOGIN: `${APP_URL_PREFIX}/${API}/login`,
  LOGOUT: `${APP_URL_PREFIX}/${API}/logout`,
  PERMISSIONS: `${APP_URL_PREFIX}/${API}/user/system/permissions`,
  CHECKTWOFA: `${APP_URL_PREFIX}/${API}/check/twofa`,
};
