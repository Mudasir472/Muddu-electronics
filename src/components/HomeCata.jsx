import HomeCatData from "./HomeCataData";
import "./HomeCata.css"
import mobile from "../images/Mobile.webp"
import comp from "../images/computerCata.webp"
import camera from "../images/cameraCata.webp"
import watch from "../images/watchImgg.png"
import keyboard from "../images/keyboardImg.png"

export default function HomeCat() {
    const ul = ["5G", 'Android-one', 'Android', 'IOS'];
    const computerFeatures = ["Windows", "macOS", "Linux", "Gaming"];
    const cameraFeatures = ["DSLR", "Mirrorless", "Point & Shoot", "Lenses"];
    const smartwatchFeatures = ["Fitness Tracking", "Notifications", "GPS", "Heart Rate Monitor"];
    const keyboardFeatures = ["Mechanical", "Wireless", "RGB", "Ergonomic"];
    return (<>
        <div className="homeCata container">
            <h3 style={{ height: '9rem' }} className="d-flex align-items-center justify-content-center">Categories shop</h3>
            <div className="cataMain d-flex flex-wrap align-items-center justify-content-between">
                <HomeCatData img={mobile} title="SMART PHONES" lis={ul} />
                <HomeCatData img={comp} title="COMPUTERS" lis={computerFeatures} />
                <HomeCatData img={camera} title="CAMERA & PARTS" lis={cameraFeatures} />
                <HomeCatData img={watch} title="SMART WATCHES" lis={smartwatchFeatures} />
                <HomeCatData img={keyboard} title="KEYBOARDS" lis={keyboardFeatures} />
                <HomeCatData img={watch} title="SMART WATCHES" lis={smartwatchFeatures} />
            </div>
        </div>
    </>)
}