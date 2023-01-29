export default function HeroBanner({image}) {
    return(
        <div className="hero">
            <img className="hero__img" src={image} alt="paysage montagneux" />
            <h1 className="hero__title">Chez vous, partout ailleurs</h1>
            <div className="hero__overlay"></div>
        </div>
    )
}