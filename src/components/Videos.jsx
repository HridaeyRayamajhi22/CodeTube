import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  if (!videos || !Array.isArray(videos) || videos.length === 0) {
    return (
      <Box sx={{ color: "#fff", textAlign: "center", fontSize: "18px", mt: 5 }}>
        No videos available...
      </Box>
    );
  }

  return (
    <Stack 
      direction="row" 
      flexWrap="wrap" 
      justifyContent="center" 
      gap={2}
      sx={{ padding: "16px", width: "100%" }}
    >
      {videos.map((item, idx) => (
        <Box 
          key={idx} 
          sx={{
            width: { xs: "100%", sm: "48%", md: "32%", lg: "23%" }, 
            minWidth: "290px",
            height: "370px",  // 🔥 REDUCED HEIGHT
            display: "flex",
            justifyContent: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.02)" }
          }}
        >
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;


// import { Grid, Box, Typography } from "@mui/material";
// import { VideoCard, ChannelCard } from "./";

// const Videos = ({ videos }) => {
//   if (!videos || !Array.isArray(videos) || videos.length === 0) {
//     return (
//       <Typography 
//         color="white" 
//         textAlign="center" 
//         sx={{ fontSize: "22px", mt: 5, fontWeight: "bold", opacity: 0.8 }}
//       >
//         No videos available...
//       </Typography>
//     );
//   }

//   return (
//     <Box sx={{ width: "100%", padding: "24px" }}>
//       <Grid 
//         container 
//         spacing={3} 
//         justifyContent="center" 
//         alignItems="stretch"
//       >
//         {videos.map((item, idx) => {
//           if (!item?.id) return null;

//           return (
//             <Grid 
//               key={idx} 
//               item 
//               xs={12} sm={6} md={4} lg={3} 
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "stretch",
//                 minHeight: "300px",
//                 maxHeight: "380px",
//                 flexGrow: 1,
//                 transition: "transform 0.3s ease-in-out",
//                 "&:hover": { transform: "scale(1.02)", boxShadow: "0px 8px 30px rgba(0,0,0,0.5)" },
//               }}
//             >
//               {item?.id?.videoId && <VideoCard video={item} />}
//               {item?.id?.channelId && <ChannelCard channelDetail={item} />}
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default Videos;
