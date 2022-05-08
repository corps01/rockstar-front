import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbums } from "../services/album";
import axios from "axios"

const Details = () => {

    const [album, setAlbum] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      async function getAlbum() {
        const data = await fetchAlbums(id);
        setAlbum(data);
      }
      getAlbum();
    }, []); 

    return ( 
    <Box>
        <Link to="/">Back</Link>
       <Grid container sx = {{p:6}}>
            <Box
        component="img"
        sx={{
          height: 400,
          width: 400,
          maxHeight: { xs: 400 },
          maxWidth: { xs: 400 },
          boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)"
        }}
        alt="The house from the offer."
        src={album.img}
      />
            <Box sx = {{p:6}}>
                <Typography variant="h3">Get Lucky</Typography>
                <Typography>Albulm: {album.name}</Typography>
                <Typography>Artist: {album.artists?.[0]?.name}</Typography>
                <Typography>Lenght: 3:12</Typography>
            </Box>
            <Box sx = {{p:6}}>
                <Typography>Price: {album.price}</Typography>
                <Typography>Genre: {album.genre}</Typography>
                <Button sx={{marginTop: 2}}variant="contained" size="large">
          Buy
        </Button>
            </Box>
        </Grid>
    </Box> );
}
 
export default Details;