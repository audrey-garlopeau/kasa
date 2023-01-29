import { useState } from "react";
import leftArrow from '../assets/images/arrow_left.svg';
import rightArrow from '../assets/images/arrow_right.svg';

export default function Slideshow({ slides, title }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div className="slideshow">
            {slides.map((slide, index) => {
                return (
                    <div key={index} className={index === current ? "slideshow__slide slide__active" : "slideshow__slide slide__inactive"}>
                        {index === current && (<img src={slide} className="slideshow__picture" alt={title} />)}
                        {index === current && (
                            <p className="slideshow__number">{current + 1}/{length}</p>
                        )}
                    </div>
                )
            })}
            {length > 1 ? (
                <div className="slideshow__arrows">
                    <div className="slideshow__previous" onClick={previousSlide}>
                        <img className="slideshow__previous--arrow" src={leftArrow} alt="left arrow" />
                    </div>
                    <div className="slideshow__next" onClick={nextSlide}>
                        <img className="slideshow__next--arrow" src={rightArrow} alt="right arrow" />
                    </div>
                </div>
            ) : null
            }
        </div>
    )
};