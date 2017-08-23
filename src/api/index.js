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



export default{
    homeBannerApi,
    homeMovieApi,
    homeSoonPlayingApi,
    cityApi,
    moviesDetail,
    cinema,
    cinemaDetail
}
















