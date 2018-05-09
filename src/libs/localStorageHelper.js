

/**封装localStorage */
let localStorageHelper = {

};

/** 获取localStorage中当前用户信息 */
localStorageHelper.getLocalUser = function () {
    return this.get('user');
};

/** 设置当前用户信息 */
localStorageHelper.setLocalUser = function (user) {
    this.set('user', user);
};

localStorageHelper.removeLocalUser = function () {
    this.remove('user');
};

/** 存储LocalStorage信息 
 * @params {string}key 
 * @params {string}value
*/
localStorageHelper.set = function (key, value) {
    window.localStorage.setItem(key, value);
}

/**获取LocalStorage信息 */
localStorageHelper.get = function (key) {
    return window.localStorage.getItem(key);
}


/** 根据key清除LocalStorage*/
localStorageHelper.remove = function (key) {
    window.localStorage.removeItem(key);
};

/** 设置用户Token（默认当前用户） 
 *  登陆时使用
 * data:{    type:'',    expires:'',    access_token:'' }
*/
localStorageHelper.setToken = function (data, key = this.getLocalUser()) {
    debugger;
    if (!key)
        throw ('no user info');
    key += 'Token';
    // 已存在应该是覆盖吧？
    // if (this.get(key)) {
    //     this.remove(key);
    // }
    this.set(key, JSON.stringify(data));
};

/** 获取用户Token信息（默认当前用户） */
localStorageHelper.getToken = function (key = this.getLocalUser()) {
    if (!key)
        return null;
    key += 'Token';
    let data = this.get(key);
    if (data) {
        data = JSON.parse(data);
        let expires = new Date(data.expires);
        let nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        if (expires > nextDay) {
            return data;
        } else {
            this.remove(key)
        }
    }
    return null;
};


export default localStorageHelper;
