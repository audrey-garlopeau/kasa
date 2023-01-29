export default function Thumbnail({ image, title}) {
    return(
        <div className="thumbnail">
            <img className="thumbnail__img" src={image}  alt={title} />
            <p className="thumbnail__title">{title}</p>
            <div className="thumbnail__overlay"></div>
        </div>
    )
}