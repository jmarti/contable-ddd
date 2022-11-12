import { Category } from './Category'

export interface CategoryRepository {
    save(category: Category): void
    list(): Promise<Category[]>
}