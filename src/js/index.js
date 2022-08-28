// eslint-disable-next-line import/extensions
import difficulties from '../data/difficulties.js';
// eslint-disable-next-line import/extensions
import ancientsData from '../data/ancients.js';
import background from '../assets/mythicCardBackground.png';
import '../css/style.css';
// eslint-disable-next-line import/extensions
import greenCardsData from '../assets/MythicCards/greenCards.js';
// eslint-disable-next-line import/extensions
import brownCardsData from '../assets/MythicCards/brownCards.js';
// eslint-disable-next-line import/extensions
import blueCardsData from '../assets/MythicCards/blueCards.js';

const difficultyConfig = {
  veryEasy: {
    types: ['easy', 'normal'],
    order: ['easy', 'normal'],
  },
  easy: {
    types: ['easy', 'normal'],
    order: [],
  },
  normal: {
    types: ['easy', 'normal', 'hard'],
    order: [],
  },
  hard: {
    types: ['normal', 'hard'],
    order: [],
  },
  veryHard: {
    types: ['normal', 'hard'],
    order: ['hard', 'normal'],
  },
};

// eslint-disable-next-line no-use-before-define
window.addEventListener('load', initPage);

const selectedLanguage = 'en';
let selectedGameDifficulty = '';
let selectedAncient = '';

function initPage() {
  // eslint-disable-next-line no-use-before-define
  loadGame();
}
function loadPage(block) {
  block.classList.add('for-hid');
  block.classList.remove('hidden');
}
function hidePage(block) {
  block.classList.add('hidden');
}

function loadGame() {
  const startBlock = document.querySelector('.start-button');
  // eslint-disable-next-line no-use-before-define
  startBlock.addEventListener('click', showChoseBlock);
}

function showChoseBlock() {
  const startBlock = document.querySelector('.start-box');
  const choseBlock = document.querySelector('.chose-block');
  hidePage(startBlock);
  loadPage(choseBlock);
  // eslint-disable-next-line no-use-before-define
  showAncients();
  // eslint-disable-next-line no-use-before-define
  showDifficulties();
  // eslint-disable-next-line no-use-before-define
  createAncientsClickListener();
  // eslint-disable-next-line no-use-before-define
  createDifficultyClickListener();
  // eslint-disable-next-line no-use-before-define
  createShuffleDeckClickListener();
}

function showAncients() {
  const ancientBlock = document.querySelector('.ancients-block');
  ancientsData.forEach((ancient) => {
    const ancientElement = document.createElement('div');
    ancientElement.style.background = `url('${ancient.cardFace}')`;
    ancientElement.style.backgroundSize = 'contain';
    ancientElement.style.backgroundPosition = 'center center';
    ancientElement.setAttribute('name', `${ancient.name}`);
    ancientElement.classList.add('ancient-element');
    ancientBlock.append(ancientElement);
  });
}

function createAncientsClickListener() {
  const ancientElements = document.querySelectorAll('.ancient-element');
  // eslint-disable-next-line no-use-before-define
  Array.from(ancientElements).map((x) => x.addEventListener('click', getAncient));
}

function getAncient(e) {
  const currentAncient = e.currentTarget;
  const activeAncient = document.querySelector('.active-ancient');
  if (activeAncient !== null) {
    activeAncient.classList.remove('active-ancient');
  }
  currentAncient.classList.add('active-ancient');
  selectedAncient = currentAncient.getAttribute('name');
}

function showDifficulties() {
  const difficultiesBlock = document.querySelector('.difficulties-block');
  difficulties.forEach((difficulty) => {
    const difficultyElement = document.createElement('div');
    difficultyElement.textContent = `${difficulty[selectedLanguage]}`;
    difficultyElement.setAttribute('name', `${difficulty.id}`);
    difficultyElement.classList.add('difficulty-element');
    difficultiesBlock.append(difficultyElement);
  });
}

function createDifficultyClickListener() {
  const difficultyElements = document.querySelectorAll('.difficulty-element');
  // eslint-disable-next-line no-use-before-define
  Array.from(difficultyElements).map((x) => x.addEventListener('click', getDifficulty));
}

