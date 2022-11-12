import { Category } from 'domain/Category'
import { CategoryRepository } from 'domain/CategoryRepository'
import { categories } from './db'

export default class CategoryRepositoryImpl implements CategoryRepository {
    async list(): Promise<Category[]> {
        return categories
    }
}