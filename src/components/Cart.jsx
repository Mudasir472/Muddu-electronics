import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addToCart, clearCart, decreaseCart, getTotal, removeFromCart } from "../Store/Slices/CartSlice";
import { useEffect } from "react"
import img from "../images/cartEmpty.png"
import "./Catagori.css"

export default function Home() {
    const dispatch = useDispatch()
    let cart, { cartItems, cartTotalAmount } = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, cartItems, dispatch])
    
    const handleremove = (item) => {
        dispatch(removeFromCart(item))
    }

    const handleDecreaseBtn = (item) => {
        dispatch(decreaseCart(item))
    }

    const handleIncreaseBtn = (item) => {
        dispatch(addToCart(item))
    }
    const handleClearCart = (item) => {
        dispatch(clearCart(item))
    }
    return (<>
        <div className="cartData container">


            <div className="cartMain d-flex justify-content-center">
                {cartItems.length === 0 && (
                    <div className="emptyCart d-flex flex-column align-items-center justify-content-center">
                        <h2>Cart is Empty</h2>
                        <img src={img} alt="" />
                        <p>Sorry your cart has currently no more products, click on 'here' given below for continue browsing.</p>
                        <p>Continue browsing <a href="/products">here.</a></p>
                    </div>
                )}
                {cartItems.length > 0 && (<>
                    <div className="cartLeft">

                        <div className="cartContainer d-flex flex-column align-items-center justify-content-between">
                            <p><b>My Cart :</b></p>
                            {cartItems.map((item) => (
                                <div className="cartProduct d-flex align-items-center justify-content-between">
                                    <div className="imgDesc d-flex align-items-center justify-content-between">
                                        <div className="productImg ">
                                            <img src={item.imageLink} alt="" />
                                        </div>
                                        <div className="productDesc">
                                            <p> {item.name} </p>
                                            <p>Rs. {item.currPrice.toLocaleString()}</p>
                                            <p style={{ cursor: "pointer", color: "red" }} onClick={() => { handleremove(item) }}>Remove</p>
                                        </div>
                                    </div>
                                    <div className="productQnty d-flex align-items-center justify-content-between">
                                        <button onClick={() => { handleDecreaseBtn(item) }} className="btn"><b>-</b></button>
                                        <div>{item.cartQuantity}</div>
                                        <button onClick={() => { handleIncreaseBtn(item) }} className="btn "><b>+</b></button>
                                    </div>
                                    <div className="amount">
                                        <p style={{ color: '#254370' }}><b>&#8377; {(item.currPrice * item.cartQuantity).toLocaleString()}</b></p>
                                    </div>
                                </div>
                            ))}
                            <p className="clear" onClick={() => { handleClearCart(cartItems) }}>Clear cart</p>
                        </div>
                    </div>

                    <div className="cartRight d-flex flex-column align-items-center justify-content-evenly">
                        <p><b>Shipping info</b></p>

                        <form className="form" style={{ width: "64%" }}>
                            <div class="mb-3 " className="d-flex flex-column selectCountry">
                                <label class="form-label" htmlFor="country">Select country:</label>
                                <select id="country" name="country">
                                    <option value="US">---</option>
                                    <option value="US">United States</option>
                                    <option value="IN">India</option>
                                    <option value="CA">Canada</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                </select>
                            </div>
                            <div class="mb-3 zipcode d-flex flex-column">
                                <label class="form-label" htmlFor="zipcode">Zip Code</label>
                                <input type="text" placeholder="Zip Code" />
                            </div>
                            <p><b>Total : &#8377;{cartTotalAmount.toLocaleString()}</b></p>
                            <button className="btn">Payment <i class="bi bi-forward"></i></button>
                        </form>

                    </div>
                </>)}


            </div>


        </div>
    </>)
}