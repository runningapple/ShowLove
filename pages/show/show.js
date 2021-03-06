Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    desc: '',
    is_anonymous: true,
    submit_status: false //发布状态，如果还在发布中，值为true，未发布和已发布为false
  },

  chooseImage: function (e) {
    console.log('ee', e);
    var that = this;
    wx.chooseImage({
      count: 0,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) { },
      fail: function (res) {
        console.log('err', res);
      },
      complete: function (res) {
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
      },
    })
  },

  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  formSubmit: function (e) {
    console.log('form', e);
    this.setData({
      submit_status: true
    });
  },

  formReset: function () {
    this.setData({
      files: [],
      desc: '',
      is_anonymous: true,
      submit_status: false
    });
  },

  switchChange: function (e) {
    console.log('e', e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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