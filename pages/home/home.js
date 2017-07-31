
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    userInfo: {},
    hidden: true,
    loves: [{
      motto: 'Hangzhou, China>',
      desc: '尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈尾灯拉丝哈哈哈',
      unique: 1,
      imgUrls: [
        { id: 1, url: '/img/c.jpg' },
        { id: 2, url: '/img/b.jpg' }
      ],
      doge_num: 2,
      like_num: 3,
      comments: 3,
      is_doge: false,
      is_like: true
    }, {
      motto: 'Hangzhou, China>',
      desc: '浮光掠影哟哟哟',
      unique: 2,
      imgUrls: [
        { id: 5, url: '/img/b.jpg' },
        { id: 4, url: '/img/a.jpg' },
        { id: 6, url: '/img/c.jpg' }
      ],
      doge_num: 2,
      like_num: 3,
      comments: 3,
      is_doge: false,
      is_like: false
    }, {
      motto: 'Hangzhou, China>',
      desc: '自拍自拍自拍',
      unique: 3,
      imgUrls: [
        { id: 3, url: '/img/a.jpg' }
      ],
      doge_num: 2,
      like_num: 3,
      comments: 3,
      is_doge: true,
      is_like: false
    }]
  },

  dogeTap: function (event) {
    let index = event.currentTarget.dataset.idx;
    if (this.data.loves[index].is_doge) {
      this.data.loves[index].is_doge = false;
      this.data.loves[index].doge_num--;
    } else {
      this.data.loves[index].is_doge = true;
      this.data.loves[index].doge_num++;
    }
    this.setData({
      loves: this.data.loves
    });
  },

  likeTap: function (event) {
    let index = event.currentTarget.dataset.idx;
    if (this.data.loves[index].is_like) {
      this.data.loves[index].is_like = false
      this.data.loves[index].like_num--;
    } else {
      this.data.loves[index].is_like = true
      this.data.loves[index].like_num++;
    }
    this.setData({
      loves: this.data.loves
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad', options);
    var that = this;
    let scrollHeight = 0;
    wx.getSystemInfo({
      success: function (res) {
        scrollHeight = res.windowHeight
      }
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        hidden: true,
        userInfo: userInfo,
        scrollHeight: scrollHeight
      });
    })
  },

  loadMore: function (event) {
    let temp = {
      motto: 'Hangzhou, China>',
      desc: '尾灯拉丝哈哈哈',
      unique: Date.now(),
      imgUrls: [
        { id: 4, url: '/img/c.jpg' },
        { id: 5, url: '/img/b.jpg' }
      ],
      doge_num: 2,
      like_num: 3,
      comments: 3,
      is_doge: true,
      is_like: false
    };
    this.data.loves.push(temp);
    this.setData({
      loves: this.data.loves
    });
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
    this.setData({ hidden: true });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({ hidden: true });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('pull down');
    this.setData({ hidden: false });
    // wx.stopPullDownRefresh();
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
});