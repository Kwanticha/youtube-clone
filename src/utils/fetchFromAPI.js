import axios from "axios";
export const BASE_URL="https://youtube-v31.p.rapidapi.com";
const options = {
    params:{
        maxResults:50,
    },
    headers: {
        //1a6747b919mshf679727a9d58db4p1c8172jsnbfab4135e8e2
       // a3325e710amsh08eed0f23d7b392p1b9516jsn6683b097a56c
       'X-RapidAPI-Key': '12abf7f3c2mshf582e3a6bb3954ep15d035jsn395fe3b8c113',
       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}