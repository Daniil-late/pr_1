const data = `[
	{
		"productID": "1",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "$49.50",
				"currentPrice": "$35.00"
			}
		]
	},
	{
		"productID": "2",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "$49.50",
				"currentPrice": "$30.00"
			}
		]
	},
	{
		"productID": "3",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "undefined",
				"currentPrice": "$22.00"
			}
		]
	},
	{
		"productID": "4",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "undefined",
				"currentPrice": "$3335.00"
			}
		]
	},
	{
		"productID": "5",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "undefined",
				"currentPrice": "$135.00"
			}
		]
	},
	{
		"productID": "6",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "undefined",
				"currentPrice": "$335.00"
			}
		]
	},
	{
		"productID": "7",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "undefined",
				"currentPrice": "$31.00"
			}
		]
	},
	{
		"productID": "8",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "undefined",
				"currentPrice": "$345.00"
			}
		]
	},
	{
		"productID": "9",
		"productCard": "http://cdn.domdivanov25.ru/files/imgs/ig1111916/5rvv2onx-740x540.jpg",
		"productTitle": "Dipped Tripod Stool",
		"productPrice": [
			{
				"oldPrice": "undefined",
				"currentPrice": "$100.00"
			}
		]
	}

]`
// console.clear()
const dataFromJSON = JSON.parse(data)




// TODO add Old Price. 
// while pohui

// try to do this logic with for

const containerForCards = document.getElementById('containerForCards')
const card = document.createElement('div')
card.classList.add('shop__inner_card')

let counter = 0

for (const key in dataFromJSON){
	const cardImgSrc = dataFromJSON[key].productCard
	const cardTitle = dataFromJSON[key].productTitle
	const productPrice = dataFromJSON[key].productPrice
	let cardOldPrice, cardCurrentPrice
	productPrice.forEach(price => {
		// TODO add a check oldPrice is undefined or not
		cardOldPrice = price.oldPrice
		cardCurrentPrice = price.currentPrice

	});


	const imgEl = document.createElement('img')
	imgEl.src = cardImgSrc
	card.appendChild(imgEl)
	// add title
	const hEl = document.createElement('h3')
	hEl.classList.add('card__title')
	hEl.textContent = cardTitle
	card.appendChild(hEl)
	// add price
	const priceDiv = document.createElement('div')
	priceDiv.classList.add('card__price')
	const pPrice = document.createElement('p')
	const spanOldPrice = document.createElement('span')
	spanOldPrice.textContent = cardOldPrice
	pPrice.appendChild(spanOldPrice)
	pPrice.textContent = cardCurrentPrice
	priceDiv.appendChild(pPrice)
	card.appendChild(priceDiv)

	// add btn
	// TODO flex
	const cardBtn = document.createElement('button')
	cardBtn.classList.add('card__btn')
	cardBtn.textContent = 'Add to card'
	card.appendChild(cardBtn)
	containerForCards.appendChild(card)
	counter++
}






