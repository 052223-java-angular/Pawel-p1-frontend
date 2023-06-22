import { Beer } from "./beer";
import { User } from "./user";

export interface Favorite {
    id: string;
    user: User;
    beer: Beer;
}

