import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "./category.css"
import Header from "./Header";
import { addToCart } from "../Store/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { getTotal } from "../Store/Slices/CartSlice";

export default function Computer() {

    const { items, status, error } = useSelector((state) => state.computerProducts);
    let cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    // const [isClicked, setIsClicked] = useState(false);
    const [clickedItems, setClickedItems] = useState({});
    const handleClick = (id) => {
        setClickedItems((prevClickedItems) => ({
            ...prevClickedItems,
            [id]: !prevClickedItems[id] // Toggle the clicked state for the clicked item
        }));
    };

    // State to track loading state and added state for each item
    const [loadingItemId, setLoadingItemId] = useState(null);
    const [addedItems, setAddedItems] = useState({});



    const clickHandle = (item) => {
        console.log(item)
        setLoadingItemId(item._id); // Set loading state for the clicked item
        dispatch(addToCart(item));
        setTimeout(() => {
            setLoadingItemId(null); // Reset loading state after some time
            setAddedItems((prev) => ({ ...prev, [item._id]: true })); // Mark item as added
        }, 800);
    };
    return (<>
        {status === "pending" && (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}
        {status === "failed" && <h4>Error: {error}</h4>}
        {status === "success" && (
            <>
                <Header img={items[0].imageLink} home="Home | Camera Parts" main="Camera & Parts" />
                {/* <Discount /> */}
                <section className="row mt-4" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="mainData container col-8 offset-2">
                        {items.map((item) => (
                            <div key={item._id} class="card mb-3 d-flex justify-content-center" style={{ width: "100%", height: "19rem" }}>
                                <div style={{ height: "100%" }} class="row g-0">
                                    <div class="col-md-4 image d-flex justify-content-center align-items-center">
                                        <img src={item.imageLink} class="img-fluid rounded-start" alt={item.name} />
                                    </div>
                                    <div class="col-md-8 d-flex justify-content-center align-items-center">
                                        <div class="card-body height-16rem d-flex flex-column justify-content-evenly  ">
                                            <div className="namePrice">
                                                <h5 class="card-title">{item.name}</h5>
                                                <div style={{ width: "9rem" }} className="prices d-flex justify-content-between">
                                                    <span style={{ color: '#254370' }}>&#8377; {item.currPrice.toLocaleString()} </span>
                                                    <span style={{ color: "#6f6f6f" }}> <del>&#8377;{item.originalPrice.toLocaleString()}</del></span>
                                                </div>
                                            </div>
                                            <div className="desc">
                                                {item.desc}
                                            </div>
                                            <div className="btns">
                                                <div className="cartViewBtns d-flex align-items-center justify-content-start">
                                                    <a onClick={() => handleClick(item._id)} type="button" className="btn me-3 view" >{!clickedItems[item._id] ? <i className="bi bi-suit-heart"></i> : <i class="bi bi-check-lg"></i>}</a>
                                                    <a href="#"
                                                        onClick={(e) => { e.preventDefault(); clickHandle(item); }}
                                                        className={`btn crt me-3 ${loadingItemId === item._id ? 'loading' : ''}`}
                                                    >
                                                        {loadingItemId === item._id ? (
                                                            <button style={{ outline: 'none', backgroundColor: 'transparent', color: '#ffffff', border: 'none' }} className="btn" type="button">
                                                                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                                                <span className="load" role="status">Loading...</span>
                                                            </button>
                                                        ) : addedItems[item._id] ? (
                                                            "Added"
                                                        ) : (
                                                            "ADD TO CART"
                                                        )}
                                                    </a>
                                                    <a type="button" className="btn view" data-bs-toggle="modal" data-bs-target={`#exampleModal-${item._id}`}><i className="bi bi-eye"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id={`exampleModal-${item._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{item.name}</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body modalImg d-flex flex-column align-item-center">
                                                    <img src={item.imageLink} className="ms-5 mb-4 card-img-top" alt={item.name} />
                                                    <p>{item.desc}</p>
                                                    <a href="#"
                                                        onClick={(e) => { e.preventDefault(); clickHandle(item); }}
                                                        className={`btn crt me-3 ${loadingItemId === item._id ? 'loading' : ''}`}
                                                    >
                                                        {loadingItemId === item._id ? (
                                                            <button style={{ outline: 'none', backgroundColor: 'transparent', color: '#ffffff', border: 'none' }} className="btn" type="button">
                                                                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                                                <span className="load" role="status">Loading...</span>
                                                            </button>
                                                        ) : addedItems[item._id] ? (
                                                            "Added"
                                                        ) : (
                                                            "ADD TO CART"
                                                        )}
                                                    </a>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        )}


    </>)
}