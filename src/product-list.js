const createWebPImage = (
  imageUrl = './images/products/american_classic.webp',
  altText = 'burguer'
) => {
  const img = document.createElement('img')
  img.src = imageUrl
  img.alt = altText
  img.loading = 'lazy'
  img.decoding = 'async'
  img.className = 'product-image'
  return img
}

function createProductCard(product, exchangeRate) {
  const { name, label, description, ingredients = [], price, image } = product
  // Create the main article element

  const article = document.createElement('article')
  article.className = 'product-card'

  const productImg = createWebPImage(image, name)

  // Label
  const divLabel = document.createElement('div')
  divLabel.className = 'product-label'
  divLabel.textContent = label
  divLabel.style.display = 'none' // Hide the label by default

  // Content
  const divContent = document.createElement('div')
  divContent.className = 'product-content'

  // product info
  const divProductInfo = document.createElement('div')
  divProductInfo.className = 'product-info'

  const h3Name = document.createElement('h3')
  h3Name.className = 'product-name'
  h3Name.textContent = name
  h3Name.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.toggle(
      'product-card--opened'
    )
  })

  const pDescription = document.createElement('p')
  pDescription.className = 'product-description'
  pDescription.textContent = description
  pDescription.style.display = 'none' // Hide the description by default

  const ulIngredients = document.createElement('ul')
  ulIngredients.className = 'product-ingredients'

  ingredients.forEach((ingredient) => {
    const li = document.createElement('li')
    li.textContent = ingredient
    ulIngredients.appendChild(li)
  })

  //   ulIngredients.textContent = ingredients.join(' - ')

  // Pricing
  const divPricing = document.createElement('div')
  divPricing.className = 'product-pricing'

  const spanUSD = document.createElement('p')
  spanUSD.className = 'price-usd'
  spanUSD.innerHTML = `${price.toFixed(2)}<span class='price-symbol'> $</span>`

  const spanBS = document.createElement('p')
  spanBS.className = 'price-bs'
  spanBS.innerHTML = `${(price * exchangeRate).toFixed(2)} Bs`

  // Assemble components
  divPricing.append(spanUSD, spanBS)
  divProductInfo.append(divLabel, h3Name, ulIngredients, divPricing)
  divContent.append(h3Name, divProductInfo)
  article.append(productImg, divContent)

  return article
}

export const createProductList = (products, exchangeRate) => {
  const productList = document.querySelector('#burguer-list')
  products.forEach((product) => {
    const productCard = createProductCard(product, exchangeRate)
    productList.appendChild(productCard)
  })
}
