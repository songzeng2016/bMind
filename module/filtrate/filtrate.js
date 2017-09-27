class Filtration {
  // 构造
  constructor(page) {
    this.page = page;
  }

  bindEvents() {
    var page = this.page;
    page.placeUnfold = (e) => {
      // console.log(e)
      var index = e.currentTarget.dataset.index;
      var status = page.data.list[index].placePurSortOpen
      var list = page.data.list
      for (var i = 0; i < list.length; i++) {
        list[i].placePurSortOpen = true;
      }
      list[index].placePurSortOpen = !status
      page.setData({ list });
    },
    //产地筛选条件  change value
    page.placeSortChangeFn= (e) => {
      let val = e.detail.value;
      var list = page.data.list
      var index = e.currentTarget.dataset.index;
      list[index].placeSortSelect = val
      page.setData({ list });
      //console.log('radio发生change事件，携带value值为：', e.detail.value)
    }
    //其它事件
  }
  //bindEvents :end;
}

//导出组件类
module.exports.Filtration = Filtration;
