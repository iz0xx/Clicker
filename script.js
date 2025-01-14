'use strict'

function animate_coin(coin_img) {
	coin_img.classList.toggle('animated')
}

document.addEventListener('DOMContentLoaded', () => {
	const coin_img = document.querySelector('.main__coin img')
	
	coin_img.addEventListener('click', () => {
		animate_coin(coin_img)
		setTimeout(() => {
			animate_coin(coin_img)
		}, 0.03);
	})
})