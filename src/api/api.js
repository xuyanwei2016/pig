import { wxRequest, requestPath } from '@/utils/wxRequest'

const getPrice = (params) => wxRequest(params, `${requestPath.common}/avgs/get`) //当天猪价
const getNearbyPrice = (params) => wxRequest(params, `${requestPath.common}/pigprice/get`) //当天附近猪价
const getIndexList = (params) => wxRequest(params, `${requestPath.talk}/talk/list`) //首页话题列表
const getTodayPrice = (params) => wxRequest(params, `${requestPath.common}/avgs/get/province`) // 当天各省猪价
const addPrice = (params) => wxRequest(params, `${requestPath.common}/pigprice/save`) // 新增报价
const getOfferDays = (params) => wxRequest(params, `${requestPath.common}/days/get`) //用户报价天数
const wxJsCode2Session = (params) => wxRequest(params, `${requestPath.base}/wechat/login`)

// const questionListAPI = (params) => wxRequest(params, `${requestPath.talk}/talk/myasklist`) // 我的提问list
// const answerListAPI = (params) => wxRequest(params, `${requestPath.talk}/reply/myreplylist`) // 我的回复list


const myQADetailsApi = (params) => wxRequest(params, `${requestPath.talk}/talk/${params}`)
    //请求指定专家详细信息
const getExpertApi = (params) => wxRequest(params, `${requestPath.common}/member/get/${params}/expert`)
    //请求会员列表信息
const memberListApi = (params) => wxRequest(params, `${requestPath.common}/member/list`)
    //添加回复
const replyApi = (params) => wxRequest(params, `${requestPath.talk}/reply/savereply`)
    //采纳
const editAdoptApi = (params) => wxRequest(params, `${requestPath.talk}/reply/adopt`)
    // 点赞
const editPraiseApi = (params) => wxRequest(params, `${requestPath.talk}/reply/thumbsup`)
    //获取话题列表
const getTalkListApi = (params) => wxRequest(params, `${requestPath.talk}/talk/list`)
    //获取我的提问列表
const myaskListApi = (params) => wxRequest(params, `${requestPath.talk}/talk/myasklist`)
    // 我的回复列表
const myreplyListApi = (params) => wxRequest(params, `${requestPath.talk}/reply/myreplylist`)
    // 我的帖子列表
const myhotListApi = (params) => wxRequest(params, `${requestPath.talk}/talk/myhotlist`)
    //获取一级回复
const oneReplylistApi = (params) => wxRequest(params, `${requestPath.talk}/reply/replylist`)
    //获取二级回复
const twoReplylistApi = (params) => wxRequest(params, `${requestPath.talk}/reply/replylist2`)

const getMember = (params) => wxRequest(params, `${requestPath.common}/member/get/member`)
const getStatisticMember = (params) => wxRequest(params, `${requestPath.talk}/talk/statisticnum`)

const getMemberQuotation = (params) => wxRequest(params, `${requestPath.common}/member/get`)
const getQuotations = (params) => wxRequest(params, `${requestPath.common}/pigprice/page`)
const question = (params) => wxRequest(params, `${requestPath.talk}/talk/saveask`) //快速提问
const publistHot = (params) => wxRequest(params, `${requestPath.talk}/talk/savehot`) //快速提问
const certifiedProfess = (params) => wxRequest(params, `${requestPath.common}/member/save/expert`) //认证专家
const certifiedRepeat = (params) => wxRequest(params, `${requestPath.common}/member/update/expert`) //再次认证专家
const professInfo = (params) => wxRequest(params, `${requestPath.common}/member/get/expert`) //当前用户查询专家信息
const professList = (params) => wxRequest(params, `${requestPath.common}/member/page/expert`) //专家列表
const professDetails = (params) => wxRequest(params, `${requestPath.common}/member/get/${params.query.oid}/expert`) //专家列表（id）--详情
const priceAvgList = (params) => wxRequest(params, `${requestPath.common}/avgs/list?${params.paramsStr}`)
const priceAvg = (params) => wxRequest(params, `${requestPath.common}/avgs/get`)
    //查询广告列表
const getAdList = (params) => wxRequest(params, `${requestPath.common}/adspace/adsign?signValue=${params.id}`);


export default {
    getAdList,
    getPrice,
    getNearbyPrice,
    getIndexList,
    getTodayPrice,
    addPrice,
    getOfferDays,
    myQADetailsApi,
    getExpertApi,
    memberListApi,
    replyApi,
    editAdoptApi,
    wxJsCode2Session,
    getMember,
    getMemberQuotation,
    getQuotations,
    question,
    certifiedProfess,
    certifiedRepeat,
    professList,
    professInfo,
    professDetails,
    getTalkListApi,
    myaskListApi,
    oneReplylistApi,
    myreplyListApi,
    myhotListApi,
    publistHot,
    priceAvgList,
    priceAvg,
    twoReplylistApi,
    getStatisticMember,
    editPraiseApi
}