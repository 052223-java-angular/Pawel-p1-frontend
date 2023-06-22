import { Beer } from "./beer";

export interface Brewery {
    id: string;
    name: string;
    location: string;
    averageRating: string;
    beers: Beer[];
}

