import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbums } from "../services/album";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Table from "../components/Table";

const Buy = () => {
  const [album, setAlbum] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getAlbum() {
      const data = await fetchAlbums(id);
      setAlbum(data);
    }
    getAlbum();
  }, []);

  const [songSelection, setSongSelection] = useState([]);
  const setSong = (e, song_id) => {
    if (!e) {
      setSongSelection(songSelection.filter((id) => id !== song_id));
      return;
    }
    setSongSelection([song_id, ...songSelection]);
  };

  const addSongsToCart = () =>{
    console.log()
  }


  console.log(album)

  return (
    <Box>
      <Link to="/">Back</Link>
      <Grid container sx={{ p:6}}>
        <Box
          component="img"
          sx={{
            height: 300,
            width: 300,
            maxHeight: { xs: 300 },
            maxWidth: { xs: 300 },
            boxShadow:
              "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
          }}
          alt="The house from the offer."
          src={album.img}
        />
        <Box sx={{ p: 6 }}>
          <Typography variant="h3">{album.name}</Typography>
          <Typography>Artist: {album.artists?.[0]?.name}</Typography>
          <Typography>Launch Date: {album.launch_date}</Typography>
          <Typography>Genre: {album.genre}</Typography>
          <Typography>Price: {album.price}</Typography>
          <Button
            sx={{ marginTop: 2, borderRadius: "2rem" }}
            variant="contained"
            size="large"
          >
            Buy Complete Album
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Grid>
      <Stack container="true" sx={{ px: 6, paddingTop:0  }}>
        <Typography variant="h4">{album.name}</Typography>
        <table>
          <tbody>
            <tr>
              <th>Song Id</th>
              <th>Song</th>
              <th> {"|>"} </th>
              <th>Time</th>
              <th>Buy</th>
            </tr>
            {album.songs?.map((song,i) => (
              <tr key={i}>
                <td>{song.id}</td>
                <td>{song.name}</td>
                <td>{"play"}</td>
                <td>{song.song_length}</td>
                <td>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => setSong(e.target.checked, song.id, song.name)}
                        ></Checkbox>
                      }
                      label="$0.99"
                    />
                  </FormGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Stack>
      <Grid sx={{ px: 7, paddingTop:4 }} justify="flex-end">
        <Box
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={addSongsToCart}>
            Add Songs to Cart
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Buy;
