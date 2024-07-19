import React from 'react';
import { Avatar } from '@mui/material';

interface ProfileImageProps {
  imageUrl: string;
  size?: number; // Optional size prop to control the size of the avatar
  alt?: string; // Optional alt text for accessibility
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageUrl,
  size = 40,
  alt = 'Profile Image',
}) => {
  return (
    <Avatar
      src={imageUrl}
      alt={alt}
      sx={{ width: size, height: size, border: '2px solid #fff' }} // Adjust styling as needed
    />
  );
};

export default ProfileImage;
