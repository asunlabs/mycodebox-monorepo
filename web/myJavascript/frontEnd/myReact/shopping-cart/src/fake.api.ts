import { Product } from "./products/productSlice";

// Product : interface
const validateProduct = (product : Product):Promise<Product> => {
    return new Promise((resolve, reject) => 
    setTimeout(()=> {
        if (product.title.length === 0) { reject('no title') }
        if (product.price <= 0) { reject('incorrect price') }
        resolve(product)
    }, 500))
}

export default validateProduct