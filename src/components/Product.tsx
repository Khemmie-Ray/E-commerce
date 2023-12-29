import product1 from "../assets/image-product-1-thumbnail.jpg"
import product2 from "../assets/image-product-2-thumbnail.jpg"
import product3 from "../assets/image-product-3-thumbnail.jpg"
import product4 from "../assets/image-product-4-thumbnail.jpg"
import productLarge1 from "../assets/image-product-1.jpg"
import productLarge2 from "../assets/image-product-2.jpg"
import productLarge3 from "../assets/image-product-3.jpg"
import productLarge4 from "../assets/image-product-4.jpg"

const Product = () => {
    interface ProductImage {
        id: number,
        thumbnail: string,
        coverImg: string
    }

    const productImage: ProductImage[] = [
        {
            id: 1,
            thumbnail: product1,
            coverImg: productLarge1
        },
        {
            id: 2,
            thumbnail: product2,
            coverImg: productLarge2
        },
        {
            id: 3,
            thumbnail: product3,
            coverImg: productLarge3
        },
        {
            id: 4,
            thumbnail: product4,
            coverImg: productLarge4
        }
    ]

    const Thumbnails = productImage.map(info => (
        <div>
            <img src={info.thumbnail} alt="" />
        </div>
    ))
  return (
    <div>
        <img src="" alt="" />
        {Thumbnails}
    </div>
  )
}

export default Product