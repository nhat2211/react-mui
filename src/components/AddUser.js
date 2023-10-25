import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";


export default function AddUser() {

    return(

        <div>

<Grid container spacing={2}>
  <Grid item xs={12}>
   
    <form>
                <TextField id="name" label="name">

                </TextField>

                <TextField id="username" label="username">

                 </TextField>

                 <Button variant="contained">Add User</Button>

            </form>

    
  </Grid>
 
</Grid>



        </div>
        
            
       
    )
}