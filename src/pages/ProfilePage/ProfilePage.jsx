import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { picture } from 'redux/picture/picture-oparation';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getPictures } from 'redux/picture/picture-selector';
import { Container } from '@mui/system';

export default function PrifilePage() {
  const dispatch = useDispatch();
  const pictures = useSelector(getPictures);

  useEffect(() => {
    dispatch(picture({ value: 'sea', num: '1' }));
  }, [dispatch]);
  return (
    <Container>
      <ImageList xs={1} sm={2} md={4} rowHeight={'auto'}>
        {pictures.map(item => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.webformatURL}`}
              srcSet={`${item.webformatURL}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
