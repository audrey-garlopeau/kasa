import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import Host from "../components/Host";
import Rate from "../components/Rating";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import accommodations from "../data/data.json";
import Error from "./Error";


export default function Accommodation() {
    const { id } = useParams();
    const accommodation = accommodations.find((accommodation) => accommodation.id === id);
    if (accommodation !== undefined) {
        const equipments = accommodation.equipments;
        const equipment = equipments.map((item, index) => (
            <li key={index} className="accommodation__list">{item}</li>
        ));
        return (
            <div className="accommodation">
                <Slideshow slides={accommodation.pictures} title={accommodation.title} />
                <div className="accommodation__content">
                    <div className="accommodation__location-tag">
                        <h1 className="accommodation__title">{accommodation.title}</h1>
                        <p className="accommodation__location">{accommodation.location}</p>
                        <div className="accommodation__tags">
                            {accommodation.tags.map((tag, index) => (
                                <Tag key={index} accommodationTag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="accommodation__host-rating">
                        <div className="accommodation__rating">
                            <Rate starNb={accommodation.rating} />
                        </div>
                        <div className="accommodation__host">
                            <Host hostName={accommodation.host.name} hostPicture={accommodation.host.picture} />
                        </div>
                    </div>
                </div>
                <div className="accommodation__accordion">
                    <Accordion title="Description" content={accommodation.description} />
                    <Accordion title="Équipement" content={equipment} />
                </div>
            </div>
        )
    } else {
        return <Error />
    }
};