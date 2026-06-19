import { useEffect, useState } from "react"
import potionsApi from "../api/potions.api"
import Potion from "./Potion"

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
    getPotions()
  }, [])

  return (
    <>
      <nav className="nav">
        <a className="nav-logo" href="#">Poções & Soluções</a>
        <ul className="nav-links">
          <li><a href="#historia">História</a></li>
          <li><a href="#pocoes">Poções</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div className="hero">
        <p className="hero-sub">BECO DA ÚLTIMA SAÍDA · DESDE 1867</p>
        <h1 className="hero-title">Poções & Soluções</h1>
        <p className="hero-desc">
          A mais antiga e respeitada loja de poções do beco. Cada frasco preparado
          com ingredientes raros e décadas de sabedoria alquímica.
        </p>
      </div>

      <div className="divider" />

      <section className="section" id="historia">
        <p className="section-label">Nossa História</p>
        <div className="history-grid">
          <p className="history-text">
            Fundada em 1867 por Elara Merigold, avó de Annabelle, a loja nasceu de uma
            pequena bancada de poções de cura no Beco da Última Saída. Ao longo de mais
            de um século, atravessou guerras, pandemias e maldições — e sempre abriu
            suas portas. Hoje, sob o comando de Annabelle, a tradição continua com a
            mesma dedicação e os mesmos ingredientes de procedência duvidosa.
          </p>
          <div className="history-photos">
            <img className="history-photo" src="https://st5.depositphotos.com/3877249/65202/v/450/depositphotos_652028846-stock-illustration-alchemist-table-witch-house-cartoon.jpg" alt="Foto histórica de 1867" />
            <img className="history-photo" src="https://static.vecteezy.com/ti/vetor-gratis/p1/17535985-interior-de-loja-de-pocoes-magicas-com-moveis-gratis-vetor.jpg" alt="Interior da loja" />
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" id="pocoes">
        <p className="section-label">Nossas Poções</p>
        <div className="potions-grid">
          {potions.map((potion) => (
            <Potion
              key={potion.id}
              id={potion.id}
              name={potion.name}
              description={potion.description}
              image={potion.image}
              price={potion.price}
            />
          ))}
        </div>
      </section>

      <footer className="footer" id="contato">
        <div className="footer-col">
          <p className="footer-col-title">Localização</p>
          <p>Beco da Última Saída, nº 13</p>
          <p>Aberto seg–sáb, 9h–18h</p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Contato</p>
          <p>pocoes@solucoes.mag</p>
          <p>(11) 9999-0000</p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Poções & Soluções</p>
          <p>Tradição alquímica desde 1867. Feito com amor e ingredientes de procedência duvidosa.</p>
        </div>
      </footer>
    </>
  )
}

export default PotionList
