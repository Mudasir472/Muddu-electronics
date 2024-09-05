import "./footer.css"
export default function Footer() {
    return (
        <>
            <section>
                <footer class="row d-flex align-items-center justify-content-center  row-cols-1 row-cols-sm-2 row-cols-md-5   border-top">
                    <div style={{ width: "40%", height: "90%" }} className="footerLeft d-flex align-items-center justify-content-center  ">
                        <div className="leftLetter d-flex flex-column align-items-center justify-content-evenly">
                            <div className="letterHead">
                                <h3 style={{ color: '#f6c947' }}>NEWSLETTER</h3>
                            </div>
                            <div className="letterDesc">
                                <p style={{ color: "#6f6f6f" }}>Subscribe for the latest news & get 20% off your first order</p>
                            </div>
                            <div className="letterInput">
                                <form>
                                    <div class="mb-3">
                                        <input placeholder="example@gmail.com" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>

                                    <button style={{ backgroundColor: "#f6c947" }} type="submit" class="btn ">Submit</button>
                                </form>
                            </div>
                            <div className="social d-flex align-items-center justify-content-evenly">
                                <div className="accounts fb">
                                    <a href="#"><i class="bi bi-facebook"></i></a>
                                </div>
                                <div className="accounts tw">
                                    <a href="#"><i class="bi bi-twitter"></i> </a>
                                </div>
                                <div className="accounts lk">
                                    <a href="#"><i class="bi bi-linkedin"></i></a>
                                </div>
                                <div className="accounts ins">
                                    <a href="#"><i class="bi bi-instagram"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ width: "60%" }} className="footerRight d-flex flex-wrap align-items-center justify-content-center">
                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>

                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>
                        <div class="col mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                            </ul>
                        </div>
                    </div>

                </footer>
            </section>
        </>
    )
}