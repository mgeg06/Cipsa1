
import React from "react";
import { Link } from "react-router-dom";
import { ImDisplay , ImClipboard,ImPrinter} from "react-icons/im";
import { BiHighlight } from "react-icons/bi";
import { FiClipboard,FiTrash2 } from "react-icons/fi";

const Listcomputadora = ({ computadoras, setListUpdated }) => {

    //metodo de eliminar
    const handleDelete = id => {

        const requestInit = {
            method: 'DELETE'
        }
        fetch("http://localhost:3001/computadora/delete/" + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true);
    }

    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

            <div class="pb-4 bg-white dark:bg-gray-900">
                <label for="table-search" class="sr-only">Search</label>
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
                        <th scope="col" class="px-6 py-3"> equipo de computo     </th>
                        <th scope="col" class="px-6 py-3"> usuario             </th>
                        <th scope="col" class="px-6 py-3"> ubicacion           </th>
                        <th scope="col" class="px-6 py-3"> ip                  </th>
                        <th scope="col" class="px-6 py-3"> estatus             </th>
                        <th scope="col" class="px-6 py-3"> marca de monitor        </th>
                        <th scope="col" class="px-6 py-3"> modelo del monitor       </th>
                        <th scope="col" class="px-6 py-3"> numero de serie         </th>
                        <th scope="col" class="px-6 py-3"> procesador          </th>
                        <th scope="col" class="px-6 py-3"> sistema             </th>
                        <th scope="col" class="px-6 py-3"> memoria             </th>
                        <th scope="col" class="px-6 py-3"> almacenamiento      </th>
                        <th scope="col" class="px-6 py-3"> macethernet         </th>
                        <th scope="col" class="px-6 py-3"> macwifi             </th>
                        <th scope="col" class="px-6 py-3"> marcacpu            </th>
                        <th scope="col" class="px-6 py-3"> modelocpu           </th>
                        <th scope="col" class="px-6 py-3"> numeroseriecpu      </th>
                        <th scope="col" class="px-6 py-3"> marcateclado        </th>
                        <th scope="col" class="px-6 py-3"> modeloteclado       </th>
                        <th scope="col" class="px-6 py-3"> numeroserieteclado  </th>
                        <th scope="col" class="px-6 py-3"> marcamause          </th>
                        <th scope="col" class="px-6 py-3"> modelomause         </th>
                        <th scope="col" class="px-6 py-3"> numeroseriemause    </th>
                        <th scope="col" class="px-6 py-3"> fechamante          </th>
                        <th scope="col" class="px-6 py-3"> elimar y editar          </th>
                    </tr>
                </thead>
                <tbody>

                    <div id="root"></div>

                    {computadoras.map(computadora => (
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            key={computadora.id} >
                            <td class="px-6 py-3">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="px-6 py-4"> {computadora.id                  } </td>
                            <td class="px-6 py-4"> {computadora.equipodecomputo     }</td>
                            <td class="px-6 py-4"> {computadora.usuario             } </td>
                            <td class="px-6 py-4"> {computadora.ubicacion           } </td>
                            <td class="px-6 py-4"> {computadora.ip                  }  </td>
                            <td class="px-6 py-4"> {computadora.estatus             } </td>
                            <td class="px-6 py-4"> {computadora.marcamonitor        } </td>
                            <td class="px-6 py-4"> {computadora.modelomonitor       } </td>
                            <td class="px-6 py-4"> {computadora.numeroserie         } </td>
                            <td class="px-6 py-4"> {computadora.procesador          } </td>
                            <td class="px-6 py-4"> {computadora.sistema             } </td>
                            <td class="px-6 py-4"> {computadora.memoria             } </td>
                            <td class="px-6 py-4"> {computadora.almacenamiento      } </td>
                            <td class="px-6 py-4"> {computadora.macethernet         } </td>
                            <td class="px-6 py-4"> {computadora.macwifi             } </td>
                            <td class="px-6 py-4"> {computadora.marcacpu            } </td>
                            <td class="px-6 py-4"> {computadora.modelocpu           } </td>
                            <td class="px-6 py-4"> {computadora.numeroseriecpu      } </td>
                            <td class="px-6 py-4"> {computadora.marcateclado        } </td>
                            <td class="px-6 py-4"> {computadora.modeloteclado       } </td>
                            <td class="px-6 py-4"> {computadora.numeroserieteclado  } </td>
                            <td class="px-6 py-4"> {computadora.marcamause          } </td>
                            <td class="px-6 py-4"> {computadora.modelomause         }     </td>
                            <td class="px-6 py-4"> {computadora.numeroseriemause    } </td>
                            <td class="px-6 py-4"> {computadora.fechamante          } </td>
                            <td>
                                <div className="mb-3">

                                <div>
                                        <Link to={`/editar-computadora/${computadora.id}`}
                                        className="text-lime-700 float:left;"><FiClipboard/> <span className="text-lime-700"></span>
                                         </Link>
                                            
                                            
                                    </div>

                                    <div>
                                        <button onClick={() => handleDelete(computadora.id)}
                                            className="text-red-900 float:left;"><FiTrash2/> <span className="text-red-900"></span></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            
{/* <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="/list-computadora" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="/list-computadora" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="/list-computadora" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="/list-computadora" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="/list-computadora" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="/list-computadora" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav> */}

        </div>
        
    )
}

export default Listcomputadora;