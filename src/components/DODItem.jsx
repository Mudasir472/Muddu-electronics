import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import "./catagori.css";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { addToCart } from "../Store/Slices/CartSlice";

export default function DODItem() {
    const { items } = useSelector((state) => state.product);
    const [loadingItemId, setLoadingItemId] = useState(null);
    const [addedItems, setAddedItems] = useState({});

    const dispatch = useDispatch();

    const clickHandle = (item) => {
        console.log(item)
        setLoadingItemId(item._id); // Set loading state for the clicked item
        dispatch(addToCart(item));
        setTimeout(() => {
            setLoadingItemId(null); // Reset loading state after some time
            setAddedItems((prev) => ({ ...prev, [item._id]: true })); // Mark item as added
        }, 800);
    };

   


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
        autoplaySpeed: 2000, // Optional
    };

    return (
        <div className="sliderData container">
            <Slider {...settings}>
                {items && items.map((item) => (
                    item.category === "new" && (
                        <div key={item._id} className="container size card mb-4" style={{ width: "19rem" }}>
                            <img src={item.imageLink} className="card-img-top" alt={item.name} loading="lazy" />
                            <hr />
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <p style={{ color: "#333333" }} className="card-title">{item.name}</p>
                                <div style={{ width: "14rem" }} className="prices d-flex justify-content-evenly">
                                    <span style={{ color: '#254370' }}>&#8377; {item.currPrice.toLocaleString()}</span>
                                    <span style={{ color: "#6f6f6f" }}><del>&#8377;{item.originalPrice.toLocaleString()}</del></span>
                                </div>
                                <div className="cartBtns d-flex align-items-center justify-content-between">
                                    <a href="#"
                                        onClick={(e) => { e.preventDefault(); clickHandle(item); }}
                                        className={`btn crt ${loadingItemId === item._id ? 'loading' : ''}`}
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
                            <div className="modal fade" id={`exampleModal-${item._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{item.name}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body cartBtn">
                                            <img src={item.imageLink} className="card-img-top" alt={item.name} />
                                            <p>{item.desc}</p>
                                            <a href="#"
                                                onClick={(e) => { e.preventDefault(); clickHandle(item); }}
                                                className={`btn crt ${loadingItemId === item._id ? 'loading' : ''}`}
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
                    )
                ))}
            </Slider>
        </div>
    );
}
