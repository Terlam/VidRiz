import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  reviewSnippet: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  imageUrl,
  rating,
  reviewSnippet,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <Card sx={{ maxWidth: 400, minWidth: 50, margin: 2, color: 'primary' }}>
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <IconButton onClick={toggleFavorite}>
        {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Rating value={rating / 2} readOnly />
        <Typography variant="body2" color="text.secondary">
          {reviewSnippet}
        </Typography>
      </CardContent>
    </Card>
  );
};
