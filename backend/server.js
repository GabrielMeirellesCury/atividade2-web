import express from "express"
import cors from "cors"
import router from "./routes/api.routes.js"
import sequelize from "./dbconfig.js"
import Potion from "./models/potion.model.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", router)

async function start() {
  await sequelize.sync()

  await Potion.bulkCreate([
    {
      name: "Poção Blue Sky",
      description: "Provê um surto de inspiração por 24 horas. Utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
      image: "https://i.imgur.com/placeholder.png",
      price: 300
    },
    {
      name: "Poção do Perfume Misterioso",
      description: "Faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
      image: "https://i.imgur.com/placeholder.png",
      price: 200
    },
    {
      name: "Poção de Pinus",
      description: "Faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.",
      image: "https://i.imgur.com/placeholder.png",
      price: 3000
    },
    {
      name: "Poção da Beleza Eterna",
      description: "Veneno que mata rápido.",
      image: "https://i.imgur.com/placeholder.png",
      price: 100
    },
    {
      name: "Poção do Arco Íris",
      description: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
      image: "https://i.imgur.com/placeholder.png",
      price: 120
    },
    {
      name: "Caldeirão das Verdades Secretas",
      description: "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
      image: "https://i.imgur.com/placeholder.png",
      price: 150
    }
  ])

  app.listen(3000, () => console.log("Servidor rodando na porta 3000"))
}

start()