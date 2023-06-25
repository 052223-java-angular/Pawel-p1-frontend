export interface Beer {
  id: string;
  name: string;
  style: string;
  abv: string;
  brewery: Brewery;
  reviews: Review[];
  favorites: Favorite[];
}

export interface Brewery {
  
  id: string;
  name: string;
  
}

export interface Review {
  
  id: string;
  author: string;
  comment: string;
  rating: number;
  
}

export interface Favorite {
  
  id: string;
  user: string; // or User
  
}
