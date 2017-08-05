<counter>
    <h2>Current Count: {count}</h2>
    <p>
        <button onclick={inc}>+1</button>
    </p>
    <p>
        <button onclick={dec}>-1</button>
    </p>
    <hr />

    <script>
    const self = this;
    self.count = opts.store.getState()

    opts.store.subscribe(() => {
        self.count = opts.store.getState()
    })

    inc() {
        opts.store.dispatch({ type: 'INCREMENT' })
    }

    dec() {
        opts.store.dispatch({ type: 'DECREMENT' })
    }
    </script>
</counter>
