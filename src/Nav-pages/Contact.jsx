export default function Contact() {

    return (
        <>
            <div className="contact">
                <div className="contactMain">
                    <div className="compHead d-flex flex-column align-items-center justify-content-evenly">
                        <h3 style={{ color: '#333333' }}>Contact us</h3>
                        <p style={{ color: "#6f6f6f" }}>Lorem Ipsum is printing & typesetting industry's standard dummy text since texts</p>
                    </div>
                    <div className="contactMap d-flex  align-items-center justify-content-center " >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.718086653832!2d78.3608472105905!3d17.425311683399503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5ada6d80f%3A0x6d6400aee08b61a1!2sMaulana%20Azad%20National%20Urdu%20University!5e0!3m2!1sen!2sin!4v1724232877636!5m2!1sen!2sin"
                            width="90%"
                            maxWidth='800px'
                            height="450"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map"
                        />
                    </div>
                    <div style={{ height: "54rem" }} className="contactForm d-flex justify-content-center align-items-center">
                        <div className="form container row">
                            <form className="form offset-3 col-7">
                                <h4 className="mb-3">Drop us message</h4>
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" placeholder="Enter name" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" placeholder="Enter email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Phone Number</label>
                                    <input type="text" placeholder="Number" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Message</label>
                                    {/* <input type="text" placeholder="Number" class="form-control"  /> */}
                                    <div>
                                        <textarea style={{ width: "100%", padding: "15px" }} placeholder="Text here" rows={10} cols={20}></textarea>
                                    </div>
                                </div>



                                <button type="submit" class="btn ">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}