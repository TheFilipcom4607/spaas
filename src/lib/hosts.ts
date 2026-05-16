export const APP_HOST = 'app.getspaas.com';
export const MARKETING_HOST = 'getspaas.com';

const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

export const isAppSubdomain = hostname === APP_HOST;
export const isMarketingHost =
  hostname === MARKETING_HOST || hostname === `www.${MARKETING_HOST}`;

export const loginUrl = isMarketingHost ? `https://${APP_HOST}/` : '/login';

export const marketingUrl = (path: string = '/') =>
  isAppSubdomain ? `https://${MARKETING_HOST}${path}` : path;

export const marketingHomeUrl = marketingUrl('/');
