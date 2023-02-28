import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const VideoComment = ({
    
        video: {
          id: { videoId },
          snippet,
        },
      }) => {
        return (
          <Card
            sx={{
              width: { xs: "100%", sm: "358px", md: "320px" },
              boxShadow: "none",
              borderRadius: 0,
            }}
          />
            
            
       
                
        );
      };
export default VideoComment