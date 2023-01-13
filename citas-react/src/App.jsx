import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPaciente from "./components/ListaPaciente"



/*funcion creadora de la aplicacion */

function App() {
 

 return (
    /* etiqueta padre debajo queda el body de la pagina*/
   <>
        
   <Header/>
   <Formulario/>|
   <ListaPaciente/>|
    </>

 
  )
}
/*Exportar para importar el moduloa otras partes de la app*/
export default App
