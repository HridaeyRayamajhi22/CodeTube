import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle, thumbnails }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" p={2} sx={{ backgroundColor: "#121212", color: "#fff" }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        {/* Video Player Section */}
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px", borderRadius: "12px", overflow: "hidden" }}>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`} 
              className="react-player" 
              controls 
              width="100%" 
              height="500px"
            />
            <Typography variant="h5" fontWeight="bold" p={2} sx={{ fontSize: { xs: "20px", md: "24px" } }}>
              {title}
            </Typography>

            {/* Channel Details */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" py={1} px={2}>
              <Stack direction="row" alignItems="center" gap={2}>
                <Avatar src={thumbnails?.default?.url} alt={channelTitle} />
                <Link to={`/channel/${channelId}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", alignItems: "center" }}>
                    {channelTitle}
                    <CheckCircleIcon sx={{ fontSize: 16, color: "#3ea6ff", ml: "6px" }} />
                  </Typography>
                </Link>
              </Stack>

              {/* Video Stats */}
              <Stack direction="row" gap={3} alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7, fontSize: "14px" }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7, fontSize: "14px" }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Related Videos Sidebar */}
        <Box 
          width={{ xs: "100%", md: "400px" }} 
          sx={{ 
            background: "#1e1e1e", 
            borderRadius: "12px", 
            p: 2, 
            height: "auto", 
            maxHeight: "80vh", 
            overflowY: "auto" 
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Related Videos
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
