export type * from './auth';
// src/types/index.ts


export interface PricingPlan {
  id:string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export interface Ingredient {
  name: string;
  description: string;
  icon: string;
}

export interface Review {
  id: number;
  rating: number;
  content: string;
  author: string;
  title: string;
}

