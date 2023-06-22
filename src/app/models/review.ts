import { Beer } from "./beer";
import { User } from "./user";

export interface Review {
    id: string;
    rating: string;
    comment: string;
    user: User;
    beer: Beer;
}

