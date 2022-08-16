import { Category } from "../Category"
import { CategoryRepository } from "../CategoryRepository"

interface GetCategoriesUseCase {
    execute: () => Promise<Category[]>
}

export class GetCategories implements GetCategoriesUseCase {
    
    constructor(private categoryRepo: CategoryRepository) { }

    async execute() {
        return this.categoryRepo.getCategories()
    }
}