import MissionData from "./MissionData";
import mission1 from "../../images/mission1.webp"
import mission2 from "../../images/mission2.webp"
import mission3 from "../../images/mission3.avif"
import mission4 from "../../images/mission4.avif"

export default function Mission() {
    return (
        <>
            <div className="missions d-flex flex-wrap container">
                <MissionData img={mission1} title="Our Mission" desc="To deliver top-quality electronics with unbeatable service, making technology accessible and enjoyable for everyone." />
                <MissionData img={mission2} title="Our vision" desc="To be a leading e-commerce platform where technology enthusiasts find the latest and most reliable electronics, enhancing everyday life through innovation." />
                <MissionData img={mission3} title="255 + award wins" desc="With over 255 awards to our name, Muddu-Electronics is recognized for excellence in the e-commerce industry. Our commitment to quality, innovation, and customer satisfaction continues to set us apart." />
                <MissionData img={mission4} title="300+ Happy" desc="At Muddu-Electronics, we're proud to have served over 300 satisfied customers. Our focus on quality products and exceptional service ensures that every customer leaves happy and returns for more." />
            </div>
        </>
    )
}