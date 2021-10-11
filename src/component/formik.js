import React from 'react'
import { useFormik, validateYupSchema } from 'formik'
import * as Yup from 'yup';
export default function Formik() {
    /////////// through default/////////////////
    //  const validate=values=>{
    //       const error={}
    //      console.log(error)

    //     if(!values.firstname){
    //         error.firstname='reqiured'
    //     }

    //     return error
    // }
    /////////// through yup/////////////////

    const formik = useFormik({
        initialValues: { email: "", firstname: "", lastname: "" }, 
        validateYupSchema: Yup.object({
            firstname: Yup.string().required("Required").min(1, "min 1 atleast").max(5, "NOT")
        }), 
        onSubmit: (value) => console.log((value))
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            <input
                placeholder="enter firstname"
                type='text'
                id="firstname"
                name="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                onBlur={formik.handleBlur} />
            {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}
            <input
                placeholder="enter latsname"
                type='text'
                id="lastname"
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname} />
            <input
                placeholder="enter email"
                type='email'
                id='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email} />
            <button type="submit">submit</button>
        </form>
    )
}
