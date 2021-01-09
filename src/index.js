import "./styles.css";
import references from "./refs/references.js";
import onInputSearch from "./js/on-input-search.js";
import { debounce } from "debounce";

references.search.addEventListener("input", debounce(onInputSearch, 800));
