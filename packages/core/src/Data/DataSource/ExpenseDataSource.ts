import { Expense } from "../../Domain/models/Expense";

export default interface ExpenseDataSource {
    getExpenses(): Promise<Expense[]>
}