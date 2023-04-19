import React from "react";

import { Link } from 'react-router-dom';


const Menu = () => {
    return ( 
        <>
        
            <h4 className="text-3xl font-light mb-4"> REGISTRO DE COMPUTADORAS</h4>
<div>
            <Link to='/nueva-computadora' className=" bg-blue-800   hover: bg-blue-800 , inline-block mb-5 p-2 text-white ">
                Registrar
            </Link>
</div>

<div>
<h4 className="text-3xl font-light mb-4"> REGISTRO DE IMPRESORAS  </h4>
            <Link to='/nueva-impresora'className=" bg-blue-800   hover: bg-blue-800 , inline-block mb-5 p-2 text-white ">
                Registrar</Link>
</div>
{/* <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button> */}

 <div>
            <h4 className="text-3xl font-light mb-4"> REGISTRO DE TELEFONOS </h4>
            <Link to='/nuevo-telefono' className=" bg-blue-800   hover: bg-blue-800 , inline-block mb-5 p-2 text-white ">
                Registrar
            </Link>
            </div>



<div>
            <h4 className="text-3xl font-light mb-4"> REGISTRO DE USUARIOS </h4>
            <Link to='/nuevo-usuario' className=" bg-blue-800   hover: bg-blue-800 , inline-block mb-5 p-2 text-white ">
                Registrar
            </Link>
            </div>
        </>
   
   
   
   );
}
 
export default Menu;