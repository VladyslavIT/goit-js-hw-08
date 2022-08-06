import Player from "@vimeo/player";

import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

const saveTime = (data) => {
  return localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on("timeupdate", throttle(saveTime, 1000));

const unpauseVideo = () => {
  return player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
};

unpauseVideo();
