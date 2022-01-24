const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const btnBuys = document.querySelectorAll('.js-place-buy-button')
const btnClose = document.querySelector('.js-modal-close')

console.log(btnBuys);

btnBuys.forEach(btnBuy => {
    btnBuy.addEventListener('click', showModal)
})

btnClose.addEventListener('click', closeModal)

modal.addEventListener('click', closeModal)

modalContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

function showModal() {
    modal.classList.add('modal-open')
}

function closeModal() {
    modal.classList.remove('modal-open')
}