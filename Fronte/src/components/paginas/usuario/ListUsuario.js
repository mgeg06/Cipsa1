import React from "react";
import { Link } from "react-router-dom";
import { FiClipboard,FiTrash2 } from "react-icons/fi";

const Listusuario = ({ usuarios, setListUpdated }) => {

    //metodo de eliminar
    const handleDelete = id => {

        const requestInit = {
            method: 'DELETE'
        }
        fetch("http://localhost:3001/usuario/delete/" + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true);
    }

return (        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">

<div class="pb-4 bg-white dark:bg-gray-900">
    <label for="table-search" class="sr-only">Search</label>
    <Link to={`//${usuarios.id}`}></Link>
    <div class="relative mt-1">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
    </div>
</div>

<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th scope="col" class="px-6 py-3"> id </th>
            <th scope="col" class="px-6 py-3"> nombre </th>
            <th scope="col" class="px-6 py-3"> apellido paterno  </th>
            <th scope="col" class="px-6 py-3"> apellido materno  </th>
            <th scope="col" class="px-6 py-3"> planta </th>
            <th scope="col" class="px-6 py-3"> area </th>
            <th scope="col" class="px-6 py-3"> correo  </th>
            <th scope="col" class="px-6 py-3"> elimar y editar          </th>
            
        </tr>
    </thead>
        <tbody>
            <div id="root"></div>
            {usuarios.map(usuario => (
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={usuario.id} >
                        <td class="px-6 py-3">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th class="px-6 py-4"> {usuario.id           }</th>
                        <th class="px-6 py-4"> {usuario.nombre          }</th>
                        <th class="px-6 py-4"> {usuario.apellidop  }</th>
                        <th class="px-6 py-4"> {usuario.apellidom }</th>
                        <th class="px-6 py-4"> {usuario.planta        }</th>
                        <th class="px-6 py-4"> {usuario.area       }</th>
                        <th class="px-6 py-4"> {usuario.correo        }</th>
                                
                        <td>
                                <div className="mb-3">

                                    




                                    <div>
                                    <Link to={`/editar-usuario/${usuario.id}`}
                                        className="text-lime-700 float:left;"><FiClipboard/> <span className="text-lime-700"></span>
                                         </Link>
                                            
                                            
                                    </div>

                                    <div>
                                    <button onClick={() => handleDelete(usuario.id)}
                                            className="text-red-900 float:left;"><FiTrash2/> <span className="text-red-900"></span></button>
                                    </div>

                                </div>
                        </td>
                </tr>
             ))}
            </tbody>
        </table>
    </div>
    )
}

export default Listusuario;