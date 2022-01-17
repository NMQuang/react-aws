export const STORAGE_PREFIX = 'IBM_';
export const URL_DASHBOARD = '/';
export const URL_LOGIN = '/login';
export const URL_ORDER_REGISTER = '/order-register';
export const URL_PRINT = '/print';
export const URL_MASTER_REGISTER = '/master-register';
export const URL_FACTORY = '/factory';
export const TITLE_SYSTEM = '工程管理システム';
export const HEADER_DASHBOARD = 'ダッシュボード';
export const HEADER_ORDER_REGISTER = '受注登録';
export const HEADER_PRINT = '帳票印刷';
export const HEADER_MASTER_REGISTER = '各種マスタ登録';

// ENDPOINT
export const ENDPOINT_BRANCH_MASTER_LIST = 'branch/list';
export const ENDPOINT_ORDER_MASTER_LIST = 'order/getMaster';
export const ENDPOINT_ORDER_ADD = 'order/add';

// HTTP_METHOD
export const METHOD_GET = 'get';
export const METHOD_POST = 'post';

// MESSAGE ERROR
export const MSG_ERROR_001 = '%p can not be blank.';
export const MSG_ERROR_002 = '%p should be have not special character.';
export const MSG_ERROR_003 = '%p must be format phone number(000-000-0000).';
export const MSG_ERROR_004 = '%p must be format portalcode(000-0000).';
export const MSG_ERROR_005 = '%p should be max %p character.';
export const MSG_ERROR_006 = '%p should not be past date.';
export const MSG_ERROR_007 = '%p should be greater than or equal to %p.';
export const MSG_ERROR_008 = 'Must check the validation of the items.';
export const MSG_ERROR_009 = 'Should input %p to get %p before clicking.';

// MESSAGE INFO/SUCCESS
export const MSG_SUCCESS_001 = '%p successfully';

// COMMON
export const notSpecialChartRegex = /^[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*$/;
export const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]([0-9]{3})?[-. ]([0-9]{4})$/;
export const portalCodeRegex = /^\(?([0-9]{3})\)?[-. ]([0-9]{4})$/;
