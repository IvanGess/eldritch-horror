import cards from './blue';

const blueCardsData = [
  {
    id: '1',
    cardFace: cards.blue1,
    type: 'hard',
  },
  {
    id: '2',
    cardFace: cards.blue2,
    type: 'hard',
  },
  {
    id: '3',
    cardFace: cards.blue3,
    type: 'easy',
  },
  {
    id: '4',
    cardFace: cards.blue4,
    type: 'easy',
  },
  {
    id: '5',
    cardFace: cards.blue5,
    type: 'easy',
  },
  {
    id: '6',
    cardFace: cards.blue6,
    type: 'hard',
  },
  {
    id: '7',
    cardFace: cards.blue7,
    type: 'normal',
  },
  {
    id: '8',
    cardFace: cards.blue8,
    type: 'hard',
  },
  {
    id: '9',
    cardFace: cards.blue9,
    type: 'normal',
  },
  {
    id: '10',
    cardFace: cards.blue10,
    type: 'easy',
  },
  {
    id: '11',
    cardFace: cards.blue11,
    type: 'normal',
  },
  {
    id: '12',
    cardFace: cards.blue12,
    type: 'normal',
  },
].map((x) => ({ ...x, color: 'blue' }));

export default blueCardsData;
