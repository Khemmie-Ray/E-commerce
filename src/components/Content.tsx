import plusIcon from "../assets/icon-plus.svg"
import minusIcon from "../assets/icon-minus.svg"
import { useState } from "react"
import cartIcon from "../assets/icon-cart.svg"
import Product from "./Product"

const Content = () => {
    const [itemNum, setItemNum] = useState<number>(0)

    function handleIncreases() {
        setItemNum(itemNum + 1)
    }

    function handleDecreases() {
        if(itemNum > 0) {
        setItemNum(itemNum - 1)
        }
    }

  return (
    <main className="w-[100%] lg:w-[80%] md:w-[80%] mx-auto flex justify-between">
        <div>
            <Product />
        </div>
        <div className="w-[100%] lg:w-[50%] md:w-[50%]">
        <p className="uppercase text-[hsl(26,100%,55%)]">Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer
        </p>
        <p>$125.00 <span>50%</span></p>
        <p>$250.00</p>
        <div>
            <div>
            <img src={minusIcon} alt="" onClick={handleDecreases}/>
            <p>{itemNum}</p>
            <img src={plusIcon} alt="" onClick={handleIncreases}/>
            </div>
           <button><img src={cartIcon} alt="" /> Add to Cart</button>
        </div>
        </div>
    </main>
  )
}

export default Content