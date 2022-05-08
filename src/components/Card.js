import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function MediaCard({album}) {
  return (
    <Card sx={{ width: 300, height: 400, margin: '.7rem' }}>
      <Link to={`/details/${album.id}`}>
      <CardMedia
        component="img"
        height="300"
        image={album.img}
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
        {album.name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
        {album.artists[0].name}
        </Typography>
      </CardContent>
    </Card>
  );
}
