import { Routes, Route } from "react-router-dom"
import PotionList from "../PotionList"
import PotionAdmin from "../PotionAdmin"

function MyRoutes() {
  return (
    <Routes>
      <Route element={<PotionList />} path="/" />
      <Route element={<PotionList />} path="/pocoes" />
      <Route element={<PotionAdmin />} path="/admin" />
    </Routes>
  )
}

export default MyRoutes
