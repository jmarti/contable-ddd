// import { DataError } from 'domain/common/DataError'
import { NewExpense } from 'domain/NewExpense'
import { AddExpense } from 'useCases/AddExpense'
import { GetExpenses } from 'useCases/GetExpenses'
import { PLoC } from '../common/PLoC'
import { expensesInitialState, ExpensesState, ExpensesStatus } from './ExpensesState'

export default class ExpensesPLoC extends PLoC<ExpensesState> {
    constructor(
        private getExpenses: GetExpenses,
        private addExpense: AddExpense
    ) {
        super(expensesInitialState)
    }

    async list() {
        try {
            const expenses = await this.getExpenses.execute()
            this.changeState({
                status: ExpensesStatus.Loaded,
                expenses
            })
        } catch(error) {
            this.changeState(this.handleError('ListExpensesError', error))
        }
    }

    async add(newExpense: NewExpense) {
        try {
            await this.addExpense.execute(newExpense)
            await this.list()
        } catch(error) {
            this.changeState(this.handleError('NewExpenseError', error))
        }
    }

    private handleError(errorType: string, error: any): ExpensesState {
        switch(errorType) {
            case 'NewExpenseError':
                return {
                    status: ExpensesStatus.Error,
                    message: `New Expense could not be added.`,
                    error
                }
            case 'ListExpensesError':
                return {
                    status: ExpensesStatus.Error,
                    message: `Expenses list could not be retrieved.`,
                    error
                }
            default:
                return {
                    status: ExpensesStatus.Error,
                    message: `Unexpected Error.`,
                    error
                }
        }
    }
}