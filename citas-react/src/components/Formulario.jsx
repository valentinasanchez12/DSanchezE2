import { useState, useEffect} from "react";

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  //setNombre("trosky")
  //consolo.log(nombre);
  
  return (
  
    <div className="md:w-1/2 lg:w-2/5 "> 
      <h2 className="font-black text-3xl text-center">
        seguimiento a pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        añade pacientes {" "} 
      <span className="text-indigo-600 font-bold" >
        Administralos</span>
      </p>

      <form className="bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 ">
        <div className="mb-5">
          <label htmlFor="mascotas" className="block text-gray-700 uppercase font-bold "> Nombre mascota: </label>
          <input id="mascotas" type="text" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "Nombre mascota:" value={nombre} onChange={(e)=> console.log(setNombre (e.target.value))}/>

        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold "> Nombre del propietario: </label>
          <input id="propietario" type="text" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "propietario:"/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">correo electronico: </label>
          <input id="email" type="email" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "corrreo electronico:"/>
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold "> fecha de ingreso: </label>
          <input id="fecha" type="date" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold "> sintomas: </label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder bg-indigo-100 rounded-md" placeholder = "agregar sintomas:"/>
        </div>

        <input type="submit" value="agregar mascota" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" />

       </form>

    </div>
   
  )
}

export default Formulario