import ajaxHelper from './ajaxHelper';
import baseURL from './baseURL';

let api = {};

api.getTreeDataApi = url => { return ajaxHelper.get(url, null); };

api.getJsonApi = url => { return ajaxHelper.get(url, null); };

api.getRouterJson = params => { return ajaxHelper.get('../src/assets/json/router.json', params); };

export default api;