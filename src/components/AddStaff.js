
import { useFormik } from "formik";
import {TextField,Button} from "@mui/material";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from "@mui/material/Stack";
export default function AddStaff() {

    const formik = useFormik({
        initialValues:{
            name:"",
            address:"",
            age:"",
            avatar:"",
            createdAt:"",
    },
    });

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
            <TextField
	label="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
             <TextField
              label="age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />

<TextField
              label="avatar"
              name="avatar"
              value={formik.values.avatar}
              onChange={formik.handleChange}
            />


<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
         
            <Button variant="contained"
            type='submit'>
             Save
            </Button>


</Stack>
	
</form>


        </div>
    )
}