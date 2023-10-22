import { CardMedia, Paper, TableContainer } from "@mui/material";
import React from "react"
import { useEffect, useState } from "react"
import {Table, TableHead,TableRow,TableCell, TableBody} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import {Card, CardContent} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


export default function Home() {

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

          
            <h1 className="font-pages">Home</h1>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {APIData.map((staff) => (
              <Grid item xs={3}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={staff.avatar}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <a href={`detail/${staff.id}`}>{staff.name}</a>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {staff.address}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {staff.age}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button href={`detail/${staff.id}`} size="small">Detail</Button>
      </CardActions>
    </Card>
  </Grid>


            ))}
            
            </Grid>

           
            
        </div>
    )
}