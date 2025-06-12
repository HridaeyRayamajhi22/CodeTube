import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* Banner Section */}
      <Box sx={{ height: "300px", position: "relative" }}>
        <Box
          sx={{
            height: "100%",
            background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%)",
            zIndex: 10,
          }}
        />
        {/* Centered Channel Card */}
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ChannelCard channelDetail={channelDetail} />
        </Box>
      </Box>

      {/* Video Section */}
      <Box p={2} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" sx={{ color: "#fff", mb: 2, textAlign: "center" }}>
          {channelDetail?.snippet?.title} Videos
        </Typography>
        
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
          sx={{
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Videos videos={videos} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
