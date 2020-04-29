import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { Container, Snackbar } from "@material-ui/core";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import {TWEETS_STORAGE} from "./utils/contants"

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE,JSON.stringify(allTweets));
    setReloadTweets(true);
  }

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false)
  }, [reloadTweets])

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
