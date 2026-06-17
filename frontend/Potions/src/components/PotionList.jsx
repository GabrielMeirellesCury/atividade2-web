import { useEffect } from "react"
import potionsApi from "../api/potions.api"
import Potion from "./Potion"
import { useState } from "react"

function PotionList() {
    const [potions, setPotions] = useState([])

    useEffect(() => {
        async function getPotions() {
            try {
                const result = await potionsApi.getPotions()
                if (result.status == 200) {
                    setPotions(result.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getPotions
    }, [])

    return(
        <div>
            <h1>Potions</h1>
            {potions.map(potion => {
                return <Potion name={potion.name} description={potion.description} image={potion.image} price={potion.price} />
            })}
        </div>
    )
}

export default PotionList