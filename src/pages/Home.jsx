import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import image from "../assets/images/hero_banner.jpg";
import Thumbnail from "../components/Thumbnail";
import accommodations from "../data/data.json";

export default function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <HeroBanner image={image} />
            </div>
            <div className="home__accommodations">
                {accommodations.map((accommodation) => {
                    return (
                        <article key={accommodation.id} className="home__article">
                            <Link to={`/accommodations/${accommodation.id}`}>
                                <Thumbnail image={accommodation.cover} title={accommodation.title} />
                            </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
};