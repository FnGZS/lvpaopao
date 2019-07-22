var url = require('../../config.js')
const sendAjax = require('../../utils/sendAjax.js')
var login = require('../../utils/wxlogin.js')
Page({
  data: {
    userInfo: null,
    imgUrls: [{ picUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=265069926,1736566583&fm=15&gp=0.jpg'},
      { picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3617678736,2551419226&fm=15&gp=0.jpg'}],
       msgList: [
        { url: "url", title: "公告：多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
        { url: "url", title: "公告：悦如公寓三周年生日趴邀你免费吃喝欢唱" },
        { url: "url", title: "公告：你想和一群有志青年一起过周末嘛？" }]
  },
  onLoad: function (options) {
   
  },
  onReady: function () {
  },
  onShow: function () {
   
  },

  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  }
})