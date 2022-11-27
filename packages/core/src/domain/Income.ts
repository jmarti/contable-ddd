import { CategoryId } from './Category'

export class Income {
    constructor(
        public id: string,
        public description: string,
        public amount: AmountCents,
        public date: DateString,
        public category: CategoryId) { }
}