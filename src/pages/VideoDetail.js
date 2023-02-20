import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
      (data) => {
        //console.log(data);
        setVideoDetail(data.items[0]);
      }
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
    .then((data)=>{
      console.log(data)
    setVideos(data.items)
    })
  }, [videoId]);
  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`}
          className="react-player"
          controls />
          <Typography color="#fff" variant="h5" fontweight="bold" p={2}>
            {title}
          </Typography>
          <Stack
            direction="row "
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1 , md:'h6" }} color="#fff">
                
                {channelTitle}
                
                <CheckCircleIcon
                
                sx={{fontSize:"12px", color: "gary", ml: "5px" }}
                />
              
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
            <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString()}views
            </Typography>
             <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString()}likes
            </Typography>
            </Stack>
          </Stack>
        </Box>
         </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
         <Videos videos ={videos} direction="column"/>

  
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
