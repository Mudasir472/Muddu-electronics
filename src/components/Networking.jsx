import "./Catagori.css"
import img1 from '../images/banner-1.webp'
import img2 from '../images/banner-2.webp'
import img3 from '../images/banner-3.webp'
export default function Networking() {
    return (
        <>
            <div className="network d-flex align-items-center justify-content-between">
                <div className="netMain container d-flex align-items-center justify-content-between">
                    <div className="netImg">
                        <img src={img1} alt="" />
                    </div>
                    <div className="netImg">
                        <img src={img2} alt="" />
                    </div>
                    <div className="netImg">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}