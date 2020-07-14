import wepy from 'wepy';
import tip from './tip'

const apiDomain = 'http://192.168.2.230:9096'

const requestPath = {
    common: '/sysuser/fg',
    talk: '/talk/fg',
    file: '/file/file',
    base: '/sysuser/fg/permissions',
    bgTalk: '/talk/bg',
    ImgPath: apiDomain + '/file/file/?fileName='
}

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};

    let header = {
        'Content-Type': 'application/json'
    }

    let YToken = wepy.getStorageSync('Y-Token')

    if (YToken) {
        header['Y-Token'] = YToken
    }

    let res = await wepy.request({
        url: apiDomain + url,
        method: params.method || 'GET',
        data: data,
        header: header
    });

    tip.loaded();
    return res;
}

module.exports = {
    wxRequest,
    apiDomain,
    requestPath
}