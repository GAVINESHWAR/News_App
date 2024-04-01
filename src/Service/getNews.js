import axios from "axios"
// import React from "react"

export default function getNews(category){
    const API_Key = `bae04d97470e4ac0865186e7e5d605c6`
    const API_Endpoint =
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
    
      

  return axios.get(`${API_Endpoint}&apikey=${API_Key}`);
}