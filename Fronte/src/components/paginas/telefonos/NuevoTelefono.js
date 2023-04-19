
import React from "react";
import { useFormik } from "formik"; // formik se ocupara para validar los datos del furmulario
import * as Yup from 'yup';



const Nuevotelefono = () => {
  // aceptacion y validacion de lectura de los datos en el formulario
    const formik = useFormik( {
        initialValues : { // cada input tendra un valor inicial
            extencion      : '',
            recepcion      : '',
            departamento   : '',
            marca          : '',
            modelo         : '',
            serie          : '',
            descripcion    : '',
            contra         : '',
            ip             : '',           
        },

        validationSchema : Yup.object({
            extencion: Yup.number()
                        .min(2, 'extencion ')
                        .required( 'Este campo es obligatorio  ' ),

            recepcion: Yup.string()
                        .min(2, 'nombre de la persona a cargo ')
                        .required( 'Este campo es obligatorio  ' ),
            departamento :  Yup.string()
                        .min(2, 'area y planta ')
                        .required( 'Este campo es obligatorio  ' ),
            marca :  Yup.string()
                        .min(2, 'marca del telefono')
                        .required( 'Este campo es obligatorio  ' ),
            modelo:  Yup.string()
                        .min(2, 'modelo del telefono ')
                        .required( 'En caso de no tener el modelo dejarlo en N/A  ' ),
            serie: Yup.string()
                        .min(2, 'serie del telefono')
                        .required( 'En caso de no tener el modelo dejarlo en N/A   ' ),
            descripcion : Yup.string()
                        .min(2, 'descripcion ')
                        .required( 'En caso de no tener descripcion dejarlo en N/A  ' ),
            contra : Yup.string()
                        .min(2, 'contraseña del telefono')
                        .required( 'En caso de no tener una contraseña dejarlo en N/A  ' ),
            ip : Yup.string()
                        .min(2, 'IP del telefono ')
                        .required( 'Este campo es obligatorio  ' 
                        ),
            
          }),   
        // pasar automaticamnete los datos del formulario
        onSubmit: telefono => {

            console.log(telefono);
            try {
                const solicitudInit = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(telefono)
                }
                fetch(`http://localhost:3001/telefono/register`, solicitudInit)
                    .then(res => res.json())
                    .then(res => console.log(res))

                // navigate ('/list-computadora');

            } catch (error) {
                console.log(error);
                console.log('creo que ya existe el telefonno', error)
            }
        },
    } )



    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">NUEVO TELEFONO</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full mx-w-3xl">
                    

                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="extencion"> EXTENCION </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id ="extencion"
                                    type ="text"
                                    placeholder ="extencion"

                                        value = {formik.values.extencion}
                                        onChange = {formik.handleChange} //permite capturar los datos
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.extencion && formik.errors.extencion ? (
                                                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                            <p className="font-bold"> Se ocasiono un error </p>
                                                            <p> { formik.errors.extencion } </p>
                                                        </div>
                                                    ) : null }


                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recepcion">RECEPCION </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="recepcion"
                                    type="text"
                                    placeholder="Nombre de la persona encargada"

                                        value = {formik.values.recepcion}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.recepcion && formik.errors.recepcion ? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.recepcion } </p>
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
                                    placeholder="marca "

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
                                    placeholder=" modelo r"

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
                                    placeholder="numero de serie "

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






                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contra">CONTRASEÑA  </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="contra"
                                    type="text"
                                    placeholder="contraseña"

                                        value = {formik.values.contra}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.contra && formik.errorscontra? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.contra } </p>
                                                            </div>
                                                        ) : null }
                                                        







                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ip">IP </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="ip"
                                    type="text"
                                    placeholder="ip del equipo"

                                        value = {formik.values.ip}
                                        onChange = {formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                    >
                                </input>
                            </div>
                                        { formik.touched.ip && formik.errors.ip ? (
                                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                                <p className="font-bold"> Se ocasiono un error </p>
                                                                <p> { formik.errors.ip } </p>
                                                            </div>
                                                        ) : null }

                            

              

<input
                            type="submit"
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            value="Agregar telefono"
                        >
                        </input>

                        </form>
                </div>
            </div>
        </>
        );

}
export default Nuevotelefono;
