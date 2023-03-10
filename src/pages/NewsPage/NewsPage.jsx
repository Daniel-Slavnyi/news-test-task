import { Button, CircularProgress, Container, Grid } from '@mui/material';
import ItemsNews from 'components/ItemsNews/ItemsNews';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { news } from 'redux/news/news-oparation';
import { getIsLoading, getListOfNews } from 'redux/news/news-selector';

export default function NewsPage() {
  const [numberOfPage, setNumberOfPage] = useState(1);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const listOfNews = useSelector(getListOfNews);

  const handleClick = () => {
    setNumberOfPage(s => s + 1);
    dispatch(news(numberOfPage + 1));
  };

  return (
    <>
      <Container>
        <Grid container spacing={4} sx={{ mt: 1, mb: 2 }}>
          {listOfNews.map(item => (
            <ItemsNews key={item.id} item={item} />
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
