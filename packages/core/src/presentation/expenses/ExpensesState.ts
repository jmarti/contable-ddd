import { Expense } from 'domain/Expense'

export enum ExpensesStatus {
    Loading = 'LoadingExpenses',
    Loaded = 'LoadedExpenses',
    Error = 'ErrorExpenses'
}

// interface CommonExpensesState {
//     searchTerm: string
// }

export interface LoadingExpensesState {
    status: ExpensesStatus.Loading
}

export interface LoadedExpensesState {
    status: ExpensesStatus.Loaded
    expenses: Expense[]
}

export interface ErrorExpensesState {
    status: ExpensesStatus.Error,
    message: string,
    error: Error
}

export type ExpensesState = /*CommonExpensesState & */
    (LoadingExpensesState | LoadedExpensesState | LoadedExpensesState | ErrorExpensesState)

export const expensesInitialState: ExpensesState = {
    status: ExpensesStatus.Loading,
    // searchTerm: ''
}

export interface MyError {
    error: Error,
    message: string
}

export class MyExpensesState {
    loading: boolean;
    expenses: Expense[];
    message?: string;
    error?: MyError;
    listener?: (state: MyExpensesState) => void;

    constructor() {
        this.loading = true;
        this.expenses = [];
        this.message = undefined;
        this.error = undefined;
    }

    setError(error: MyError, message: string) {
        this.error = error;
        this.message = message;
        this.loading = false;
        this.notifyListeners();
    }

    addExpense(expense: string) {
        this.expenses.push(Expense.create(expense, 1));
        this.notifyListeners();
    }

    subscribe(listener: (state: MyExpensesState) => void): void {
        this.listener = listener;
    }

    private notifyListeners(): void {
        if (this.listener) {
            this.listener(this);
        }
    }
}