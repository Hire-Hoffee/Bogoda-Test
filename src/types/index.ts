type CardType = {
  id: number;
  title: string;
  text: string;
  img: string;
};

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type { CardType, PostType };
