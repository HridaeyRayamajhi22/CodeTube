import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  const hasChannelData = channelDetail?.snippet?.thumbnails?.high?.url;
  
  return (
    <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    }}
  >

      {hasChannelData ? (
        <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: 'none', width: '100%', height: '100%' }}>
          <CardContent 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: '#fff',
              padding: '16px',
              height: '100%',
            }}
          >
            {/* Channel Thumbnail */}
            <CardMedia
              component="img"
              src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                mb: 2,
                border: '1px solid #e3e3e3',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
            
            {/* Channel Name */}
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: '14px', 
                lineHeight: '1.4',
              }}
            >
              {channelDetail?.snippet?.title}{' '}
              <CheckCircleIcon sx={{ fontSize: '14px', color: '#3ea6ff', ml: '5px' }} />
            </Typography>
            
            {/* Subscriber Count */}
            {channelDetail?.statistics?.subscriberCount && (
              <Typography 
                sx={{ 
                  fontSize: '13px', 
                  fontWeight: 500, 
                  color: 'gray', 
                  mt: 1,
                }}
              >
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      ) : (
        <Typography sx={{ color: '#fff', textAlign: 'center', fontSize: '14px' }}>
          No Channel Data Available
        </Typography>
      )}

      {/* Handle No Videos */}
      {channelDetail?.statistics?.videoCount === '0' && (
        <Typography sx={{ color: 'gray', fontSize: '12px', mt: 1 }}>
          No Videos Available
        </Typography>
      )}
    </Box>
  );
};

export default ChannelCard;

