var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    userInfo: {},
    hidden: true,
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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