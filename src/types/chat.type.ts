export type MessageProps = {
  id: number;
  name?: string;
  message: string;
  time: string;
  type: 'me' | 'sender';
};
