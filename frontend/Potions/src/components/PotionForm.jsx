import { useState } from "react"
import potionsApi from "../api/potions.api"

function PotionForm(props) {

    const [formData, setFormData] = useState({name: "", description: "", image: "", price: ""})

    function handleSubmit(event) {
        event.preventDefault()
        potionsApi.postPotions(formData).then((result) => {
            if (result.status == 200) {
                // alert("Poção cadastrada com sucesso!")
                props.addNewPotion(result.data)
                setFormData({ name: "", description: "", image: "", price: "" })
            }
        })
    }

    function handleChange(event) {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            </div>
            {/* os outros inputs e o botão... */}


        </form>
    )

}

export default PotionForm