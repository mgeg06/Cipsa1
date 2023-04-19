import React from "react";
import { useFormik } from "formik"; // formik se ocupara para validar los datos del furmulario
import * as Yup from 'yup';



const  Nuevaimpesora = () => {
    
  // aceptacion y validacion de lectura de los datos en el formulario
    const formik = useFormik( {
        initialValues : { // cada input tendra un valor inicial
            numeroImpresora : '',
            usuario         : '',
            departamento    : '',
            marca           : '',
            modelo          : '',
            serie           : '',
            descripcion     : ''
                 
        },

        validationSchema : Yup.object({
            numeroImpresora: Yup.number()
                        .min(2, ' debe tener al menos25 caracteres ')
                        .required( 'Este campo es obligatorio ' ),

            usuario: Yup.string()
                        .min(2, ' debe tener al menos25 caracteres ')
                        .required( 'Este campo es obligatorio ' ),
            departamento :  Yup.string()
                        .min(2, ' debe tener al menos25 caracteres ')
                        .required( 'Este campo es obligatorio ' ),
            marca :  Yup.string()
                        .min(2, ' debe tener al menos25 caracteres ')
                        .required( 'Este campo es obligatorio ' ),
            modelo:  Yup.string()
                        .min(2, ' debe tener al menos25 caracteres ')
                        .required( 'Este campo es obligatorio ' ),
            serie: Yup.string()
                        .min(2, ' debe tener al menos25 caracteres ')
                        .required( 'Este campo es obligatorio ' ),
            descripcion : Yup.string()
                        .min(2, ' debe tener al menos25 caracteres ')
                        .required( 'En caso de no tener una descripcion, dejarlo en:  Sin Descripcion ' ),
          }),   

        // pasar automaticamnete los datos del formulario
        onSubmit: impresora => {

            console.log(impresora);
            try {
                const solicitudInit = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(impresora)
                }
                fetch(`http://localhost:3001/impresora/register`, solicitudInit)
                    .then(res => res.json())
                    .then(res => console.log(res))

                // navigate ('/list-computadora');

            } catch (error) {
                console.log(error);
                console.log('creo que ya existe la computDOE', error)
            }
        },
    } )



    return ( 
        <>
            <h1 className="text-3xl font-light mb-4"> NUEVA IMPRESORA </h1>

            <div className="flex justify-center mt-10">
                <div className="w-full mx-w-3xl">
                    
                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroImpresora"> NUMERO IMPRESRA </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id ="numeroImpresora"
                                    type ="text"
                                    placeholder ="numero de la impresora"

                                        value = {formik.values.numeroImpresora}
                                        onChange = {formik.handleChange} //permite capturar los datos
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.numeroImpresora && formik.errors.numeroImpresora ? (
                                                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                            <p className="font-bold"> Se ocasiono un error </p>
                                                            <p> { formik.errors.numeroImpresora } </p>
                                                        </div>
                                                    ) : null }


                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">USUARIO </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="usuario"
                                    type="text"
                                    placeholder="Nombre de la persona encargada"

                                        value = {formik.values.usuario}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.usuario && formik.errors.usuario ? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.usuario } </p>
                                                            </div>
                                                        ) : null }
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departamento">DEPARTAMENTO </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="departamento"
                                    type="text"
                                    placeholder="planta y area del usuario"

                                        value = {formik.values.departamento}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.departamento && formik.errors.departamento ? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.departamento } </p>
                                                            </div>
                                                        ) : null }



                                                
                                
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marca">MARCA </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="marca"
                                    type="text"
                                    placeholder="Colocar la marca del mmonitor"

                                        value = {formik.values.marca}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.marca && formik.errors.marca ? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.marca } </p>
                                                            </div>
                                                        ) : null }


                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelo">MODELO </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="modelo"
                                    type="text"
                                    placeholder=" modelo del la impresora"

                                        value = {formik.values.modelo}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.modelo && formik.errors.modelo ? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.modelo } </p>
                                                            </div>
                                                        ) : null }
     
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serie">NUMERO DE SERIE </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="serie"
                                    type="text"
                                    placeholder=" numero serie de la impresora "

                                        value = {formik.values.serie}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.serie && formik.errors.serie ? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.serie } </p>
                                                            </div>
                                                        ) : null }



                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">DESCRIPCION </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="descripcion"
                                    type="text"
                                    placeholder="descripcion"

                                        value = {formik.values.descripcion}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.descripcion && formik.errors.descripcion? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.descripcion } </p>
                                                            </div>
                                                        ) : null }

                            
                                            

<input
                            type="submit"
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            value="Agregar Impresora"
                        >
                        </input>

                        </form>
                </div>
            </div>
        </>
    );
}
 
export default Nuevaimpesora;




 {/* <input
                            type="submit"
                           
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"   
                           
                        >
                        </input> */}
                        <input  type="submit" className=" bg-blue-800   hover: bg-blue-800 , inline-block mb-5 p-2 text-white " > 
                        <a href="/list-computadora"> Agregar Computadora</a></input>
