import { Category } from "../../models/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";

interface GetCategoriesUseCase {
    invoke: () => Promise<Category[]>
}

export class GetCategories implements GetCategoriesUseCase {
    
    constructor(private categoryRepo: CategoryRepository) { }

    async invoke() {
        return this.categoryRepo.getCategories()
    }
}