import { GetCategories } from 'useCases/GetCategories'
import { PLoC } from '../common/PLoC'
import { CategoriesInitialState, CategoriesState, CategoriesStatus } from './CategoriesState'

export class CategoriesPLoC extends PLoC<CategoriesState> {
    constructor(private getCategories: GetCategories) {
        super(CategoriesInitialState)
    }

    async list() {
        try {
            const categories = await this.getCategories.execute()
            this.changeState({
                status: CategoriesStatus.Loaded,
                categories
            })
        } catch(error) {
            this.changeState(this.handleError('ListCategoriesError', error))
        }
    }

    private handleError(errorType: string, error: any): CategoriesState {
        switch(errorType) {
            case 'ListCategoriesError':
                return {
                    status: CategoriesStatus.Error,
                    message: `Categories list could not be retrieved.`,
                    error
                }
            default:
                return {
                    status: CategoriesStatus.Error,
                    message: `Unexpected Error.`,
                    error
                }
        }
    }
}