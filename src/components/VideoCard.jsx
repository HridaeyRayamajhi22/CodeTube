import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent, Tooltip } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card 
      sx={{
        flex: "1 1 300px", // Flexible width (min: 300px)
        maxWidth: "350px", // Prevents it from becoming too big
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)", boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" },
        backgroundColor: "#121212",
        overflow: "hidden",
      }}
    >
      {/* Video Thumbnail */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ display: "block", position: "relative" }}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: "300px",
            height: "300px", // Maintains aspect ratio
            objectFit: "cover",
          }}
        />
      </Link>

      {/* Video Info */}
      <CardContent sx={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "12px", minHeight: "80px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ textDecoration: "none" }}>
          <Tooltip title={snippet?.title} arrow>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold" 
              sx={{ color: "#fff", fontSize: "14px", lineHeight: "1.4", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {snippet?.title || demoVideoTitle}
            </Typography>
          </Tooltip>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: "none" }}>
          <Typography 
            variant="subtitle2" 
            fontWeight="bold" 
            sx={{ display: "flex", alignItems: "center", color: "#aaa", fontSize: "12px", mt: 1 }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: "#3ea6ff", ml: "6px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
