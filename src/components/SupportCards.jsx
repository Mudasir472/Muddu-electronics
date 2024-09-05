import "./Catagori.css"
export default function SupportCards({icon,title,desc}) {
    return (
        <>
            <div className="supportCards d-flex   justify-content-center">
                <div className="supportMain  p-3 container d-flex text-center flex-column align-items-center justify-content-center">
                    <div className="ico mb-3 ">
                        {icon}
                        {/* <i class="fs-3 bi bi-bag-check"></i> */}
                    </div>
                    <div className="suppHeader mb-3">
                        <h3 style={{fontSize:"18px",fontWeight:"500"}}>{title}</h3>
                    </div>
                    <div className="desc mb-3 ">
                        <p style={{color:"#6f6f6f"}}>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}