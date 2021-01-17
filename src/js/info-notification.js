import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { info } from "@pnotify/core";

function runInfoNotification() {
  info({
    text: "Too many matches found. Please enter a more specific query!",
    delay: 1000,
  });
}

export default runInfoNotification;
