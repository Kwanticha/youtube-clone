import axios from "axios";
export const BASE_URL="https://youtube-v31.p.rapidapi.com";
const options = {
    params:{
        maxResults:50,
    },
    headers: {
        "X-RapidAPI-Key" :"1a6747b919mshf679727a9d58db4p1c8172jsnbfab4135e8e2",
        "X-RapidAPI-Host" : "youtube-v31.p.rapidapi.com",
      },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}