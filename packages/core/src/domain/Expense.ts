import {Category, CategoryId} from './Category'

export class Expense {
    constructor(
        public id: string,
        public description: string,
        public amount: AmountCents,
        public date: Date,
        public category: CategoryId) { }

    /** factory method */
    static create(description: string, amount: AmountCents): Expense {
        return new Expense(description, description, amount, new Date(), Category.DEFAULT_CATEGORY);
    }
}