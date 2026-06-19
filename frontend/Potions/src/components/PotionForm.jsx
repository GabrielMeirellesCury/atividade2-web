import { useState } from "react"
import potionsApi from "../api/potions.api"

function PotionForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  })

  function handleSubmit(event) {
    event.preventDefault()
    potionsApi.postPotions(formData).then((result) => {
      if (result.status == 200 || result.status == 201) {
        props.addNewPotion(result.data)
        setFormData({ name: "", description: "", image: "", price: "" })
      }
    })
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <form className="potion-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Imagem (URL)</label>
        <input
          type="text"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Preço</label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <button className="btn-submit" type="submit">
        Cadastrar
      </button>
    </form>
  )
}

export default PotionForm
