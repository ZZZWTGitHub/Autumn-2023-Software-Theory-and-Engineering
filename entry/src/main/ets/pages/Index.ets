import SideBar from './view/SideBar'
import SideBarContent from './view/SideBarContent'
import SideBarContentBac from './view/SideBarContentBac'
import { CityModel } from '../model/CityModel'
import { WeatherUiModel } from '../model/WeatherUiModel'
import utils from '../utils/utils'

@Entry
@Component
struct Index {
  @State isShowSideBar: boolean = false;
  @State selectCity: CityModel = { locationId: 101280601, locationName: '深圳' };
  @State weatherUiModel: WeatherUiModel = {
    nowTemp: 0,
    nowWeatherText: 0,
    tempMax: 0,
    tempMin: 0,
    category: 0,
    precip: 0,
    hourlyTemp: [],
    iconDays: [],
    date: '-月-日',
    day: '',
    dayArr: utils.getDayArr(),
    hoursArr: utils.getHoursArr(),
  };

  // 绘制界面
  build() {
    SideBarContainer(SideBarContainerType.Embed) {

      // 侧边栏
      SideBar({ selectCity: $selectCity, isShowSideBar: $isShowSideBar })

      if (this.isShowSideBar) {
        //灰底
        SideBarContentBac({ isShowSideBar: $isShowSideBar })
      } else {
        // 内容
        SideBarContent({ isShowSideBar: $isShowSideBar, selectCity: $selectCity, weatherUiModel: $weatherUiModel })
      }
    }
    .showControlButton(false)
    .showSideBar(this.isShowSideBar)
    .autoHide(false)
    .sideBarWidth(160)
    .width('100%')
  }
}