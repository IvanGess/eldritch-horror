import cards from './green';

const greenCardsData = [
  {
    id: '1',
    cardFace: cards.green1,
    type: 'easy',
  },
  {
    id: '2',
    cardFace: cards.green2,
    type: 'hard',
  },
  {
    id: '3',
    cardFace: cards.green3,
    type: 'hard',
  },
  {
    id: '4',
    cardFace: cards.green4,
    type: 'hard',
  },
  {
    id: '5',
    cardFace: cards.green5,
    type: 'hard',
  },
  {
    id: '6',
    cardFace: cards.green6,
    type: 'hard',
  },
  {
    id: '7',
    cardFace: cards.green7,
    type: 'normal',
  },
  {
    id: '8',
    cardFace: cards.green8,
    type: 'normal',
  },
  {
    id: '9',
    cardFace: cards.green9,
    type: 'normal',
  },
  {
    id: '10',
    cardFace: cards.green10,
    type: 'normal',
  },
  {
    id: '11',
    cardFace: cards.green11,
    type: 'normal',
  },
  {
    id: '12',
    cardFace: cards.green12,
    type: 'easy',
  },
  {
    id: '13',
    cardFace: cards.green13,
    type: 'normal',
  },
  {
    id: '14',
    cardFace: cards.green14,
    type: 'normal',
  },
  {
    id: '15',
    cardFace: cards.green15,
    type: 'normal',
  },
  {
    id: '16',
    cardFace: cards.green16,
    type: 'easy',
  },
  {
    id: '17',
    cardFace: cards.green17,
    type: 'easy',
  },
  {
    id: '18',
    cardFace: cards.green18,
    type: 'easy',
  },
].map((x) => ({ ...x, color: 'green' }));

export default greenCardsData;
