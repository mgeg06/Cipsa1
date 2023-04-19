import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Nuevacomputadora from './components/paginas/computadora/NuevaComputadora'; // formulario 
import Listcomputadora from './components/paginas/computadora/ListComputadora'; // formulario 
import Editcomputadora from './components/paginas/computadora/EditComputadora'; // formulario 



import Nuevaimpresora from './components/paginas/impresora/NuevaImpresora'; // formulario 
import Listimpresora from './components/paginas/impresora/ListImpresora'; // formulario 
import Editimpresora from './components/paginas/impresora/EditImpresora'; // formulario 



import Nuevotelefono from './components/paginas/telefonos/NuevoTelefono'; // formulario 
import Listtelefono from './components/paginas/telefonos/ListTelefono'; // formulario 
import Edittelefono from './components/paginas/telefonos/EditTelefono'; // formulario 

import Nuevousuario from './components/paginas/usuario/NuevoUsuario'; // formulario 
import Listusuario from './components/paginas/usuario/ListUsuario'; // formulario 
import Editusuario from './components/paginas/usuario/EditUsuario'; // formulario 


import Menu from './components/paginas/Menu';
import Inicio from './components/paginas/Inicio';



//Importacion de Barra lateral Sidebar.js
import Sidebar from './components/browser/Sidebar';


import { useState,useEffect } from 'react';


function App() {  
  
  const [listUpdated, setListUpdated ] = useState(false);   // constante para eliminar y actualizar datos

//--------------------------------- COMPUTADORA ------------------------------------
const [computadora, setComputadora] = useState({ // constante para agregar computadora
      equipodecomputo: '',
      usuario : '',
      ubicacion : '',
      ip: '',
      estatus: '',
      marcamonitor : '',
      modelomonitor : '',
      numeroserie: '',
      procesador : '',
      sistema : '',
      memoria : '',
      almacenamiento : '',
      macethernet : '',
      macwifi : '',
      marcacpu : '',
      modelocpu : '',
      numeroseriecpu : '',
      marcateclado : '',
      modeloteclado : '',
      numeroserieteclado : '',
      marcamause : '',
      modelomause : '',
      numeroseriemause : '',
      fechamante : ''
  });

  const [computadoras, setComputadoras] = useState([]); // constante para el listado de computadoras

    useEffect(() => { //Obtener las computadoras
      const getComputadoras = () => {
        fetch("http://localhost:3001/computadoras/list/")
        .then( res => res.json() )
        .then( res => setComputadoras(res) )
      }
      getComputadoras(); // 
      setListUpdated(false)
    }, [listUpdated] )

//--------------------------------------------------------------------------------


//--------------------------------- IMPRESORA ------------------------------------
 
    const [impresora, setImpresora] = useState({ // constante para agregar impresora
      numeroImpresora : '',
      usuario         : '',
      departamento    : '',
      marca           : '',
      modelo          : '',
      serie           : '',
      descripcion     : ''
    });
    
    const [impresoras, setImpresoras] = useState([]); // constante para el listado de impresoras
    
        useEffect(() => { //Obtener las impresoras
          const getImpresoras = () => {
            fetch("http://localhost:3001/impresoras/list/")
            .then( res => res.json() )
            .then( res => setImpresoras(res) )
          }
          getImpresoras(); // 
          setListUpdated(false)
        }, [listUpdated] )
        
//-------------------------------------------------------------------------------
        
        
//--------------------------------- TELEFONO ------------------------------------

    const [telefono, setTelefono] = useState({ // constante para agregar telefono
      
      extencion      : '',
      recepcion      : '',
      departamento   : '',
      marca          : '',
      modelo         : '',
      serie          : '',
      descripcion    : '',
      contra         : '',
      ip             : '',   
           
    });
        
    const [telefonos, setTelefonos] = useState([]); // listado de telefonos
  
      useEffect(() => { //Obtener los telefonos
        const getTelefonos = () => {
          fetch("http://localhost:3001/telefonos/list/")
          .then( res => res.json() )
          .then( res => setTelefonos(res) )
        }
        getTelefonos(); // 
        setListUpdated(false)
      }, [listUpdated] )

//-----------------------------------------------------------------------------
 //--------------------------------USUARIO----------------------------------------------------


 const [usuario, setUsuario] = useState({ // constante para agregar telefono
      
  nombre: '',
  apellidop: '',
  apellidom: '',
  planta: '',
  area: '',
  correo: '',
       
})
    
const [usuarios, setUsuarios] = useState([]); // listado de usuarios

  useEffect(() => { //Obtener las usuarios
    const getUsuarios = () => {
      fetch("http://localhost:3001/usuarios/list/")
      .then( res => res.json() )
      .then( res => setUsuarios(res) )
    }
    getUsuarios(); // 
    setListUpdated(false)
  }, [listUpdated] )










 //-----------------------------------------------------------------------------
   
  
  return (
    <div className='md:flex min-h-screen'>

      <Sidebar/>

      <div className='md:w-4/5 xl:w-4/5 p-6'>
      
        <Routes>
          <Route path="/menu" element={ <Menu/> } /> 
          <Route path="/" element={ <Inicio/> } /> 
          

          <Route path="/nueva-computadora"   element={ <Nuevacomputadora/> } />
          <Route path="/list-computadora"    element={ <Listcomputadora computadora={computadora} setComputadora = {setComputadora}    computadoras = {computadoras} setListUpdated = {setListUpdated} />  } />
          <Route path="/editar-computadora/:id"  element={ <Editcomputadora computadora={computadora} setComputadora = {setComputadora}    computadoras = {computadoras} setListUpdated = {setListUpdated} />  } />
          
          <Route path="/nueva-impresora"      element={ <Nuevaimpresora/> } />
          <Route path="/list-impresora"       element={ <Listimpresora  impresora={impresora} setImpresora = {setImpresora}    impresoras = {impresoras} setListUpdated = {setListUpdated} /> } />
          <Route path="/editar-impresora/:id"     element={ <Editimpresora  impresora={impresora} setImpresora = {setImpresora}    impresoras = {impresoras} setListUpdated = {setListUpdated} />} />

          <Route path="/nuevo-telefono"     element={ <Nuevotelefono/> } />
          <Route path="/list-telefono"      element={ <Listtelefono  telefono={telefono} setTelefono = {setTelefono}    telefonos = {telefonos} setListUpdated = {setListUpdated} /> } />
          <Route path="/editar-telefono/:id"    element={ <Edittelefono  telefono={telefono} setTelefono = {setTelefono}    telefonos = {telefonos} setListUpdated = {setListUpdated} /> } />

          <Route path="/nuevo-usuario"     element={ <Nuevousuario/> } />
          <Route path="/list-usuario"      element={ <Listusuario  usuario={usuario} setUsuario = {setUsuario}    usuarios = {usuarios} setListUpdated = {setListUpdated} /> } />
          <Route path="/editar-usuario/:id"    element={ <Editusuario  usuario={usuario} setUsuario = {setUsuario}    usuarios = {usuarios} setListUpdated = {setListUpdated} /> } />
       
      
       </Routes>
      </div>
    </div>
  );
 }

 

export default App;