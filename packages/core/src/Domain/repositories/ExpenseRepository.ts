import { Expense } from "../models/Expense";

export interface ExpenseRepository {
    getExpenses(): Promise<Expense[]>
}