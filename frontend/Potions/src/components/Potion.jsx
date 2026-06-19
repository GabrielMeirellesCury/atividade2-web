function Potion(props) {
  return (
    <div className="potion">
      <img src={props.image} alt={props.name} />
      <div className="potion-info">
        <p className="potion-name">{props.name}</p>
        <p className="potion-desc">{props.description}</p>
        <div className="potion-footer">
          <span className="potion-price">{props.price} moedas</span>
          {props.onDelete ? (
            <button className="btn-delete" type="button" onClick={() => props.onDelete(props.id)}>
              Remover
            </button>
          ) : (
            <button className="btn-buy" type="button">Comprar</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Potion
