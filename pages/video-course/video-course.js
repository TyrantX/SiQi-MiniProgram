//获取应用实例
const app = getApp()

Page({
  data: {
    video: "C:/Users/50131/Documents/GitHub/SiQi-Backend/src/main/resources/course/calligraphy.mp4",
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,
  },
  //事件处理函数
  checkCurrentTab(e) {
    const that = this;
    if (that.data.checkCurrentTab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
})
