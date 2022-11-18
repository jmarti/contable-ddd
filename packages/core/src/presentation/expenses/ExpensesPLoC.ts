// import { DataError } from 'domain/common/DataError'
import { Expense } from 'domain/Expense'
import { AddExpense } from 'useCases/AddExpense'
import { ListExpenses } from 'useCases/ListExpenses'
import { PLoC } from '../common/PLoC'
import { expensesInitialState, ExpensesState, ExpensesStatus } from './ExpensesState'

export default class ExpensesPLoC extends PLoC<ExpensesState> {
    constructor(
        private listExpenses: ListExpenses,
        private addExpense: AddExpense
    ) {
        super(expensesInitialState)
    }

    async list() {
        try {
            const expenses = await this.listExpenses.execute()
            this.changeState({
                status: ExpensesStatus.Loaded,
                expenses
            })
        } catch(error) {
            this.changeState(this.handleError('ListExpensesError', error))
        }
    }

    async add(newExpense: Expense) {
        try {
            await this.addExpense.execute(newExpense.id, newExpense.description, newExpense.amount, newExpense.date, newExpense.category)
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