import Pacientes from "./Pacientes"; 

function ListaPaciente({pacientes, setPacienteE}) {
  // formula para id unico 
  //Date.now().toString(36)
  //Math.random().toString(36).substrs(2)
  return (
   
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll uppercase">
      { pacientes && pacientes.length ? 
      <>
         <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {" "}
        <span className="text-indigo-800 font-bold"> pacientes y citas</span>
      </p>
      { pacientes.map(indice =>
          <Pacientes
          key={indice.id}
            indice = {indice}
            setPacienteE = {setPacienteE}
          />
      )}
      </> : 
      
      <>
      <h2 className="font-black text-3xl text-center">no hay pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
       comienza agregando pacientes {" "}
        <span className="text-indigo-800 font-bold"> apareceran en este espacio
          </span>
      </p>  
      </>
      
      }
    </div>
  )
}

export default ListaPaciente


  