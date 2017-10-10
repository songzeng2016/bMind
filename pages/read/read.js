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
    list: [
      {
        placeSortSelect: "全部分类",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '全部分类', checked: 'true' },
          { id: 101, name: '文艺青年' },
          { id: 102, name: '炫酷风格' },
          { id: 103, name: '精品推存' }
        ],
      },
      {
        placeSortSelect: "最热",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '最热', checked: 'true' },
          { id: 101, name: '最新' }
        ],
      },
      {
        placeSortSelect: "全部时间",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '全部时间', checked: 'true' },
          { id: 101, name: '一周内' },
          { id: 102, name: '一月内' }
        ],
      }
    ],

  },

  // 获取列表
  getList: function({}) {
    // list
    let getData = {
      Action: 'GetNewsList',
      KeyWords: '',
      ClassID: 0,
      SortType: 0,
      TimeType: 0,
      pageSize: 10,
      pageIndex: 1
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          readList: json[data]
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
      ClassID: 1
    }
    wc.get(bData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          imgUrls: json[data]
        })
      }
    })

    // list
    let getData = {
      Action: 'GetNewsList',
      KeyWords: '',
      ClassID: 0,
      SortType: 0,
      TimeType: 0,
      pageSize: 10,
      pageIndex: 1
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          readList: json[data]
        })
      }
    })

    //引入条件筛选
    var filtration = new Filtration(this);
    filtration.bindEvents();  
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