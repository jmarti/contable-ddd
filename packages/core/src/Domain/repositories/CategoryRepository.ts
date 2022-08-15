import { Category } from "../models/Category";

export interface CategoryRepository {
    getCategories(): Promise<Category[]>
}