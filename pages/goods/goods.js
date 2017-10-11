import { Filtration } from '../../module/filtrate/filtrate'; //引入条件筛选
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../image/1.jpg",
      "../../image/2.jpg"
    ],

    supSortSelectId: 100,
    list: [
      {
        placeSortSelect: "全部分类",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '全部分类', checked: 'true' },
          { id: 101, name: '精品推存' },
          { id: 102, name: '文艺青年' },
          { id: 103, name: '炫酷风格' }
        ],
      },
      {
        placeSortSelect: "产地",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '产地', checked: 'true' },
          { id: 101, name: '北京' },
          { id: 102, name: '天津' },
          { id: 103, name: '上海' }
        ],
      }
    ],
  },

  // 搜索列表
  searchList: function (e) {
    const that = this
    let content = e.detail.value

    this.getList({ KeyWords: content })
  },

  // 获取列表
  getList: function ({ Action = 'GetProductList', KeyWords = '', ClassID = 0, SortType = 0, TimeType = 0, pageSize = 10, pageIndex = 1 } = {}) {
    const that = this
    // list
    let getData = {
      Action,
      KeyWords,
      ClassID,
      SortType,
      TimeType,
      pageSize,
      pageIndex
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          goodList: json[data]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this

    // banner
    let bData = {
      Action: 'GetAd',
      ClassID: 3
    }
    wc.get(bData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          imgUrls: json[data]
        })
      }
    })

    // list
    this.getList()

    //引入条件筛选
    var filtration = new Filtration(this);
    filtration.bindEvents();

    // 分类列表
    let dData = {
      Action: 'GetClassList',
      DepClassID: 3
    }
    let list = this.data.list
    wc.get(dData, (json) => {
      if (json[isSuccess] === success) {
        json.List.unshift({
          ClassID: 0,
          ClassName: '全部分类',
          checked: 'true'
        })
        that.setData({
          'list[0].placeSortData': json.List
        })
      }
    })

  },


  //收藏切换
  collectCut: function (e) {
    // console.log(e)
    var index = e.currentTarget.dataset.index;
    var list = this.data.list
    // console.log(list)
    list[index].praise = !(list[index].praise || false);
    this.setData({ list })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})