const elModalOpener = document.querySelector('.js-modal-opener');
const elModal = document.querySelector('.modal');

if (elModalOpener) {
  elModalOpener.addEventListener('click', function() {
    elModal.classList.add('modal-open');
  });
}


const elModalBack = document.querySelector('.js-modal-close');
const elModalContentButton = document.querySelector('.js-modal-content-open-button');

if (elModalBack) {
  elModalBack.addEventListener('click', function() {
    elModal.classList.remove('modal-open');
  });
}

if (elModalContentButton) {
  elModalContentButton.addEventListener('click', function() {
    elModal.classList.remove('modal-open');
  });
}