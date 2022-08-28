import cards from './brown';

const brownCardsData = [
  {
    id: '1',
    cardFace: cards.brown1,
    type: 'normal',
  },
  {
    id: '2',
    cardFace: cards.brown2,
    type: 'normal',
  },
  {
    id: '3',
    cardFace: cards.brown3,
    type: 'normal',
  },
  {
    id: '4',
    cardFace: cards.brown4,
    type: 'normal',
  },
  {
    id: '5',
    cardFace: cards.brown5,
    type: 'normal',
  },
  {
    id: '6',
    cardFace: cards.brown6,
    type: 'hard',
  },
  {
    id: '7',
    cardFace: cards.brown7,
    type: 'hard',
  },
  {
    id: '8',
    cardFace: cards.brown8,
    type: 'hard',
  },
  {
    id: '9',
    cardFace: cards.brown9,
    type: 'hard',
  },
  {
    id: '10',
    cardFace: cards.brown10,
    type: 'hard',
  },
  {
    id: '11',
    cardFace: cards.brown11,
    type: 'easy',
  },
  {
    id: '12',
    cardFace: cards.brown12,
    type: 'easy',
  },
  {
    id: '13',
    cardFace: cards.brown13,
    type: 'easy',
  },
  {
    id: '14',
    cardFace: cards.brown14,
    type: 'easy',
  },
  {
    id: '15',
    cardFace: cards.brown15,
    type: 'normal',
  },
  {
    id: '16',
    cardFace: cards.brown16,
    type: 'normal',
  },
  {
    id: '17',
    cardFace: cards.brown17,
    type: 'normal',
  },
  {
    id: '18',
    cardFace: cards.brown18,
    type: 'normal',
  },
  {
    id: '19',
    cardFace: cards.brown19,
    type: 'normal',
  },
  {
    id: '20',
    cardFace: cards.brown20,
    type: 'normal',
  },
  {
    id: '21',
    cardFace: cards.brown21,
    type: 'easy',
  },
].map((x) => ({ ...x, color: 'brown' }));

export default brownCardsData;
