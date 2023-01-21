import { useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

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
    fingreso, 
    sintomas
  }
   //console.log(obetoPaciente);
  
   setPacientes([...pacientes, objetoPaciente])
   //Limpieza de hooks - useState de cada uno
  setNombre('')
  setPropietario('')
  setEmail('')
  setFingreso('')
  setSintomas('')

  }
  //hook para calcular errores

   const [error, setError]= useState(false);


  
  return (
  
    <div className="md:w-1/2 lg:w-2/5 mx-5 uppercase"> 
      <h2 className="font-black text-3xl text-center">
       listado de paciente
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        añade pacientes {" "} 
      <span className="text-indigo-800 font-bold" >
        Administralos</span>
      </p>

      <form className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 " onSubmit={handleSubmit}>

        {error && <Error>
          <p>Todos los campos son obligatorios</p>
          </Error>}
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

        <input type="submit" value="agregar mascota" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" />

       </form>

    </div>
   
  )
}

export default Formulario