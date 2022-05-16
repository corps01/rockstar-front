import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Box } from "@mui/material";
import { useSelector} from "react-redux";

const Player = () => {
    const currentSong = useSelector((state) => state.player.currentSong);

    const styles = {
        Box: {
            width: "100%",
            position: 'sticky',
            bottom: 0,
            backgroundColor: 'white'
        }
      };
    
  return (
      <Box style={styles.Box} >
      <AudioPlayer src={currentSong}/>
      </Box>
  );
};

export default Player;
