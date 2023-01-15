import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPaciente from "./components/ListaPaciente"



/*funcion creadora de la aplicacion */

function App() {
 

 return (
    /* etiqueta padre debajo queda el body de la pagina
    container= es negrilla mx-= automatico */
   <div className="container mx-auto mt-20">
        
    <Header/>
    <div className="mt-12 md:flex"> </div>
    <Formulario/>|
    <ListaPaciente/>|
    
    </div>

 
  )
}
/*Exportar para importar el moduloa otras partes de la app*/
export default App
