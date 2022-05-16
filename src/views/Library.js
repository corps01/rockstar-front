import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAlbums } from "../services/album";
import { useDispatch } from "react-redux";
import { playSong } from "../redux/playerSlice";
import { IconButton, Grid, Stack, Typography, Box } from "@mui/material";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

const Library = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [album, setAlbum] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getAlbum() {
      const data = await fetchAlbums(1);
      setAlbum(data);
    }
    getAlbum();
  }, []);

  const songHandler = (songAudio) => {
    console.log(album.song?.audio)
    dispatch(playSong(songAudio));
  }

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
            Library Complete Album
        </Box>
      </Grid>
      <Stack container="true" sx={{ px: 6, paddingTop: 0 }}>
        <Typography variant="h4">{album.name}</Typography>
        <table>
          <tbody>
            <tr>
              <th>Play</th>
              <th>Song</th>
              <th>Time</th>
            </tr>
            {album.songs?.map((song, i) => (
              <tr key={i}>
                <td> <IconButton onClick={() => songHandler(song.audio)}> <PlayCircleFilledRoundedIcon/> </IconButton> </td>
                <td>{song.name}</td>
                <td>{song.song_length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Stack>
    </Box>
  );
};

export default Library;
