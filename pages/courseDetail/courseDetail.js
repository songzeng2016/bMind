// pages/detail/detail.js
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        title: '课程介绍',
        desc: '发时代峰峻三分时代峰峻萨拉附，近啊时代峰峻萨。拉附近啊是时代峰峻萨拉附近是打发家老三'
      },
      {
        title: '课程介绍',
        desc: '发时代峰峻三分时代峰峻萨拉附，近啊时代峰峻萨。拉附近啊是时代峰峻萨拉附近是打发家老三'
      },
      {
        title: '课程介绍',
        desc: '发时代峰峻三分时代峰峻萨拉附，近啊时代峰峻萨。拉附近啊是时代峰峻萨拉附近是打发家老三'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let id = options.id
    let getData = {
      Action: 'GetCourseDetail',
      ID: id || 12
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          info: json[data]
        })
      }
    })
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