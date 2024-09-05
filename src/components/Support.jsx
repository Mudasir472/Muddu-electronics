import SupportCards from "./SupportCards";

export default function Support() {
    return (
        <>
            <div className="support container d-flex align-items-center justify-content-between">
                <SupportCards icon={<i className="fs-3 bi bi-bag-check"></i>} title="Free shipping" desc="Order over ₹499.00 and get free shipping on mitho store" />
                <SupportCards icon={<i class="fs-3 bi bi-headphones"></i>} title="24X7 support" desc="24 hour online private & live suppored our mitho store"/>
                <SupportCards icon={<i class="fs-3 bi bi-wallet2"></i>} title="COD" desc="Available cash on delivery and online payments"/>
                <SupportCards icon={<i class="fs-3 bi bi-hand-thumbs-up"></i>} title="Best quality" desc="Good product quality for store checking on manager"/>
            </div>
        </>
    )
}