function getDifficulty(e) {
  const currentDifficulty = e.currentTarget;
  const activeDifficulty = document.querySelector('.active-difficulty');
  if (activeDifficulty !== null) {
    activeDifficulty.classList.remove('active-difficulty');
  }
  currentDifficulty.classList.add('active-difficulty');
  selectedGameDifficulty = currentDifficulty.getAttribute('name');
}

function createShuffleDeckClickListener() {
  const shuffleDeckElement = document.querySelector('.shuffle-button');
  // eslint-disable-next-line no-use-before-define
  shuffleDeckElement.addEventListener('click', startGame);
}

function getCountOfCards(config, stage, color) {
  return config[stage].filter((x) => x.color === color).length;
}

function getCardsCountByStages(config) {
  const cardsCount = {
    firstStage: {
      greenCards: getCountOfCards(config, 'firstStage', 'green'),
      blueCards: getCountOfCards(config, 'firstStage', 'blue'),
      brownCards: getCountOfCards(config, 'firstStage', 'brown'),
    },
    secondStage: {
      greenCards: getCountOfCards(config, 'secondStage', 'green'),
      blueCards: getCountOfCards(config, 'secondStage', 'blue'),
      brownCards: getCountOfCards(config, 'secondStage', 'brown'),
    },
    thirdStage: {
      greenCards: getCountOfCards(config, 'thirdStage', 'green'),
      blueCards: getCountOfCards(config, 'thirdStage', 'blue'),
      brownCards: getCountOfCards(config, 'thirdStage', 'brown'),
    },
  };

  return cardsCount;
}

function showChosenAncient(ancient) {
  const ancientBlock = document.querySelector('.selected-ancient');
  ancientBlock.style.background = `url('${ancient[0].cardFace}')`;
  ancientBlock.style.backgroundSize = 'contain';
  ancientBlock.style.backgroundPosition = 'center center';
}

function showDifficulty() {
  const difficulty = difficulties.filter((x) => x.id === selectedGameDifficulty);
  const difficultyBlock = document.querySelector('.selected-difficulty');
  difficultyBlock.textContent = difficulty[0].en;
}

function startGame() {
  const gameBlock = document.querySelector('.game-block');
  const choseBlock = document.querySelector('.chose-block');
  hidePage(choseBlock);
  loadPage(gameBlock);

  // eslint-disable-next-line no-use-before-define
  const config = getConfig(selectedAncient);
  showChosenAncient(config);
  showDifficulty();

  // eslint-disable-next-line no-use-before-define
  const shuffledDeck = shuffleDeck();
  const cardsCounter = getCardsCountByStages(shuffledDeck);
  // eslint-disable-next-line no-use-before-define
  showUnflippedDeck(shuffledDeck);
  // eslint-disable-next-line no-use-before-define
  showCardsCountByStages(cardsCounter);
}

function showCardsCountByStages(cardsCount) {
  const firstStageGreenCardsCount = document.querySelector('.first-green-counter');
  const firstStageBrownCardsCount = document.querySelector('.first-brown-counter');
  const firstStageBlueCardsCount = document.querySelector('.first-blue-counter');
  const secondStageGreenCardsCount = document.querySelector('.second-green-counter');
  const secondStageBrownCardsCount = document.querySelector('.second-brown-counter');
  const secondStageBlueCardsCount = document.querySelector('.second-blue-counter');
  const thirdStageGreenCardsCount = document.querySelector('.third-green-counter');
  const thirdStageBrownCardsCount = document.querySelector('.third-brown-counter');
  const thirdStageBlueCardsCount = document.querySelector('.third-blue-counter');
  firstStageGreenCardsCount.textContent = cardsCount.firstStage.greenCards;
  firstStageBrownCardsCount.textContent = cardsCount.firstStage.brownCards;
  firstStageBlueCardsCount.textContent = cardsCount.firstStage.blueCards;
  secondStageGreenCardsCount.textContent = cardsCount.secondStage.greenCards;
  secondStageBrownCardsCount.textContent = cardsCount.secondStage.brownCards;
  secondStageBlueCardsCount.textContent = cardsCount.secondStage.blueCards;
  thirdStageGreenCardsCount.textContent = cardsCount.thirdStage.greenCards;
  thirdStageBrownCardsCount.textContent = cardsCount.thirdStage.brownCards;
  thirdStageBlueCardsCount.textContent = cardsCount.thirdStage.blueCards;
}

