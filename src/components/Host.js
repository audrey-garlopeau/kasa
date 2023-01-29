export default function Host(props) {
    return(
        <div className="host">
            <div className="host__name">
                <p>{props.hostName}</p>
            </div>
            <div className="host__picture">
                <img className="host__photo" src={props.hostPicture} alt={props.hostName}/>
            </div>
        </div>
    )
};