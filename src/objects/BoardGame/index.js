import CardGame from "../../components/CardGame/index.js";

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  console.log($htmlBoardGame);

  return $htmlBoardGame;
}

export default BoardGame;
