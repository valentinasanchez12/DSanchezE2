import { useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, pacienteE, setPacienteE}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

    //hook para calcular errores

    const [error, setError]= useState(false);

  //Limpiarr o resetear el formulario cuando carga la pagina

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("enviando formulario...")

      //validar formulario que no vaya con campos vacios

  if ([nombre,propietario,email,fecha,sintomas].includes("")) {
    setError(true);   
    return;
  }
  setError(false);

  //objeto de paciente - enviar al arreglo
  const objetoPaciente = {
    nombre,
    propietario,
    email,
    fecha, 
    sintomas
  }

  //proceso de actualizacion
  if(pacienteE.id){
    // console.log("editando")
    objetoPaciente.id = pacienteE.id
   // console.log(objetoPaciente)
    //console.log(pacienteE)

    const pacienteActualizado =pacientes.map(
      pacienteState => pacienteState.id === pacienteE.id ?
      objetoPaciente:pacienteState
    )

    setPacientes(pacienteActualizado)
    setPacienteE({})

   }else{ 
     //console.log("agregando mascota..")
     objetoPaciente.id = generarID();
     setPacientes([...pacientes, objetoPaciente])
     }
   

   //console.log(obetoPaciente);
  
  setPacientes([...pacientes, objetoPaciente])
   //Limpieza de hooks - useState de cada uno
  setNombre('')
  setPropietario('')
  setEmail('')
  setFecha('')
  setSintomas('')

  }


   //funcion para generar id
   const generarID = () =>{
    const random =Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random+fecha
  }

   //revision de cargue de datos en el form
   useEffect(()=>{
   if(Object.keys(pacienteE).length > 0){
    setNombre(pacienteE.nombre)
    setPropietario(pacienteE.propietario)
    setEmail(pacienteE.email)
    setFecha(pacienteE.fecha)
    setSintomas(pacienteE.sintomas)
     }
   },[pacienteE])

    
  return (
  
    <div className="md:w-1/2 lg:w-2/5 mx-5 uppercase"> 

      <p className=" font-black text-3xl mt-5 text-center mb-10">
        añade pacientes   
      </p>

      <form className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 " onSubmit={handleSubmit}>

      {error && <Error>
          <p>
            Todos los campos son Obligatorios!
          </p>

          </Error>
          
      }
        <div className="mb-5">
          <label htmlFor="mascotas" className="block text-gray-700 uppercase font-bold "> Nombre mascota: </label>
          <input id="mascotas" type="text" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "Nombre mascota:" value={nombre} onChange={(e)=> setNombre (e.target.value)}/>

        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold "> Nombre del propietario: </label>
          <input id="propietario" type="text" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "propietario:" value={propietario} onChange={(e)=> setPropietario (e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">correo electronico: </label>
          <input id="email" type="email" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "corrreo electronico:" value={email} onChange={(e)=> setEmail (e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold "> fecha de ingreso: </label>
          <input id="fecha" type="date" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" value={fecha} onChange={(e)=> setFecha (e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold "> sintomas: </label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "agregar sintomas:" value={sintomas} onChange={(e)=> setSintomas (e.target.value)}/>
        </div>

        <input type="submit" value={pacienteE.id ? "editar mascotas":"agregar mascotass"}className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" />

       </form>

    </div>
   
  )
}

export default Formulario