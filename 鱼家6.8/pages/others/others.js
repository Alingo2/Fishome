// pages/others/others.js
Page({
  tiaozhuan: function () {
    wx.navigateTo({
      url: '../out/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
    kanshiping: function () {
    wx.navigateTo({
      url: '../shiping/shiping', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  }
})