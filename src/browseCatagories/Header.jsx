import "./category.css";

export default function Header({ img,home,main }) {
    return (
        <>
            <div className="img-container">
                <p 
                    className="background-text"
                    style={{
                        backgroundImage: `url(${img})`
                    }}
                >
                    <p>{home}</p>
                    <p style={{fontWeight:"bold"}}>{main}</p>
                </p>
            </div>
        </>
    );
}
