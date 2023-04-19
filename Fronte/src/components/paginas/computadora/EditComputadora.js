import React from "react";
import { useFormik } from "formik"; // formik se ocupara para validar los datos del furmulario
import * as Yup from 'yup';
import { useParams } from "react-router";


const Editcomputadora = () => {
    // aceptacion y validacion de lectura de los datos en el formulario

    const {id} = useParams();

    const formik = useFormik({
        initialValues: { // cada input tendra un valor inicial

            equipodecomputo: '',
            usuario: '',
            ubicacion: '',
            ip: '',
            estatus: '',
            marcamonitor: '',
            modelomonitor: '',
            numeroserie: '',
            procesador: '',
            sistema: '',
            memoria: '',
            almacenamiento: '',
            macethernet: '',
            macwifi: '',
            marcacpu: '',
            modelocpu: '',
            numeroseriecpu: '',
            marcateclado: '',
            modeloteclado: '',
            numeroserieteclado: '',
            marcamause: '',
            modelomause: '',
            numeroseriemause: '',
            fechamante: ''
        },

        validationSchema: Yup.object({

            equipodecomputo: Yup.string()
            .min(0, 'El equipo de computo debe tener al menos 30 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        usuario: Yup.string()
            .min(2, 'El usuario debe tener al menos25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        ubicacion: Yup.string()
            .min(2, 'La ubicación debe tener al menos25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        ip: Yup.string()
            .min(2, 'La IP debe tener al menos25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        estatus: Yup.string()
            .min(2, 'El etado debe tener al menos25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        marcamonitor: Yup.string()
            .min(2, 'La marca de monitor debe tener al menos25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        modelomonitor: Yup.string()
            .min(2, 'El modelo de monitor debe tener al menos25 caracteres ')
            .required('En caso de no contar con el modelo dejarlo en N/A'),
        numeroserie: Yup.string()
            .min(2, 'El numero de serie debe tener al menos 15 caracteres ')
            .required('En caso de no contar con el numero serie dejarlo enN/A '),
        procesador: Yup.string()
            .min(1, 'el procesador debe tener al menos 15 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        sistema: Yup.string()
            .min(2, 'El sistema operativo debe tener al menos 25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        memoria: Yup.string()
            .min(2, 'La memoria debe tener al menos 25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        almacenamiento: Yup.string()
            .min(2, 'El almacenamiento debe tener al menos 25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        macethernet: Yup.string()
            .min(2, 'La mac-Ethernet debe tener al menos 25 caracteres ')
            .required('En caso de no contar con LA MAC-ETHERNET dejarlo en N/A '),
        macwifi: Yup.string()
            .min(2, 'La mac-Wifi debe tener al menos 25 caracteres ')
            .required('En caso de no contar con LA MAC-WIFI dejarlo en S/W '),
        marcacpu: Yup.string()
            .min(2, 'La marca de CPU debe tener al menos 25 caracteres ')
            .required('Este campo es obligatorio es obligatorio '),
        modelocpu: Yup.string()
            .min(2, 'El modelo del CPU debe tener al menos 25 caracteres ')
            .required('En caso de no contar con el modelo dejarlo en N/A'),
        numeroseriecpu: Yup.string()
            .min(2, 'El el numero serie del cpu debe tener al menos 25 caracteres ')
            .required('En caso de no contar con el numero de serie dejarlo en N/A'),
        marcateclado: Yup.string()
            .min(2, 'La marca del teclado debe tener al menos 25 caracteres ')
            .required('En caso de no contar con el numero de serie dejarlo en N/A'),
        modeloteclado: Yup.string()
            .min(2, 'El modelo debe tener al menos 25 caracteres ')
            .required('En caso de no contar con el numero de serie dejarlo en N/A '),
        numeroserieteclado: Yup.string()
            .min(2, 'El numero serie del teclado debe tener al menos25 caracteres ')
            .required('En caso de no contar con el numero de serie dejarlo en N/A '),
        marcamause: Yup.string()
            .min(2, 'La marca del mause debe tener al menos25 caracteres ')
            .required('En caso de no contar con el numero de serie dejarlo en N/A '),
        modelomause: Yup.string()
            .min(2, 'El modelo del mause debe tener al menos 15 caracteres ')
            .required('En caso de no contar con el numero de serie dejarlo en N/A '),
        numeroseriemause: Yup.string()
            .min(2, 'El numero de serie del mause debe tener al menos 25 caracteres ')
            .required('En caso de no contar con el numero de serie dejarlo en N/A '),
        fechamante: Yup.date()
            .min(2, ' Ingresar la fecha del mantenimiento ')
            .required('La fecha es obligatorio'),

        }),

        // pasar automaticamnete los datos del formulario


        onSubmit: computadora => { //handelSubmit pasar automaticamnete los datos del formulario
            console.log(computadora);

            try { // actualizar

                computadora.existencia = true; 

                const solicitudInit = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(computadora)
                }
                fetch(`http://localhost:3001/computadora/update/${id}`, solicitudInit)
                    .then(res => res.json())
                    .then(res => console.log(res))
                // navigate ('/menu');
            } catch (error) {
                console.log(error);
            }
        },
    }
    );

    return (
        <>
          <h1 className="text-3xl font-light mb-4">EDITAR COMPUTADORA</h1>

<div className="flex justify-center mt-10">
    <div className="w-full mx-w-3xl">
        
        <form
            onSubmit={formik.handleSubmit}
        >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="equipodecomputo"> CODIGO </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="equipodecomputo"
                    type="text"
                    placeholder="nombre del equipo"

                    value={formik.values.equipodecomputo}
                    onChange={formik.handleChange} //permite capturar los datos
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.equipodecomputo && formik.errors.equipodecomputo ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.equipodecomputo} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">USUARIO </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="usuario"
                    type="text"
                    placeholder="Nombre de la persona encargada"

                    value={formik.values.usuario}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.usuario && formik.errors.usuario ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.usuario} </p>
                </div>
            ) : null}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ubicacion">PLANTA-AREA </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="ubicacion"
                    type="text"
                    placeholder="planta y area del usuario"

                    value={formik.values.ubicacion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.ubicacion && formik.errors.ubicacion ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.ubicacion} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ip">IP </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="ip"
                    type="text"
                    placeholder="IP del equipo"

                    value={formik.values.ip}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.ip && formik.errors.ip ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.ip} </p>
                </div>
            ) : null}








            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estatus"> Estado </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="estatus"
                    type="text"
                    placeholder="activio o inactivo"

                    value={formik.values.estatus}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.estatus && formik.errors.estatus ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.estatus} </p>
                </div>
            ) : null}






            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" >DATOS DEL MONITOR</label>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marcamonitor">MARCA </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="marcamonitor"
                    type="text"
                    placeholder=" marca del monitor"

                    value={formik.values.marcamonitor}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.marcamonitor && formik.errors.marcamonitor ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.marcamonitor} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelomonitor">MODELO </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="modelomonitor"
                    type="text"
                    placeholder="modelo del monitor"

                    value={formik.values.modelomonitor}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.modelomonitor && formik.errors.modelomonitor ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.modelomonitor} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroserie">NUMERO DE SERIE </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="numeroserie"
                    type="text"
                    placeholder="numero serie del monitor"

                    value={formik.values.numeroserie}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.numeroserie && formik.errors.numeroserie ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.numeroserie} </p>
                </div>
            ) : null}



            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="procesador">PROCESADOR  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="procesador"
                    type="text"
                    placeholder="tipo de procesador"

                    value={formik.values.procesador}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.procesador && formik.errors.procesador ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.procesador} </p>
                </div>
            ) : null}






            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sistema">SISTEMA OPERATIVO  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sistema"
                    type="text"
                    placeholder="Sistema Operativo"

                    value={formik.values.sistema}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.sistema && formik.errorssistema ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.sistema} </p>
                </div>
            ) : null}





            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="memoria">MEMORIA RAM  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="memoria"
                    type="text"
                    placeholder="Memoria RAM instalada"

                    value={formik.values.memoria}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.memoria && formik.errors.memoria ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.memoria} </p>
                </div>
            ) : null}




            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="almacenamiento">ALMACENAMIENTO EN DISCO DURO </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="almacenamiento"
                    type="text"
                    placeholder="Capacidad del almacenamiento"

                    value={formik.values.almacenamiento}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.almacenamiento && formik.errors.almacenamiento ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.almacenamiento} </p>
                </div>
            ) : null}





            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="macethernet">MAC ETHERNET </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="macethernet"
                    type="text"
                    placeholder="mac ethernet"

                    value={formik.values.macethernet}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.macethernet && formik.errors.macethernet ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.macethernet} </p>
                </div>
            ) : null}


            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="macwifi">MAC WIFI </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="macwifi"
                    type="text"
                    placeholder="mac wifi"

                    value={formik.values.macwifi}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.macwifi && formik.errors.macwifi ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.macwifi} </p>
                </div>
            ) : null}





























            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" >DATOS DEL CPU</label>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marcacpu">MARCA</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="marcacpu"
                    type="text"
                    placeholder="marca del cpu"

                    value={formik.values.marcacpu}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.marcacpu && formik.errors.marcacpu ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.marcacpu} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelocpu">MODELO </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="modelocpu"
                    type="text"
                    placeholder=" modelo del cpu"

                    value={formik.values.modelocpu}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.modelocpu && formik.errors.modelocpu ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.modelocpu} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroseriecpu">NUMERO DE SERIE  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="numeroseriecpu"
                    type="text"
                    placeholder=" numero serie del cpu"

                    value={formik.values.numeroseriecpu}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.numeroseriecpu && formik.errors.numeroseriecpu ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.numeroseriecpu} </p>
                </div>
            ) : null}
















            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" >DATOS DEL TECLADO</label>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marcateclado">MARCA </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="marcateclado"
                    type="text"
                    placeholder=" marca del teclado"

                    value={formik.values.marcateclado}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.marcateclado && formik.errors.marcateclado ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.marcateclado} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modeloteclado">MODELO  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="modeloteclado"
                    type="text"
                    placeholder=" modelo del teclado"

                    value={formik.values.modeloteclado}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.modeloteclado && formik.errors.modeloteclado ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.modeloteclado} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroserieteclado">NUMERO DE SERIE  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="numeroserieteclado"
                    type="text"
                    placeholder=" numeroserie del teclado"

                    value={formik.values.numeroserieteclado}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.numeroserieteclado && formik.errors.numeroserieteclado ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.numeroserieteclado} </p>
                </div>
            ) : null}











            <div className="mb-4">
                <label className="block text-red-700 text-sm font-bold mb-2" >DATOS DEL MAUSE</label>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marcamause">MARCA</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="marcamause"
                    type="text"
                    placeholder=" marca del mause"

                    value={formik.values.marcamause}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.marcamause && formik.errors.marcamause ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.marcamause} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelomause">MODELO  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="modelomause"
                    type="text"
                    placeholder="modelo del mause"

                    value={formik.values.modelomause}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.modelomause && formik.errors.modelomause ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.modelomause} </p>
                </div>
            ) : null}


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroseriemause">NUMERO DE SERIE  </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="numeroseriemause"
                    type="text"
                    placeholder=" numero de serie del mause"

                    value={formik.values.numeroseriemause}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                </input>
            </div>
            {formik.touched.numeroseriemause && formik.errors.numeroseriemause ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.numeroseriemause} </p>
                </div>
            ) : null}















            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechamante">FECHA DE MANTENIMIENTO</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fechamante"
                    type="date"
                    placeholder="DD/MM/AA"

                    value={formik.values.fechamante}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                >
                </input>
            </div>
            {formik.touched.fechamante && formik.errors.fechamante ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" >
                    <p className="font-bold"> Se ocasiono un error </p>
                    <p> {formik.errors.fechamante} </p>
                </div>
            ) : null}





                        <input
                         href="/list-computadora"
                            type="submit"
                            className=" bg-blue-800   hover: bg-blue-800 , inline-block mb-5 p-2 text-white "
                            value="Reemplazar Datos"
                        >
                        </input>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Editcomputadora;
