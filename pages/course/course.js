import { Filtration } from '../../module/filtrate/filtrate'; //引入条件筛选
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1,
    imgUrls: [
      "../../image/1.jpg",
      "../../image/2.jpg"
    ],

    list: [
      {
        placeSortSelect: "全部分类",
        placePurSortOpen: true,
        placeSortData: [],
      },
      {
        placeSortSelect: "形式",
        placePurSortOpen: true,
        placeSortData: [
          { CourseType: 0, ClassName: '形式', checked: 'true' },
          { CourseType: 1, ClassName: '微课' },
          { CourseType: 2, ClassName: '工作坊' },
          { CourseType: 3, ClassName: '讲课' },
          { CourseType: 4, ClassName: '旅程' }
        ],
      },
      {
        placeSortSelect: "最热",
        placePurSortOpen: true,
        placeSortData: [
          { SortType: 0, ClassName: '最热', checked: 'true' },
          { SortType: 1, ClassName: '最新' }
        ],
      },
      {
        placeSortSelect: "全部时间",
        placePurSortOpen: true,
        placeSortData: [
          { TimeType: 0, ClassName: '全部时间', checked: 'true' },
          { TimeType: 1, ClassName: '一周内' },
          { TimeType: 2, ClassName: '一月内' }
        ],
      }
    ],
    list1: [
      {
        placeSortSelect: "城市",
        placePurSortOpen: true,
        placeSortData: [],
      },
    ]
  },

  // banner 跳转页面
  navToUrl: function (e) {
    wc.navigateTo(e.currentTarget.dataset.url)
  },

  placeUnfold1: function (e) {
    // console.log(e)
    let page = this
    var index = e.currentTarget.dataset.index;
    var status = page.data.list1[index].placePurSortOpen
    var list1 = page.data.list1
    for (var i = 0; i < list1.length; i++) {
      list1[i].placePurSortOpen = true;
    }
    list1[index].placePurSortOpen = !status
    page.setData({ list1 });
  },
  // change value
  placeSortChangeFn1: function (e) {
    let page = this
    let val = e.detail.value;
    var list1 = page.data.list1
    var index = e.currentTarget.dataset.index;
    console.log(e)
    list1[index].placeSortSelect = val
    for (let i in list1[index].placeSortData) {
      list1[index].placeSortData[i].checked = false
      if (list1[index].placeSortData[i].ClassName == val) {
        list1[index].placeSortData[i].checked = true
      }
    }
    page.setData({ list1 });
    //console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  supSortChangeItemFn1: function (e) {
    let page = this
    //必须 用currentTarget 
    var curItem = e.currentTarget.dataset.item;
    var param = page.data.param || {}
    param = wc.extend(param, curItem)
    console.log(param);
    page.getList(param)
    page.setData({
      supSortSelectId: curItem.ClassID,
      param
    });
  },

  // 收藏状态切换
  collectCut: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.Data

    list[index].IsFav = !(list[index].IsFav || false);
    this.setData({ Data: list })

    // 切换收藏状态
    let id = e.currentTarget.dataset.id
    let getData = {
      Action: 'AddFavorite',
      ClassID: 2,
      UserID: wx.getStorageSync('openId'),
      ID: id
    }
    // let list = this.data.list
    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {

      }
    })
  },

  // 搜索列表
  searchList: function (e) {
    let content = e.detail.value
    let param = this.data.param || {}
    param.pageIndex = 1
    param.KeyWords = content
    this.getList(param)
    this.setData({ param })
  },

  // 获取列表
  getList: function ({ Action = 'GetCourseList', KeyWords = '', ClassID = 0, AreaID = 0, SortType = 0, TimeType = 0, CourseType = 0, pageSize = 10, pageIndex = 1 } = {}) {
    const that = this
    let oldList = that.data.Data || []
    // list
    let getData = {
      Action,
      KeyWords,
      ClassID,
      SortType,
      TimeType,
      AreaID,
      CourseType,
      pageSize,
      pageIndex,
      UserID: wx.getStorageSync('openId'),
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        if (pageIndex > 1) {
          json[data] = oldList.concat(json[data])
        } else {
          that.data.pageIndex = 1
        }
        wx.setStorageSync('courseParam', that.data.param || {})
        that.setData({
          Data: json[data]
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
      ClassID: 2
    }
    wc.get(bData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          imgUrls: json[data]
        })
      }
    })

    //引入条件筛选
    var filtration = new Filtration(this);
    filtration.bindEvents();
    //引入条件筛选
    var filtration = new Filtration(this, 1);
    filtration.bindEvents();

    // 分类列表
    let dData = {
      Action: 'GetClassList',
      DepClassID: 2
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

    // 城市列表
    let aData = {
      Action: 'GetAreaList'
    }
    // let list = this.data.list
    wc.get(aData, (json) => {
      if (json[isSuccess] === success) {
        json.List.unshift({
          AreaID: 0,
          ClassName: '城市',
          checked: 'true'
        })
        that.setData({
          'list1[0].placeSortData': json.List
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
    // list
    this.getList(wx.getStorageSync('courseParam'))
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
    this.data.pageIndex += 1
    let param = this.data.param || {}
    param.pageIndex = this.data.pageIndex
    this.getList(param)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})