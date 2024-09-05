import "./HomeCata.css"
import img from ".././images/Mobile.webp"
export default function HomeCatData({img,title,lis}) {
    return (<>
        <div className="catData mb-4">
            <div className="catDataMain d-flex flex-column align-items-center justify-content-between">
                <div className="catHead d-flex  align-items-center justify-content-center">
                    <b>{title}</b>
                </div>
                <div className="catBody d-flex align-items-center justify-content-evenly">
                    <div className="catImg">
                        <img src={img} alt="" />
                    </div>
                    <div className="catList">
                        <ul><li>{lis[0]}</li>
                            <li>{lis[1]}</li>
                            <li>{lis[2]}</li>
                            <li>{lis[3]}</li></ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}