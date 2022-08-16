import { Expense, NewExpense } from "../../Domain/models/Expense";

export default interface ExpenseDataSource {
    getExpenses(): Promise<Expense[]>
    addExpense(newExpense: NewExpense): Promise<Expense>
}