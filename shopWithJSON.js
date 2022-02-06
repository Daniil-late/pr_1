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
const dataFromJSON = JSON.parse(data)
//todo sorting
// перешел на новую ветку createl
dataFromJSON.forEach(key => {
	let cardImgSrc = key.productCard
	let cardTitle = key.productTitle
	let oldCardPrice, currentCardPrice
	key.productPrice.forEach(price => {
		currentCardPrice = price.currentPrice
		oldCardPrice = price.oldPrice
	})
	const containerForCards = document.getElementById('containerForCards')
	const card = document.createElement('div')
	card.classList.add('shop__inner_card')
	// создание элементов
	// картинка
	const cardImg = document.createElement('img')
	cardImg.src = cardImgSrc
	card.appendChild(cardImg)
	// название
	const cardHeader = document.createElement('h3')
	cardHeader.textContent = cardTitle
	card.appendChild(cardHeader)
	// цена
	const cardPrices = document.createElement('div')
	cardPrices.classList.add('card__price')
	// проверям существование старой цены
	if (oldCardPrice === "undefined") {
		const currentCardPriceText = document.createElement('p')
		currentCardPriceText.textContent = currentCardPrice
		cardPrices.appendChild(currentCardPriceText)
		card.appendChild(cardPrices)
	} else {
		const currentCardPriceText = document.createElement('p')
		currentCardPriceText.textContent = currentCardPrice
		const oldCardPriceText = document.createElement('span')
		oldCardPriceText.textContent = oldCardPrice
		currentCardPriceText.appendChild(oldCardPriceText)
		cardPrices.appendChild(currentCardPriceText)
		card.appendChild(cardPrices)
	}
	// кнопка add to Cart

	const btnCardAdd = document.createElement('button')
	btnCardAdd.classList.add('card__btn')
	btnCardAdd.textContent = 'Add to cart'
	card.appendChild(btnCardAdd)

	// соединяем все
	containerForCards.appendChild(card)
})





