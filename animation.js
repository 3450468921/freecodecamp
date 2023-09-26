
// 获取文本容器和打字机元素
var container = document.querySelector('.typewriter');
var typewriter = document.querySelector('.news');

// 播放打字机效果
function playTypewriterEffect() {
  typewriter.style.animationPlayState = 'running'; // 恢复动画播放
}

// 重置打字机效果
function resetTypewriterEffect() {
  typewriter.style.animation = 'none'; // 停止动画播放
  typewriter.offsetHeight; // 强制重新计算样式，以便重置动画
  typewriter.style.animation = null; // 重新启动动画播放
}

// 循环播放打字机效果
function loopTypewriterEffect() {
  playTypewriterEffect(); // 播放打字机效果

  // 延迟重置打字机效果
  setTimeout(resetTypewriterEffect, 3500);
}

// 在页面加载后开始循环播放打字机效果
window.onload = function() {
  loopTypewriterEffect(); // 第一次播放打字机效果

  // 循环播放打字机效果
  setInterval(loopTypewriterEffect, 5000); // 每5秒重复播放
};
 