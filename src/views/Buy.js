import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchAlbums } from "../services/album";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/cartSlice"

//import addToCart from "../redux/cartSlice"

const Buy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { count } = useSelector((state) => state.counter)

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
    if (songSelection.length > 1) {
      let cartItems = {
        songs: songSelection,
        album: album,
      };

      //ADD TO REDUX
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
          //ADD TO REDUX
          navigate("/cart");
        }
      });
    }
  };

  const addAlbumtoCart = () => {
    // let cartItems = {
    //   album: album,
    // };
    dispatch(increment())
   // navigate("/cart");
  };

  return (
    <Box>
      <Link to="/">Back</Link>
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
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Grid>
      <Stack container="true" sx={{ px: 6, paddingTop: 0 }}>
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
            {album.songs?.map((song, i) => (
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
          //margin
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
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Buy;
