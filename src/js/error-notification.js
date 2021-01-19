import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { error } from "@pnotify/core";

function runErrorNotification() {
  error({
    text: "Please enter another query! No matches found.",
    delay: 1000,
  });
}

export default runErrorNotification;
