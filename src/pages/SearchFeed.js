import React, { useState, useEffect } from "react";
import { Typography, Box ,Stack} from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { SideBar, Videos } from "../components";

const SearchFeed = () => {
  const [selectedCategory, setSeletedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams(); //{searchTerm } เพราะสมารถใส่ได้หลายค่าเลยใส่ {}
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]); //[]ตัวแปร่ที่เราคอยสังเกตุ

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "95vh" },
          borderRight: "1px solid #3e3e3e",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSeletedCategory={setSeletedCategory}
        />
      </Box>
      <Box p={2} minHeight="95vh">
        <Typography
          variant="h4"
          fontWeight={900}
          color="white"
          mb={3}
          ml={{ sm: "100px" }}
        >
          Search Result for{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos.
        </Typography>

        <Box display="flex">
          <Box sx={{ mr: { sm: "100px" } }}>{<Videos videos={videos} />}</Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchFeed;
