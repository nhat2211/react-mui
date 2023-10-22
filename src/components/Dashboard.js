import React from "react"
import { useEffect, useState } from "react"
import {Table, TableHead,TableRow,TableCell, TableBody, IconButton} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { Paper, TableContainer } from "@mui/material";

export default function Dashboard() {

    const[APIData, setAPIData] = useState([]);
    const getStaffsUrl = 'https://6530c5486c756603295f0271.mockapi.io/api/v1/staffs';

    useEffect(() => {
        fetch(getStaffsUrl).then(
            response => {
                if(!response.ok) {
                    throw new Error(`HTTP status: ${response.status}`);
                }
                return response.json();
            })
            .then(data=>{setAPIData(data.sort((a,b)=>{return a.age - b.age}))})
            .catch(error=>console.log(error.message));
        
    },[])


    return(

        <div>
            <h1 className="font-pages">Dashboard</h1>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="left">Created At</TableCell>
            <TableCell align="left">Avatar</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {APIData.map((staff) => (
            <TableRow
              key={staff.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell component="th" scope="row">
                {staff.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {staff.name}
              </TableCell>
              <TableCell align="left">{staff.createdAt}</TableCell>
              <TableCell align="right">
            
                <Avatar align="left" alt="Remy Sharp" src={staff.avatar} />
                
                </TableCell>
              <TableCell align="left">{staff.age}</TableCell>
              <TableCell align="left">{staff.address}</TableCell>
              <TableCell align="left">
              <Stack direction="row" spacing={3}>
              <IconButton><Icon sx={{ color: green[500] }}>add_circle</Icon></IconButton>
              <IconButton><Icon sx={{ color: green[500] }}>update_circle</Icon></IconButton>
              <IconButton><Icon sx={{ color: green[500] }}>delete_circle</Icon></IconButton>


              </Stack>
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    )
}