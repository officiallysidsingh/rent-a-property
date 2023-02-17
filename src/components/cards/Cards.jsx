import * as React from 'react';

//Importing Material UI Components and Icons
import { Typography, CardMedia, CardContent, Card, CardActionArea, CardActions, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Cards(props) {
  return (
    <>
    {props.details.map( (data) =>(
      <Card sx={{ maxWidth: 345 }} key={data.id}>
        <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" className="price" align="left">
              ${data.price}
            </Typography>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </CardActions>
            <Typography gutterBottom variant="h5" component="div" className="name">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.location}
            </Typography>
          </CardContent>
      </Card>
      ))}
    </>
  );
}