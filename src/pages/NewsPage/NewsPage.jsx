import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { news } from 'redux/news/news-oparation';
import { getIsLoading, getListOfNews } from 'redux/news/news-selector';
import { resetNew } from 'redux/news/news-slice';

export default function NewsPage() {
  const [numberOfPage, setNumberOfPage] = useState(1);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const listOfNews = useSelector(getListOfNews);

  useEffect(() => {
    dispatch(news(numberOfPage));
  }, [dispatch, numberOfPage]);

  const handleClick = () => {
    setNumberOfPage(s => s + 1);
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {listOfNews.map(item => (
            <Grid item key={item.url} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.urlToImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            // <li key={item.title} style={{ width: '300px' }}>
            //   <p>Author: {item.author}</p>
            //   <p>Date: {item.publishedAt}</p>
            //   <p>Description: {item.description}</p>
            //   <img src={item.urlToImage} alt="smth" width="300" />
            // </li>
          ))}
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          disabled={isLoading}
          onClick={handleClick}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Get more'}
        </Button>
      </Container>
    </>
  );
}
