import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Catagori.css";
import { addToCart, getTotal } from "../Store/Slices/CartSlice";


export default function Categories() {
    let cart  = useSelector((state) => state.cart)
    // State to track loading state and added state for each item
    const [loadingItemId, setLoadingItemId] = useState(null);
    const [addedItems, setAddedItems] = useState({});

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    const clickHandle = (item) => {
        console.log(item)
        setLoadingItemId(item._id); // Set loading state for the clicked item
        dispatch(addToCart(item));
        setTimeout(() => {
            setLoadingItemId(null); // Reset loading state after some time
            setAddedItems((prev) => ({ ...prev, [item._id]: true })); // Mark item as added
        }, 800);
    };


    const { items, status, error } = useSelector((state) => state.product);
    const [selectedCategory, setSelectedCategory] = useState("new");
    const [selectedBtn, setSelectedBtn] = useState(1);
    const color = "#f6c947";

    const filteredItems = items.filter(item => item.category === selectedCategory);
    const handleCategoryChange = (category, btnIndex) => {
        setSelectedCategory(category);
        setSelectedBtn(btnIndex);
    };

    return (
        <>
            <div>
                {status === "pending" && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {status === "failed" && <h4>Error: {error}</h4>}
                {status === "success" && (
                    <section style={{ backgroundColor: '#f9f9f9' }}>
                        <div className="head d-flex align-items-center justify-content-center">
                            <div className="heading">
                                <h3>Latest products</h3>
                            </div>
                        </div>
                        <div className="buttons row d-flex align-items-center justify-content-center">
                            {['new', 'featured', 'best'].map((category, index) => (
                                <button
                                    key={category}
                                    style={{
                                        border: selectedBtn === index + 1 ? "none" : "",
                                        backgroundColor: selectedBtn === index + 1 ? color : "",
                                        color: selectedBtn === index + 1 ? "black" : "", fontWeight: "bold"
                                    }}
                                    className="btn col-2"
                                    onClick={() => handleCategoryChange(category, index + 1)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)} Products
                                </button>
                            ))}
                        </div>
                        <div className="showData mt-5 container d-flex flex-wrap align-items-start justify-content-between">
                            {filteredItems.map((item) => (
                                <div key={item._id} className="card mb-4" style={{ width: "19rem" }}>
                                    <img src={item.imageLink} className="card-img-top" alt={item.name} />
                                    <hr />
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                        <p style={{ color: "#333333" }} className="card-title">{item.name}</p>
                                        <div style={{ width: "14rem" }} className="prices d-flex justify-content-evenly">
                                            <span style={{ color: '#254370' }}>&#8377; {item.currPrice.toLocaleString()} </span>
                                            <span style={{ color: "#6f6f6f" }}> <del>&#8377;{item.originalPrice.toLocaleString()}</del></span>
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
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
