player_option = {
    autoplay: "muted",
    muted: false,
    controls: true / false,
    height: 720 / 2,
    width: 1280 / 2,
    loop: true,
};

function onPlayerReady() {
    videojs.log("播放器已经准备好了!");

    // In this context, `this` is the player that was created by Video.js.<br>  // 注意，这个地方的上下文， `this` 指向的是Video.js的实例对像player
    this.play();

    // How about an event listener?<br>  // 如何使用事件监听？
    this.on("loadstart", function () {
        videojs.log("开始请求数据!");
    });
    this.on("progress", function () {
        videojs.log("正在请求数据!");
    });
    this.on("loadedmetadata", function () {
        videojs.log("获取资源长度完成!");
    });
    this.on("canplaythrough", function () {
        videojs.log("视频源数据加载完成!");
    });
    this.on("waiting", function () {
        videojs.log("等待数据!");
    });
    this.on("play", function () {
        videojs.log("视频开始播放!");
    });
    this.on("playing", function () {
        videojs.log("视频播放中!");
    });
    this.on("pause", function () {
        videojs.log("视频暂停播放!");
    });
    this.on("ended", function () {
        videojs.log("视频播放结束!");
    });
    this.on("error", function () {
        videojs.log("加载错误!");
    });
    this.on("seeking", function () {
        videojs.log("视频跳转中!");
    });
    this.on("seeked", function () {
        videojs.log("视频跳转结束!");
    });
    this.on("ratechange", function () {
        videojs.log("播放速率改变!");
    });
    this.on("timeupdate", function () {
        videojs.log("播放时长改变!");
    });
    this.on("volumechange", function () {
        videojs.log("音量改变!");
    });
    this.on("stalled", function () {
        videojs.log("网速异常!");
    });
}

var player_mp4 = videojs("amor_mp4", player_option, onPlayerReady);

var player_3gp = videojs("amor_3gp", player_option, onPlayerReady);

var player_mkv = videojs("amor_mkv", player_option, onPlayerReady);

var player_flv = videojs("amor_flv", player_option, onPlayerReady);

// var player_m3u8= videojs('amor_m3u8',{
//     autoplay: 'muted',
//     muted:false,
//     controls : true/false,
//     height:720/2,
//     width:1280/2,
//     loop : true,
// });
