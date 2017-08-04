// Import some dependencies...
import fetch from 'fetch'
import riot from 'riot'

// Import our tags to be compiled...
import * as Tags from './tags'

// Wait for the DOM to be ready...
document.addEventListener('DOMContentLoaded', async () => {
    // Mount our tag and pass some info.
    riot.mount('users', {title: 'Employees'})
})
