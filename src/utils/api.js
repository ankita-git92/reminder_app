const ENDPOINTS = {
  // AUTH
  PERMISSIONS: 'user/system/permissions',

  // DASHBOARD
  DASHBOARD: 'dashboard',
  ACTIVITYANDNEXTSTEP: 'fundmanagers/list/investors/investments',
  CHANGEINVESTMENTINVESTORSTATUS: 'fundmanagers/investors/investments/actions',
  SERIESNUMBER: 'integration/stampseries',

  // FUNDS
  FUNDS: 'funds',
  FUNDLEADS: 'funds/leads',
  FUNDACTIVEINVESTOR: 'funds/activeinvestor',
  FUNDPORTFOLIOCOMPANY: 'funds/portfoliocompany',
  FUNDNAVUPDATES: 'funds/nav',
  FUNDINVESTMENTUPDATES: 'funds/fundinvestmentupdate',
  FUNDINVESTMENTUPDATESDETILS: 'funds/fundinvestmentupdate/details',
  FUNDSTATUSLOG: 'funds/status/logs',
  ACTIVEINVESTORDETAIL: 'investors/details',
  CHANGEINVESTORVISIBILITY: 'funds/change/investorvisible/status',
  CHANGEFUNDSTATUS: 'funds/change/status',
  PASTINVESTMETSUMMARY: 'fundmanagers/pastinvestmentsummary',
  DRAWDOWNDATA: 'funds/drawdowmstage/all',
  NAV: 'funds/nav',
  MULTIPLEINVESTOR: 'funds/fetch/multiple/investors',
  DRAWDOWNBYSTAGE: 'funds/drawdowmstage',
  DRAWDOWNINVESTORBYSTAGE: 'funds/all/investor/by/drawdownstage',
  DRAWDOWN: 'drawdown',
  GETVISIBILITYSETTINGS: 'fundmanagers/profile/settings',
  PROFILESETTING: 'fundmanagers/change/profilesettings',
  LEADDETAILS: 'funds/leads/details',

  // FUNDMANAGER
  FUNDMANGER: 'fundmanagers',
  FUNDMANAGERDASHBOARD: 'dashboard/fundmanager/fund',
  FUDNMANAGERTEAMS: 'fundmanagers/teams',
  FUDNMANAGERTRACKRECORD: 'fundmanagers/trackrecord',
  FUNDMANAGERFETCHALLFUNDS: 'fundmanagers/fetch/all/funds',

  // TRANSACTION
  TRANSACTIONLOGS: 'transactions/logs',
  TRANSACTION: 'transactions',
  CONFIRMPAYMENT: 'transactions/confirm/payment',

  // INVESTOR
  INVESTORUPCOMINGDRAWDOWNS: 'investors/upcoming/drawdowns',
  INVESTORUPDATES: 'investors/recent/investor/updates',
  INVESTORINVESTMENT: 'investors/all/investments',
  INVESTORINVESTMENTDETAILS: 'investors/investments/details',
  INVESTORPAYMENTLOGS: 'investors/investment/payment/logs',
  INVESTORACTIVITYSTEPS: 'investors/activity/next/steps',
  INVESTORFUNDMANAGERS: 'investors/fetch/fundmanagers',
  INVESTORS: 'investors',
  ACTIVEINVESTMENT: 'fundmanagers/list/investors/active/investments',
  INVESTORBYFUND: 'funds/all/investor',
  INVESTORPASTINVESTMENTSUMMARY: 'fundmanagers/pastinvestmentsummary/investors',
  INVESTORFUNDMANAGERDETAIL: 'funds/fundmanager/details',
  INVESTORFUNDS: 'investors/funds/commited',

  // CHAT
  POSTMESSAGE: 'chats',

  // INVESTMENT
  INVESTMENT: 'investments',

  // REPORTS
  REPORTTRANSACTIONLOGS: 'reports/transaction/logs',
  REPORTFUNDRAISEUPDATE: 'reports/commitments',
  REPORTLEADACTIVITY: 'reports/leadactivity',
  REPORTDRAWDOWN: 'reports/drawdown',
  REPORTSINVESTORACTIVITYLOGS: 'reports/activitylogs',
  REPORTSPORTFOLIOCOMPANY: 'reports/portfoliocompanies',

  // UPLOAD
  CONVERSATIONUPLOAD: 'conversation/upload',

  // CHANGE PASSWORD:
  CHANGEPASSWORD: 'user/change/password',
};

export const API = (path, id) => {
  const BASE_URL = process.env.APP_URL;
  const GLOBAL_API_PREFIX = 'api';

  if (path === 'ASSET_URL') {
    const assetUrl = process.env.ASSET_URL;
    return `${assetUrl}`;
  }
  if (path === 'ASSET_URL_S3') {
    const assetUrl = process.env.ASSET_URL_S3;
    return `${assetUrl}`;
  }

  if (id) {
    return `${BASE_URL}/${GLOBAL_API_PREFIX}/${ENDPOINTS[path]}/${id}`;
  } else if (ENDPOINTS[path]) {
    return `${BASE_URL}/${GLOBAL_API_PREFIX}/${ENDPOINTS[path]}`;
  } else {
    return `${BASE_URL}`;
  }
  // return id
  //   ? `${BASE_URL}/${GLOBAL_API_PREFIX}/${ENDPOINTS[path]}/${id}`
  //   : `${BASE_URL}/${GLOBAL_API_PREFIX}/${ENDPOINTS[path]}`;
};
