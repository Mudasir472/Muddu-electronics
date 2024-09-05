import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Catagori.css";
import React, { useEffect, useState } from "react";
import DODItem from "./DODItem";

export default function DealofDay() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-05-03") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section style={{ backgroundColor: "rgb(249, 249, 249)" }}>
            <div className="dod d-flex align-items-center justify-content-evenly">
                <div className="dodmain d-flex flex-column align-items-center justify-content-between">
                    <div className="dodTitle">
                        <h4>Deal of the day</h4>
                    </div>
                    <div className="dodDesc">
                        <p style={{ color: '#6f6f6f' }}>Grab your deal</p>
                        <p><b>Up to 50% off on all items</b></p>
                    </div>
                    <div className="dodTimer">
                        <div className="time d-flex align-item-center justify-content-between">
                            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                                <div className="timeUpto" key={index}>
                                    <div className="timeUptoact"><span><b>{timeLeft[unit] || "0"}</b></span></div>
                                    <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="DODitem d-flex align-items-center justify-content-center">
                    <DODItem/>
                </div>
            </div>
        </section>
    );
}
