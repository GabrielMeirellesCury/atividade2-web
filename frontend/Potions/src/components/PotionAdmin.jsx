import { useEffect, useState } from "react"
import potionsApi from "../api/potions.api"
import Potion from "./Potion"
import PotionForm from "./PotionForm"

function PotionAdmin() {
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
    getPotions()
  }, [])

  function addNewPotion(potion) {
    setPotions((prev) => [...prev, potion])
  }

  function removePotion(id) {
    potionsApi.deletePotion(id).then((result) => {
      if (result.status == 200 || result.status == 204) {
        setPotions((prev) => prev.filter((potion) => potion.id !== id))
      }
    })
  }

  return (
    <>
      <nav className="nav">
        <span className="nav-logo">Administração</span>
        <ul className="nav-links">
          <li><a href="/pocoes">Ver Loja</a></li>
        </ul>
      </nav>

      <div className="admin-section">
        <p className="section-label">Cadastrar Poção</p>
        <PotionForm addNewPotion={addNewPotion} />
      </div>

      <div className="divider" />

      <section className="section">
        <p className="section-label">Poções Cadastradas</p>
        <div className="potions-grid">
          {potions.map((potion) => (
            <Potion
              key={potion.id}
              id={potion.id}
              name={potion.name}
              description={potion.description}
              image={potion.image}
              price={potion.price}
              onDelete={removePotion}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default PotionAdmin
