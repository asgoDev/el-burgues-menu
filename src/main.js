import './styles/app.css'
import './styles/product-list.css'
import './styles/nav-bar.css'
import { products } from './products.js'
import { createProductList } from './product-list.js'

const dailyRate = 97.5

createProductList(products, dailyRate)
