import * as React from 'react';

//Importing Material UI Components and Icons
import { Grid, Typography, CardMedia, CardContent, Card, CardActionArea, CardActions, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Cards(props) {
  return (
    <>
    {props.details.map( (data) =>(
      <Card sx={{ width: 271, height: 310, margin: '1vh', maxWidth: 265, maxHeight: 310 }} key={data.id}>
        <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={data.image}
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Grid container direction="row" spacing={6}>
              <Grid item xs={8}>
                <Typography gutterBottom variant="h6" component="div" className="price" align="left">
                  ${data.price}/month
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderOutlinedIcon sx={{fontSize: 'sm'}} />
                  </IconButton>
                </CardActions>
              </Grid>
            </Grid>
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