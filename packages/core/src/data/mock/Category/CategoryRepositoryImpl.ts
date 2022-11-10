import { Category } from 'domain/Category/Category'
import { CategoryRepository } from 'domain/Category/CategoryRepository'
import { categories } from './db'

export default class CategoryRepositoryImpl implements CategoryRepository {
    async getCategories(): Promise<Category[]> {
        return categories
    }
}