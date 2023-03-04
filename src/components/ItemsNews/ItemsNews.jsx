import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

export default function ItemsNews({ item }) {
  const [isCardClicked, setIsCardClicked] = useState(true);

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };

  const typographyStyle = {
    textOverflow: isCardClicked ? 'ellipsis' : 'unset',
    whiteSpace: isCardClicked ? 'nowrap' : 'unset',
    overflow: isCardClicked ? 'hidden' : 'unset',
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="140"
            image={item.urlToImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={typographyStyle}
            >
              {item.title}
            </Typography>
            <Typography
              sx={typographyStyle}
              variant="body2"
              color="text.secondary"
            >
              <b>Description:</b> {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
