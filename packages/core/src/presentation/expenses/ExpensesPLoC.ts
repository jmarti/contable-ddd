// import { DataError } from 'domain/common/DataError'
import { GetExpenses } from 'domain/Expense/useCases/GetExpenses'
import { PLoC } from '../common/PLoC'
import { expensesInitialState, ExpensesState } from './ExpensesState'

export default class ExpensesPLoC extends PLoC<ExpensesState> {
    constructor(private getExpenses: GetExpenses) {
        super(expensesInitialState)
    }

    async list() {
        try {
            const expenses = await this.getExpenses.execute()
            this.changeState({
                kind: "LoadedExpensesState",
                expenses
            })
        } catch(error) {
            // this.changeState(this.handleError(error))
        }
    }

    // private handleError(error: DataError): ExpensesState {
    //     switch(error.kind) {
    //         case 'UnexpectedError':
    //             return {
    //                 kind: 'ErrorExpensesState',
    //                 error: 'Sorry, an error has ocurred. Please try later again'
    //             }
    //     }
    // }
}