import { Category } from 'domain/Category/Category'

export enum CategoriesStatus {
    Loading = 'LoadingCategories',
    Loaded = 'LoadedCategories',
    Error = 'ErrorCategories'
}

export interface LoadingCategoriesState {
    status: CategoriesStatus.Loading
}

export interface LoadedCategoriesState {
    status: CategoriesStatus.Loaded
    categories: Category[]
}

export interface ErrorCategoriesState {
    status: CategoriesStatus.Error,
    message: string,
    error: Error
}

export type CategoriesState = LoadingCategoriesState | LoadedCategoriesState | LoadedCategoriesState | ErrorCategoriesState

export const CategoriesInitialState: CategoriesState = {
    status: CategoriesStatus.Loading
}