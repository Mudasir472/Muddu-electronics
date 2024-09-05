import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./category.css";
import Header from "./Header";
import { addToCart, getTotal } from "../Store/Slices/CartSlice";
import { fetchCata } from "../Store/Slices/CategorySlice";
// const { category } = useParams();
export default function CataDisplay({ category }) {
    const { items, status, error } = useSelector((state) => state.cata);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCata(category)); // Fetch data based on category
        dispatch(getTotal());
    }, [ dispatch, cart]);

    const [clickedItems, setClickedItems] = useState({});
    const [loadingItemId, setLoadingItemId] = useState(null);
    const [addedItems, setAddedItems] = useState({});

    const handleClick = (id) => {
        setClickedItems((prevClickedItems) => ({
            ...prevClickedItems,
            [id]: !prevClickedItems[id],
        }));
    };

    const clickHandle = (item) => {
        setLoadingItemId(item._id);
        dispatch(addToCart(item));
        setTimeout(() => {
            setLoadingItemId(null);
            setAddedItems((prev) => ({ ...prev, [item._id]: true }));
        }, 800);
    };

    return (
        <>
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
                    <Header img={items[0]?.imageLink} home={`Home | ${category}`} main={`${category}`} />
                    <section className="row mt-4" style={{ backgroundColor: '#f9f9f9' }}>
                        <div className="mainData container col-8 offset-2">
                            {items.map((item) => (
                                <div className="card mb-3 d-flex justify-content-center" style={{ width: "100%", height: "19rem" }} key={item._id}>
                                    <div className="row g-0" style={{ height: "100%" }}>
                                        <div className="col-md-4 image d-flex justify-content-center align-items-center">
                                            <img src={item.imageLink} className="img-fluid rounded-start" alt={item.name} />
                                        </div>
                                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                                            <div className="card-body height-16rem d-flex flex-column justify-content-evenly">
                                                <div className="namePrice">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <div className="prices d-flex justify-content-between" style={{ width: "9rem" }}>
                                                        <span style={{ color: '#254370' }}>&#8377; {item.currPrice.toLocaleString()}</span>
                                                        <span style={{ color: "#6f6f6f" }}>
                                                            <del>&#8377;{item.originalPrice.toLocaleString()}</del>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="desc">{item.desc}</div>
                                                <div className="btns">
                                                    <div className="cartViewBtns d-flex align-items-center justify-content-start">
                                                        <button onClick={() => handleClick(item._id)} className="btn me-3 view">
                                                            {!clickedItems[item._id] ? <i className="bi bi-suit-heart"></i> : <i className="bi bi-check-lg"></i>}
                                                        </button>
                                                        <button
                                                            onClick={() => clickHandle(item)}
                                                            className={`btn crt me-3 ${loadingItemId === item._id ? 'loading' : ''}`}
                                                        >
                                                            {loadingItemId === item._id ? (
                                                                <span className="spinner-border spinner-border-sm" role="status"></span>
                                                            ) : addedItems[item._id] ? (
                                                                "Added"
                                                            ) : (
                                                                "ADD TO CART"
                                                            )}
                                                        </button>
                                                        <button className="btn view" data-bs-toggle="modal" data-bs-target={`#exampleModal-${item._id}`}>
                                                            <i className="bi bi-eye"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal for item details */}
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
                                                    <button
                                                        onClick={() => clickHandle(item)}
                                                        className={`btn crt ${loadingItemId === item._id ? 'loading' : ''}`}
                                                    >
                                                        {loadingItemId === item._id ? (
                                                            <span className="spinner-border spinner-border-sm" role="status"></span>
                                                        ) : addedItems[item._id] ? (
                                                            "Added"
                                                        ) : (
                                                            "ADD TO CART"
                                                        )}
                                                    </button>
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
                </>
            )}
        </>
    );
}
