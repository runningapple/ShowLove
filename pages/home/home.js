
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hangzhou, China>',
    userInfo: {},
    loves: [{
      motto: 'Hangzhou, China>',
      unique: 1,
      bd_pic_url: '/img/a.jpg',
      doge_num: 2,
      like_num: 3,
      comments: 3,
      is_doge: false,
      is_like: false
    }, {
      motto: '34345',
      unique: 2,
      bd_pic_url: '/img/a.jpg',
      doge_num: 2,
      like_num: 3,
      comments: 3,
      is_doge: true,
      is_like: false
    }, {
      motto: 'asdfaafdasf',
      unique: 3,
      bd_pic_url: '/img/a.jpg',
      doge_num: 2,
      like_num: 3,
      comments: 3,
      is_doge: true,
      is_like: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad', options);
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
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
});