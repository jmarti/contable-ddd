import { Category } from './Category'

export interface CategoryRepository {
    save(category: Category): void
    getCategories(): Promise<Category[]>
}