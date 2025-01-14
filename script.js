'use strict'

function animate_coin(coin_img) {
	coin_img.classList.toggle('animated')
}

document.addEventListener('DOMContentLoaded', () => {
	const coin_img = document.querySelector('.main__coin img')
	
	coin_img.addEventListener('touchstart', () => {
		animate_coin(coin_img)
	})
	coin_img.addEventListener('touchend', () => {
		animate_coin(coin_img)
	})
})
