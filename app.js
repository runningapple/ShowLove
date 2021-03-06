//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    this.login();
  },

  login: function () {
    var that = this
    var token = that.globalData.token
    if (token) {//本地是否有 token 记录
      wx.request({//向自己服务器验证 token（用户信息） 是否存在
        url: 'http://127.0.0.1:3000',
        data: {
          token: token
        },
        success: function (res) {
          if (res.data.code != 0) {//如果用户不存在，则将本地 token 设置为空，进行重新登录或者注册
            that.globalData.token = null;
            that.login();
          }
        }
      })
      return;
    }
    wx.login({
      success: function (res) {
        wx.request({
          url: '',
          data: {
            code: res.code
          },
          success: function (res) {
            if (res.data.code == 10000) {
              //register
              that.registerUser();//注册和登录
              return;
            }
            if (res.data.code != 0) {
              //error
              wx.hideLoading();
              wx.showModal({
                title: 'Tips',
                content: 'Can not login',
                showCancel: false
              })
              return;
            }
            that.globalData.token = res.datga.data.token;
          }
        })
      }
    })
  },
  registerUser: function () {
    var that = this
    wx.login({
      success: function (res) {
        var code = res.code;
        wx.getUserInfo({
          success: function (res) {
            var iv = res.iv;
            var encryptedData = res.encryptedData;
            wx.request({
              url: '',
              data: {
                code: code,
                encryptedData: encryptedData,
                iv: iv
              },
              success: (res) => {
                wx.hideLoading();
                that.login();
              }
            })
          }
        })
      }
    })
  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
