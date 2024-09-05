import "./about.css"
import img from '../../images/about-banner-min.webp'
export default function Company() {
    return (<>
        <div className="company mb-5">
            <div className="companyMain container">
                <div className="compHead d-flex flex-column align-items-center justify-content-evenly">
                    <h3 style={{color:'#333333'}}>About us</h3>
                    <p style={{color:"#6f6f6f"}}>Muddu-Electronics is your go-to destination for top-quality electronics.</p>
                </div>
                <div className="compImg">
                    <img src={img} alt="" />
                </div>
                <div className="comp container d-flex flex-column align-items-start justify-content-evenly">
                    <h4>Our Company</h4>
                    <p style={{color:"#6f6f6f"}}>Muddu-Electronics is a cutting-edge e-commerce platform dedicated to providing customers with the latest and most reliable electronics products. Our mission is to simplify the online shopping experience, offering a wide range of gadgets, appliances, and accessories that cater to every tech enthusiast's needs.</p>
                    <ul style={{color:"#6f6f6f"}}>
                        <li>Top quality products</li>
                        <li>Best customer service</li>
                        <li>30-days money back guarantee</li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}