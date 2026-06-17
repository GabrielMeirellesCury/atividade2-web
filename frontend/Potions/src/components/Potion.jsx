function Potion(props) {
    return(
        <div className="potion">
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default Potion