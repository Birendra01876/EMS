import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./components/NotFound";
import EmployeesList from "./components/EmployeesList";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeesList />} />
        <Route exact path="/add" element={<AddEmployee />} />
        <Route exact path="/update/:id" element={<AddEmployee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;