//
const homeBannerApi = '/v4/api/billboard/home'
//home热播中
const homeMovieApi = '/v4/api/film/now-playing'
//即将上映
const homeSoonPlayingApi = '/v4/api/film/coming-soon'
//请求影片列表详情
const moviesDetail = '/v4/api/film/'
//http://m.maizuo.com/v4/api/film/3828?__t=1503389370465

//获取影院数据
//http://m.maizuo.com/v4/api/cinema?__t=1503404415496
const cinema = '/v4/api/cinema?__t='

//根据影院Id获取影院详情
//http://m.maizuo.com/v4/api/cinema/3280?__t=1503479095065
const cinemaDetail = '/v4/api/cinema/'

//请求城市
const cityApi = '/v4/api/city'

//请求商城列表数据
//http://aura.maizuo.com/api/ad/list
const shopList = '/api/ad/list'
//好货精选
//http://aura.maizuo.com/api/recommend/home?page=1&num=20
const shopSift = '/api/recommend/home?page='

export default{
    homeBannerApi,
    homeMovieApi,
    homeSoonPlayingApi,
    cityApi,
    moviesDetail,
    cinema,
    cinemaDetail,
    shopList,
    shopSift
}
















