import {Review } from "./review"; 
import {Favorite } from "./favorite";

import { Role } from "./role";

export interface User {
    id: string;
    username: string;
    password: string;
    reviews: Review[];
    role: Role;
    favorites: Favorite[];
    prp: string;
    bio: string;
}

