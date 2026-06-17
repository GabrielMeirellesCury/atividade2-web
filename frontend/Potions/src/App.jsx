import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import MyRoutes from "./components/routes/MyRoutes"

function App() {
  return (
    <Router>
      <div>
        <MyRoutes />
      </div>
    </Router>
  )
}

export default App