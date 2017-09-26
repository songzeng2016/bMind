// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classPurSortOpen: false,
    placePurSortOpen: false,
    placePurSortOpens:false,
    classSortData: [
      { id: 100, name: '全部分类', checked: 'true' },
      { id: 101, name: '妹子喜欢的' },
      { id: 102, name: '帅哥喜欢的' },
      { id: 103, name: '大妈喜欢的' }
    ],
    classSortSelect: "全部分类",
    placeSortData: [
      { id: 100, name: '产地', checked: 'true' },
      { id: 101, name: '北京' },
      { id: 102, name: '天津' },
      { id: 103, name: '上海' }
    ],
    placeSortSelect: "产地",
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
    var open = e.currentTarget.dataset.type
    console.log(open)
    if(open==1){
      this.setData({
        placePurSortOpen: !this.data.placePurSortOpen
      });
    }else if(open==2){
      this.setData({
        placePurSortOpens: !this.data.placePurSortOpens
      });
    }else if(open == 0){
      this.setData({
        classPurSortOpen: !this.data.classPurSortOpen
      });
    }
   
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