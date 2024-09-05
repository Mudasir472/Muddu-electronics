import "./Nav.css"
import { useSelector } from "react-redux";
import Header from "../browseCatagories/Header";
export default function Cameras() {


    const { items, status, error } = useSelector((state) => state.blogProducts);

    return (<>
        {status === "pending" && (
            <div className="d-flex justify-content-center ">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )}
        {status === "failed" && <h4>Error: {error}</h4>}
        {status === "success" && (
            <>
                <Header img={items[5].imageUrl} home="Home | Blog" main="" />
                <section className="mt-5" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="blogData container d-flex flex-wrap align-items-center justify-content-between">
                        {items.map((item) => (
                            <div class="card mb-3 blogimages" style={{width:"39rem"}}>
                                <img src={item.imageUrl} class="card-img-top" alt="..." />
                                <div class="card-body blogBody d-flex flex-column align-items-center justify-content-evenly">
                                    <b className="mb-3" style={{fontSize:"x-large"}}>{item.title}</b>
                                    <p style={{color:"#6f6f6f"}} class="card-text">{item.content}</p>
                                    {/* <button className="btn d-flex align-items-center">More <i class="bi bi-forward fs-3"></i></button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        )}


    </>)
}