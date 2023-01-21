import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPaciente from "./components/ListaPaciente"
import Pacientes from "./components/Pacientes"


import { useState } from "react"

function App() {
  /*estado de retorno constante*/
  /*Podemos crear funciones antes del return*/
  const [pacientes, setPacientes] = useState([]);

 return (
    /* etiqueta padre debajo queda el body de la pagina
    container= es negrilla mx-= automatico */
   <div className="container mx-auto mt-20">
        
      <Header/>
      <div className="mt-12 md:flex"> 
        <Formulario     
          pacientes = {pacientes}
          setPacientes = {setPacientes}
       />
       <ListaPaciente
          pacientes = {pacientes}
          />
      </div>
    </div>

 
  )
}
/*Exportar para importar el moduloa otras partes de la app*/
export default App
