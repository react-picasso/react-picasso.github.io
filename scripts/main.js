const content = document.querySelector('.content');
const loadingOverlay = document.querySelector('.loading-overlay');

setTimeout(() => {
  content.classList.add('appear');
  loadingOverlay.classList.add('disappear');
}, 2000);