import { Expense, NewExpense } from "../../Domain/models/Expense";
import { ExpenseRepository } from "../../Domain/repositories/ExpenseRepository";
import ExpenseDataSource from "../DataSource/ExpenseDataSource";

export class ExpenseRepositoryImpl implements ExpenseRepository {

    constructor(public dataSource: ExpenseDataSource) { }

    async getExpenses(): Promise<Expense[]> {
        return this.dataSource.getExpenses()
    }

    async addExpense(newExpense: NewExpense): Promise<Expense> {
        return this.dataSource.addExpense(newExpense)
    }
}