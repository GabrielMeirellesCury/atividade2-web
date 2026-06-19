import axios from "axios"

const url = "http://localhost:3000/api"

async function getPotions() {
  return axios.get(url + "/pocoes")
}

async function postPotions(potion) {
  return axios.post(url + "/pocoes", potion)
}

async function deletePotion(id) {
    return axios.delete(url + "/pocoes/" + id)
}

export default { getPotions, postPotions, deletePotion}
