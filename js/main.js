const elModalOpener = document.querySelector('.js-modal-opener');
const elModal = document.querySelector('.modal');

elModalOpener.addEventListener('click', function() {
  elModal.classList.add('modal-open');
});

const elModalBack = elModal.querySelector('.js-modal-close');
const elModalContentButton = elModal.querySelector('.js-modal-content-open-button');

elModalBack.addEventListener('click', function() {
  elModal.classList.remove('modal-open');
});
elModalContentButton.addEventListener('click', function() {
  elModal.classList.remove('modal-open');
});