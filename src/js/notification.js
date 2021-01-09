import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core";

function runNotification() {
  error({
    text: "Too many matches found. Please enter a more specific query!",
    delay: 2500,
  });
}

export default runNotification;
