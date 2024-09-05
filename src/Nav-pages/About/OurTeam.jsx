import { useState } from "react";
import { useSelector } from "react-redux";


export default function OurTeam() {
    const { items, status, error } = useSelector((state) => state.teamProducts);
    return (
        <>
            <div className="ourTeam container">
                <div className="ourTeamMain d-flex justify-content-evenly  flex-column">
                    <div className="teamHeader d-flex justify-content-center align-items-center flex-column">
                        <div className="teamHead">
                            <h4>Our Team</h4>
                        </div>
                        <div className="teamDesc col-111">
                            <p>Muddu-Electronics is powered by a dedicated team of professionals who share a passion for technology and innovation. Each member brings unique skills and expertise to the table, working together to deliver the best possible experience for our customers.</p>
                        </div>
                    </div>
                    <div className="teamMems d-flex flex-wrap justify-content-between">
                        {items.map((item) => (
                            <div class="card teamImg" style={{ width: "18rem" }}>
                                <img src={item.imgLink} class="card-img-top" alt={item.name} />
                                <div class="card-body">
                                    <p><b>{item.name}</b></p>
                                    <p style={{ color: "#254370" }}>{item.speciality}</p>
                                    <p class="card-text col-111">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}