import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  return (
    <div className="text-indigo-500 container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  )
}

export default App
