import { useEffect, useState } from "react";
import MediaCard from "../components/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { fetchAlbums } from "../services/album";

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbums() {
      const data = await fetchAlbums();
      setAlbums(data);
    }
    getAlbums();
  }, []);

  return (
    <Box container justifyContent="center">
      <h1>Music</h1>
      <Grid container justifyContent="center">
        {albums.map((album, index) =>
          album ? <MediaCard key={index} album={album} /> : <></>
        )}
      </Grid>
    </Box>
  );
};

export default Home;