function getConfig(ancient) {
  const config = ancientsData.filter((x) => x.id === ancient);
  return config;
}

function showUnflippedDeck(deck) {
  const deckBlock = document.querySelector('.unflipped-deck');
  deckBlock.style.background = `url('${background}')`;
  // eslint-disable-next-line no-use-before-define
  createDeckClickListener(deck);
}

function createDeckClickListener(deck) {
  const deckBlock = document.querySelector('.unflipped-deck');
  // eslint-disable-next-line no-use-before-define
  deckBlock.addEventListener('click', (event) => showTopCardFromDeck(deck, event));
}

function spliceTopCard(deck) {
  let card = [];
  if (deck.firstStage.length) {
    card = deck.firstStage.splice(0, 1);
  } else if (deck.secondStage.length) {
    card = deck.secondStage.splice(0, 1);
  } else if (deck.thirdStage.length) {
    card = deck.thirdStage.splice(0, 1);
  }
  return card;
}

function showTopCardFromDeck(deck) {
  const flippedCard = spliceTopCard(deck);
  const currentCardsCount = getCardsCountByStages(deck);
  const flippedCardBlock = document.querySelector('.flipped-card');
  if (flippedCard.length) {
    flippedCardBlock.style.background = `url('${flippedCard[0].cardFace}')`;
  } else {
    flippedCardBlock.style.background = '';
  }
  showCardsCountByStages(currentCardsCount);
}

function shuffleDeck() {
  const config = getConfig(selectedAncient);
  const difficulty = difficultyConfig[selectedGameDifficulty];
  // eslint-disable-next-line no-use-before-define
  const finalDeck = createFinalDeck(config, difficulty);
  return finalDeck;
}

function getRemovedCardDifficulty(array) {
  const diff = ['easy', 'normal', 'hard'];
  let removedCardType = '';
  diff.forEach((i) => {
    if (!((array.types).includes(i))) {
      removedCardType = i;
    }
  });
  return removedCardType;
}

function shuffle(arr) {
  const copy = [...arr];
  copy.sort(() => Math.random() - 0.5);
  return copy;
}

function getSortedFinalDeckOfColor(deck, difficulty) {
  if (difficulty.order.length) {
    deck.sort((a, b) => a.type.indexOf('normal') - b.type.indexOf('normal'));
  } else {
    shuffle(deck);
  }
  return deck;
}

function createStage(decs, config) {
  let stage = [];
  const greenCards = decs[0].splice(0, config.greenCards);
  const brownCards = decs[1].splice(0, config.brownCards);
  const blueCards = decs[2].splice(0, config.blueCards);
  stage = [...greenCards, ...brownCards, ...blueCards];
  return shuffle(stage);
}

function getCardsByStage(deck, config) {
  const greenCard = deck[0];
  const brownCard = deck[1];
  const blueCard = deck[2];
  const firstStage = createStage([greenCard, brownCard, blueCard], config.firstStage);
  const secondStage = createStage([greenCard, brownCard, blueCard], config.secondStage);
  const thirdStage = createStage([greenCard, brownCard, blueCard], config.thirdStage);
  return { firstStage, secondStage, thirdStage };
}

function createFinalDeck(config, difficulty) {
  // eslint-disable-next-line max-len
  const [finalGreenDeck, finalBrownDeck, finalBlueDeck] = [greenCardsData, brownCardsData, blueCardsData]
    .map((element) => getSortedFinalDeckOfColor(element.filter((x) => x.type
      !== getRemovedCardDifficulty(difficulty)), difficulty));
  const finalDeck = getCardsByStage([finalGreenDeck, finalBrownDeck, finalBlueDeck], config[0]);
  return finalDeck;
}
