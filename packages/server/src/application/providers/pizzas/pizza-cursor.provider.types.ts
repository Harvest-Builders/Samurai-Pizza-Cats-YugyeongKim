import { ObjectId } from 'mongodb';
import { Pizza } from './pizza.provider.types';

export interface GetPizzaResult {
  results: Pizza[];
  totalCount: number;
  hasNextPage: boolean;
  cursor: string;
}

export interface CursorResultsInput {
  limit: number;
  cursor: string;
}
