import "./about.css"
import mission1 from "../../images/mission1.webp"
export default function MissionData({img,title,desc}){
    return(
        <>
            <div className="missionData">
                <div className="mdataMain d-flex align-items-center justify-content-evenly flex-column">
                    <div className="missionImg d-flex align-items-center justify-content-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="missionHead">
                        <h4>{title}</h4>
                    </div>
                    <div className="missionDesc d-flex align-items-center justify-content-center">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}