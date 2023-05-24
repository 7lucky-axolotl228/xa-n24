const elModalOpener = document.querySelector('.modal-opener');
const elDemoModal = document.querySelector('.modal');

elModalOpener.addEventListener('click', function() {
  elDemoModal.classList.add('modal-open');
});

const elModalBack = document.querySelector('.modal-content-back-icon');
const elModalContentText = document.querySelector('.modal-content-turn-on');
elModalBack.addEventListener('click', function() {
  elDemoModal.classList.remove('modal-open');
});
elModalContentText.addEventListener('click', function() {
  elDemoModal.classList.remove('modal-open');
});