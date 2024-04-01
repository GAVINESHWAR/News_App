import React, { useEffect, useState } from "react";
import getNews from "../Service/getNews";
import moment from "moment";
import alanBtn from "@alan-ai/alan-sdk-web";

export default function NewsData() {
  const [newsData, setNewsData] = useState([]);

  const alankey = `acaafcd5954297446d1a7be840ebfc992e956eca572e1d8b807a3e2338fdd0dc/stage`;

  const [selectOption, setSelectionOption] = useState("");
  const getAllNews = async () => {
    let data = await getNews(selectOption);
    setNewsData(data.data.articles);
  };
  // json file assigned to nesData

  const selectCategory = (event) => {
    // let data = await getNews();
    setSelectionOption(event.target.value);
  };

  //  useEffect(() => {
  //    alanBtn({
  //      key: alankey,
  //      onCommand: (commandData) => {
  //         setNewsData(commandData.data)
  //      }
  //    });
  //  }, []);

  useEffect(() => {
    getAllNews();
  }, [selectOption]);

  console.log(newsData?.data?.articles);
  return (
    <div className="main">
      <div className="select">
        <h1 className="head">News Website</h1>
        <div className="category">
          <label for="category">Choose New category:</label>

          <select
            className="select-box"
            name="category"
            id="category"
            onChange={selectCategory}
            value={selectOption}
          >
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="bussiness">Business</option>
            <option value="sports">Sports</option>
            <option value="politics">Politics</option>
          </select>
        </div>
      </div>
      <div className="grid-main">
        {newsData?.map((news) => {
          return (
            <div className="grid-child">
              <h6 className="news-title">{news?.title}</h6>
              <img className="news-image" src={news?.urlToImage} />
              <p className="news-content">{news?.content}</p>

              <div className="space-between">
                <p className="news-author">
                  Author:{" "}
                  {news?.author ? news?.author : "Author name not available"}
                </p>
                <p className="news-date">
                  Date : {moment(news?.publishedAt).format("LL")}
                </p>
              </div>
              <a href={news?.url} target="_blank">
                Read More..
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
