import { Category, CategoryType } from '../domain/Category'
import { CategoryRepository } from '../domain/CategoryRepository'

class Error {
    constructor(public message: string) { }
}
export class CreateCategory {
    constructor(private categoryRepository: CategoryRepository) { }

    async execute(id: string, name: string, type: CategoryType) {

        const existingCategories = await this.categoryRepository.list()

        if (existingCategories.some(c => c.name === name && c.type === type)) {
            throw new Error('The category already exist.')
        }

        const category = new Category(id, name, type)

        this.categoryRepository.save(category)
    }
}