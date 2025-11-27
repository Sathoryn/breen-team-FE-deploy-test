import type { Score } from '../types';

const BASE_URL = 'https://breen-team-backend.vercel.app/api/';

export const getScores = async (): Promise<{ scores: Score[] }> => {
  const response = await fetch(`${BASE_URL}games/1/scores`);
  const data = response.json();
  return data;
};
