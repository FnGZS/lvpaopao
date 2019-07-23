
Page({
  data: {
    // 下拉菜单
    first: '地区',
    second: '价格',
    thirds: '接单量',
    fours: '类型',
    _city: 0,
    _price: 0,
    _amount: 0,
    _type: 0,
    cityArr: [{ 'value': '全部' }, { 'value': '越城区' }, { 'value': '柯桥区' }, { 'value': '上虞区' }],
    priceArr: [{ 'value': '默认' }, { 'value': '价格升序' }, { 'value': '价格降序' }],
    amountArr: [{ 'value': '默认' }, { 'value': '接单量升序' }, { 'value': '接单量降序' }],
    typeArr: [{ 'value': '默认' }, { 'value': '明星保洁员' }, { 'value': '普通保洁员' }],
    currentTab: 0
  },
  onLoad: function (options) {

  },


  // 点击空白处
  hideNav: function () {
    this.setData({
      displays: "none"
    })
  },
  // 点击导航栏
  tabNav: function (e) {
    this.setData({
      displays: "block"
    })
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  // 点击地区
  clickCity: function (e) {
    this.setData({
      _city: e.target.dataset.num,
      first: e.target.dataset.name,
      displays: "none"
    })
  },
  // 点击价格
  clickPrice: function (e) {
    this.setData({
      _price: e.target.dataset.num,
      second: e.target.dataset.name,
      displays: "none"
    })
  },
  // 点击接单量
  clickAmount: function (e) {
    this.setData({
      _amount: e.target.dataset.num,
      thirds: e.target.dataset.name,
      displays: "none"
    })
  },
  // 点击接单量
  clickType: function (e) {
    this.setData({
      _type: e.target.dataset.num,
      fours: e.target.dataset.name,
      displays: "none"
    })
  },


  
})

