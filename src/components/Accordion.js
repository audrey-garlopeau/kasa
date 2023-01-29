import { useState, useRef } from "react";
import chevron from "../assets/images/chevron.svg";

export default function Accordion(props) {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active === "active" ? "accordion__icon" : "accordion__icon rotate");
    }

    return (
        <div className="accordion">
            <button className={`accordion__btn ${active}`} onClick={toggleAccordion}>
                <h2 className="accordion__title">{props.title}</h2>
                <img className={rotate} src={chevron} alt={props.title} />
            </button>
            <div ref={content} style={{ maxHeight: `${height}` }} className="accordion__content">
                <div className="accordion__text">{props.content}</div>
            </div>
        </div>
    )
}