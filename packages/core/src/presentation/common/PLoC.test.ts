import { expect, test } from 'vitest'
import { PLoC } from './PLoC'

const initialState = 'initialState'

class TestPLoC extends PLoC<string> {
    constructor() {
        super(initialState)
    }

    change(newState: string) {
        this.changeState(newState)
    }
}

test(`get initial state when subscribing to a new instance.`, () => {
    let state
    const pLoCInstance = new TestPLoC()
    const listener = ((s: string) => state = s)
    
    pLoCInstance.subscribe(listener)

    expect(state).toBe(initialState)
})

test(`notify to listener when state is changed`, () => {
    let state
    const pLoCInstance = new TestPLoC()
    const listener = ((s: string) => state = s)

    pLoCInstance.subscribe(listener)
    pLoCInstance.change('otherState')

    expect(state).toBe('otherState')

})