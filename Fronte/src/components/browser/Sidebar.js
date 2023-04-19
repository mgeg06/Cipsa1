import React from 'react';
import { NavLink } from 'react-router-dom';
import cipsa from "../assets/cipsa.png";

import { SlCallOut } from "react-icons/sl";
import {FiUserPlus} from "react-icons/fi";

import { ImDisplay , ImClipboard,ImPrinter} from "react-icons/im";


const Sidebar = () => {

   
      
      
    return (

        
   
        <div className="flex">
                         {/* //....... cambiar el color del sidebar...// */}
            <div className="flex flex-col h-screen p-3 bg-blue-800 shadow w-60"> 
                <div className="space-y-3">
                 
                    <div>
                    <img src = {cipsa}  alt = 'Imagen de empresa CIPSA' ></img>
                    
                </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span className="text-gray-100">< a href="/">INICIO</a></span>
                                    
                                    
                                </a>
                            </li>
                             
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        
                                    </svg>
                                    <span className="text-gray-100 float:left;"><ImClipboard/></span> <span className="text-gray-100">< a href="/menu">Registrar</a> </span>
                                     </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    
                                    <span className="text-gray-100"><a href=""> LISTA DE REGISTRO</a></span>
                                    
                                    
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        
                                    </svg>
                                    <span className="text-gray-100 float:left;"><ImDisplay/></span> <span className="text-gray-100"><a href="/list-computadora"> Computadora</a></span>
                                    
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                       
                                    </svg>
                                    <span className="text-gray-100 float:left;"><FiUserPlus/></span> <span className="text-gray-100"><a href="/list-usuario"> usuario</a></span>
                                    
                                </a>
                            </li>
                            
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                       
                                    </svg>
                                   
                                    <span className="text-gray-100 float:left;"><SlCallOut/></span> <span className="text-gray-100"><a href="/list-telefono"> Telefonos</a></span>
                                    

                                    
                                    
                                </a>
                            </li>

                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-left p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                       
                                    </svg>
                                   
                                    <span className="text-gray-100 float:left;"><ImPrinter/></span> <span className="text-gray-100"><a href="/list-impresora"> Impresoras</a></span>
                                    

                                    
                                    
                                </a>
                            </li>
                            
                        </ul>
                     
                    </div>
                  
                </div>

            </div>
            
        </div>
    );
  
}































 export default Sidebar;


