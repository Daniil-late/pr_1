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

// console.log(dataFromJSON[1])

const containerForCards = document.getElementById('containerForCards')

const card = document.createElement('div')
card.classList.add('shop__inner_card')
const cardImgSrc = dataFromJSON[0].productCard
const cardTitle = dataFromJSON[0].productTitle
const productPrice = dataFromJSON[0].productPrice
let cardOldPrice, cardCurrentPrice
productPrice.forEach(price => {
	// TODO add a check oldPrice is undefined or not
	cardOldPrice = price.oldPrice
	cardCurrentPrice = price.currentPrice

});
console.log(cardCurrentPrice, cardOldPrice)


