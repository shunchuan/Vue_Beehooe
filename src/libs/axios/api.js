import ajaxHelper from './ajaxHelper';

export default _ => {
    // 异步
    return {
        getTreeDataApi (url) {
            return ajaxHelper.get(url, null);
        },
        getJsonApi (url) {
            return ajaxHelper.get(url, null);
            // ajaxHelper.get(url, null).then(await result => {
            //     return result;
            // });
        }
    };
}