// $root = É a div que engloba todo a documentação do nosso HTML

import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(2);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
