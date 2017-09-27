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
          { id: 101, name: '妹子喜欢的' },
          { id: 102, name: '帅哥喜欢的' },
          { id: 103, name: '大妈喜欢的' }
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
      },
      {
        placeSortSelect: "全部时间",
        placePurSortOpen: true,
        placeSortData: [
          { id: 100, name: '全部时间', checked: 'true' },
          { id: 101, name: '北京' },
          { id: 102, name: '天津' },
          { id: 103, name: '上海' }
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