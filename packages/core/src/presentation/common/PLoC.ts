type Subscription<S> = (state: S) => void

export abstract class PLoC<S> {
    private internalState: S
    private listeners: Subscription<S>[] = []

    constructor(initialState: S) {
        this.internalState = initialState
    }

    public get state(): S {
        return this.internalState
    }

    changeState(state: S) {
        this.internalState = state

        if (this.listeners.length) {
            this.listeners.forEach(l => l(this.state))
        }
    }
    
    subscribe(listener: Subscription<S>) {
        this.listeners = [...this.listeners, listener]
        listener(this.state)
    }

    unsubscribe(listener: Subscription<S>) {
        this.listeners.filter(l => l !== listener)
    }
}