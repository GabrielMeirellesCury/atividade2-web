import { Routes, Route } from "react-router-dom"
import PotionList from "../PotionList"

function MyRoutes() {
  return (
    <Routes>
      <Route element={<PotionList />} path="/pocoes" />
    </Routes>
  )
}

export default MyRoutes
