
import { useFormik } from "formik";
import * as Yup from 'yup';
import {TextField,Button} from "@mui/material";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export default function AddStaff() {

    const[APIData, setAPIData] = useState([]);
    const getStaffsUrl = 'https://6530c5486c756603295f0271.mockapi.io/api/v1/staffs';

    const formik = useFormik({
        initialValues:{
            name:"",
            address:"",
            age:"",
            avatar:"",
            createdAt:"",
    },
    onSubmit: (values)=>{
        alert(JSON.stringify(formik.values));
        // fetch(getStaffsUrl, {method:'POST'}).then(
        //     response => {
        //         if(!response.ok) {
        //             throw new Error(`HTTP status: ${response.status}`);
        //         }
        //         return response.json();
        //     })
        //     .then(data=>{setAPIData(data.sort((a,b)=>{return b.age - a.age}))})
        //     .catch(error=>console.log(error.message));
        
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required.").min(3, "Must be more 2 characters"),
        address: Yup.string().required("Required.").typeError("Please enter a address"),
        age: Yup.number().integer().required("Required.").typeError("Please enter a valid number"),
        avatar: Yup.string().url().required("Required.").typeError("Please enter a valid url"),
        createdAt: Yup.string().required("Required.").typeError("Please enter date")
    }),
    
   });

    const createNewStaff = () => {
        fetch(getStaffsUrl, {method:'POST'}).then(
            response => {
                if(!response.ok) {
                    throw new Error(`HTTP status: ${response.status}`);
                }
                return response.json();
            })
            .then(data=>{setAPIData(data.sort((a,b)=>{return b.age - a.age}))})
            .catch(error=>console.log(error.message));
        
    }
    


    return(
        <div>
            <h1 className="font-pages">Add new staff</h1>
           

            <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
            <TextField
               label="Name"
              name="name"
             value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
            <TextField
	label="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.errors.address && (<Typography variant="caption" color="red">{formik.errors.address}</Typography>)}
             <TextField
              label="age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
             {formik.errors.age && (<Typography variant="caption" color="red">{formik.errors.age}</Typography>)}

<TextField
              label="avatar"
              name="avatar"
              value={formik.values.avatar}
              onChange={formik.handleChange}
            />
            {formik.errors.avatar && (<Typography variant="caption" color="red">{formik.errors.avatar}</Typography>)}


<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="CreatedAt" />
      </DemoContainer>
    </LocalizationProvider>
    {formik.errors.createdAt && (<Typography variant="caption" color="red">{formik.errors.createdAt}</Typography>)}
         
            <Button onClick={createNewStaff()} variant="contained"
            type='submit'>
             Save
            </Button>


</Stack>
	
</form>


        </div>
    )
}