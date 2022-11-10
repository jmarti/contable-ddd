import { Category } from 'domain/Category'
import { CategoryRepository } from 'domain/CategoryRepository'

export class InMemoryCategoryRepository implements CategoryRepository {
    private categories: Category[] = []
    
    save(category: Category): void {
        this.categories.push(category)
    }

    getCategories(): Promise<Category[]> {
        return Promise.resolve(this.categories)
    }
} 