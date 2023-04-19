import React from "react";
import { useFormik } from "formik"; // formik se ocupara para validar los datos del furmulario
import * as Yup from 'yup';



const  Nuevousuario = () => {
  // aceptacion y validacion de lectura de los datos en el formulario

    const formik = useFormik( {
        initialValues : { // cada input tendra un valor inicial
            nombre: '',
            apellidop: '',
            apellidom: '',
            planta: '',
            area: '',
            correo: '',
                 
        },

        validationSchema : Yup.object({
            nombre: Yup.string()
                        .min(2, 'Nombre(S) ')
                        .required( 'Este campo es obligatorio  ' ),

            apellidop: Yup.string()
                        .min(2, 'Apellido Paterno ')
                        .required( 'Este campo es obligatorio  ' ),
            apellidom :  Yup.string()
                        .min(2, 'Apellido Materno ')
                        .required( 'Este campo es obligatorio  ' ),
            planta :  Yup.string()
                        .min(2, 'Planta ')
                        .required( 'Este campo es obligatorio  ' ),
            area:  Yup.string()
                        .min(2, 'Area  ')
                        .required( 'Este campo es obligatorio  ' ),
            correo: Yup.string()
                        .min(2, '@grupocipsa.com ')
                        .required( 'En caso de no tener un correo dejarlo en N/A  ' ),
            
          }),   

        // pasar automaticamnete los datos del formulario
        onSubmit: usuario => {

            console.log(usuario);
            try {
                const solicitudInit = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(usuario)
                }
                fetch(`http://localhost:3001/usuario/register`, solicitudInit)
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
             <h1 className="text-3xl font-light mb-4"> NUEVO USUARIO</h1>

<div className="flex justify-center mt-10">
    <div className="w-full mx-w-3xl">
        
            <form
                onSubmit={formik.handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre(s)"> NOMBRE </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id ="nombre"
                        type ="text"
                        placeholder ="nombre"

                            value = {formik.values.nombre}
                            onChange = {formik.handleChange} //permite capturar los datos
                            onBlur = {formik.handleBlur}
                        >
                    </input>
                </div>
                            { formik.touched.nombre && formik.errors.nombre ? (
                                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                <p className="font-bold"> Se ocasiono un error </p>
                                                <p> { formik.errors.nombre } </p>
                                            </div>
                                        ) : null }


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidop">PRIMER APELLIDO </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="apellidop"
                        type="text"
                        placeholder="primer apellido de la persona encargada"

                            value = {formik.values.apellidop}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        >
                    </input>
                </div>
                            { formik.touched.apellidop && formik.errors.apellidop ? (
                                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                    <p className="font-bold"> Se ocasiono un error </p>
                                                    <p> { formik.errors.apellidop } </p>
                                                </div>
                                            ) : null }
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidom">SEGUNDO APELLIDO</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="apellidom"
                        type="text"
                        placeholder="segundo apellido de la persona encargada"


                            value = {formik.values.apellidom}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        >
                    </input>
                </div>
                            { formik.touched.apellidom && formik.errors.apellidom ? (
                                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                    <p className="font-bold"> Se ocasiono un error </p>
                                                    <p> { formik.errors.apellidom } </p>
                                                </div>
                                            ) : null }



                                    
                    
                <div className="mb-4">

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="planta">PLANTA </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="planta"
                        type="text"
                        placeholder="planta"

                            value = {formik.values.planta}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        >
                    </input>
                </div>
                            { formik.touched.planta && formik.errors.planta ? (
                                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                    <p className="font-bold"> Se ocasiono un error </p>
                                                    <p> { formik.errors.planta } </p>
                                                </div>
                                            ) : null }


                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">AREA</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="area"
                        type="text"
                        placeholder="contabilidad"

                            value = {formik.values.area}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        >
                    </input>
                </div>
                            { formik.touched.area && formik.errors.area ? (
                                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                    <p className="font-bold"> Se ocasiono un error </p>
                                                    <p> { formik.errors.area } </p>
                                                </div>
                                            ) : null }

                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">CORREO </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="correo"
                        type="text"
                        placeholder="@grupocipsa.com"

                            value = {formik.values.correo}
                            onChange = {formik.handleChange}
                            onBlur = {formik.handleBlur}
                        >
                    </input>
                </div>
                            { formik.touched.correo && formik.errors.correo ? (
                                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role = "alert" >
                                                    <p className="font-bold"> Se ocasiono un error </p>
                                                    <p> { formik.errors.correo } </p>
                                                </div>
                                            ) : null }                                             

<input
                            type="submit"
                            className=" bg-blue-800   hover: bg-blue-800 , inline-block mb-5 p-2 text-white "
               
                            value="Agregar usuario"
                        >
                        </input>

                        </form>
                </div>
            </div>
        </>
    );
}
 
export default Nuevousuario;
