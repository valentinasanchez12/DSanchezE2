import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPaciente from "./components/ListaPaciente"
import Pacientes from "./components/Pacientes"




function App() {

 return (
    /* etiqueta padre debajo queda el body de la pagina
    container= es negrilla mx-= automatico */
   <div className="container mx-auto mt-20">
        
      <Header/>
      <div className="mt-12 md:flex"> 
        <Formulario/>
        <ListaPaciente/>
      </div>
    </div>

 
  )
}
/*Exportar para importar el moduloa otras partes de la app*/
export default App
