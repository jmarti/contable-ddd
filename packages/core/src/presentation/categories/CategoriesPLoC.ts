import { ListCategories } from 'useCases/ListCategories'
import { PLoC } from 'presentation/common/PLoC'
import { CategoriesInitialState, CategoriesState, CategoriesStatus } from './CategoriesState'

export class CategoriesPLoC extends PLoC<CategoriesState> {
    constructor(private listCategories: ListCategories) {
        super(CategoriesInitialState)
    }

    async list() {
        try {
            const categories = await this.listCategories.execute()
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