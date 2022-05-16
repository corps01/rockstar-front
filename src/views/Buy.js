import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAlbums } from "../services/album";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Checkbox, IconButton, FormControlLabel,FormGroup, Button, Grid, Stack, Typography, Box } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import Swal from "sweetalert2";

const Buy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const setSong = (e, selectedSong) => {
    if (!e) {
      setSongSelection(
        songSelection.filter(
          (selectedSongs) => selectedSongs.id !== selectedSong.id
        )
      );
      return;
    }
    setSongSelection([selectedSong, ...songSelection]);
  };

  const addSongsToCart = () => {
    if (songSelection.length >= 1) {
      let cartItems = [];
      songSelection.forEach((song) => cartItems.push({song, album, price:.99}))
      dispatch(addToCart(cartItems));
      navigate("/cart");
    } else {
      Swal.fire({
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Purchase whole album",
        title: "You did not select any tracks",
        text: "Do you wish to purchase the whole album?",
      }).then((result) => {
        if (result.isConfirmed) {
          addAlbumtoCart();
        }
      });
    }
  };

  const addAlbumtoCart = () => {
    let cartItems = [{
      album: album,
      price: album.price
    }];
    dispatch(addToCart(cartItems));
    navigate("/cart");
  };

  return (
    <Box container sx={{ p: 3 }}>
      <IconButton onClick={() => navigate(-1)}><ArrowBackIosRoundedIcon/></IconButton>
      <Grid container sx={{ p: 6 }}>
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
          alt="album img"
          src={album.img}
        />
        <Box sx={{ p: 6 }}>
          <Typography variant="h3">{album.name}</Typography>
          <Typography>
            Artist: {album.artists?.map((artist) => artist.name)}
          </Typography>
          <Typography>Launch Date: {album.launch_date}</Typography>
          <Typography>Genre: {album.genre}</Typography>
          <Typography>Price: {album.price}</Typography>
          <Button
            sx={{ marginTop: 2, borderRadius: "2rem" }}
            variant="contained"
            size="large"
            onClick={addAlbumtoCart}
          >
            Buy Complete Album
            <ShoppingCartRoundedIcon sx={{ paddingLeft: 1}}/>
          </Button>
        </Box>
      </Grid>
      <Stack container="true" sx={{ px: 6, paddingTop: 0 }}>
        <Typography variant="h4">{album.name}</Typography>
        <table>
          <tbody>
            <tr>
              <th>Song id</th>
              <th>Song</th>
              <th>Preview</th>
              <th>Time</th>
              <th>Buy</th>
            </tr>
            {album.songs?.map((song, i) => (
              <tr key={i}>
                <td>{song.id}</td>
                <td>{song.name}</td>
                <td><PlayCircleFilledRoundedIcon/></td>
                <td>{song.song_length}</td>
                <td>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => setSong(e.target.checked, song)}
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
      <Grid sx={{ px: 7, paddingTop: 4 }} justify="flex-end">
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
            onClick={addSongsToCart}
          >
            Add Songs to Cart
            <ShoppingCartRoundedIcon sx={{ paddingLeft: 1}}/>
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Buy;
