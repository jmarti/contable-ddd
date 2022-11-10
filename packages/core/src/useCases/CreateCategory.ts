import { Category, CategoryType } from '../domain/Category'
import { CategoryRepository } from '../domain/CategoryRepository'

export class CreateCategory {
    constructor(private categoryRepository: CategoryRepository) { }

    execute(id: string, name: string, type: CategoryType) {
        const category = new Category(id, name, type)
        this.categoryRepository.save(category)
    }
}