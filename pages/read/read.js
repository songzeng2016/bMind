// pages/goods/goods.js
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 分类展开收起

  // 分类筛选条件  change value
  classSortChangeFn: function (e) {
    let val = e.detail.value;
    this.setData({
      classSortSelect: val
    });
    //console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  // 产地展开收起
  placeUnfold: function (e) {
    // console.log(e)
    var index = e.currentTarget.dataset.index;
    var status = this.data.list[index].placePurSortOpen
    var list = this.data.list
 
    for(var i = 0;i<list.length;i++){
      list[i].placePurSortOpen = true;
    }
    list[index].placePurSortOpen = !status
    this.setData({ list });
  },
  //产地筛选条件  change value
  placeSortChangeFn: function (e) {
    let val = e.detail.value;
    this.setData({
      placeSortSelect: val
    });
    //console.log('radio发生change事件，携带value值为：', e.detail.value)
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