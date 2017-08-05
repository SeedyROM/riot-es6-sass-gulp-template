// Import some dependencies...
import fetch from 'fetch'
import riot from 'riot'
import { createStore, combineReducers } from 'redux'

// Import our tags to be compiled...
import * as Tags from './tags'

// Redux test.
const store = createStore((state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
})

// Wait for the DOM to be ready...
document.addEventListener('DOMContentLoaded', async () => {
    // Mount our tag and pass some info.
    riot.mount('users', {title: 'Employees'})
    riot.mount('counter', {store: store})
})
