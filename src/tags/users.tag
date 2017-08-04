<users>
    <h1 class="hug">{opts.title}</h1>
    <user each={user in users} data={user}></user>

    <script>
        const self = this
        // Test of the async/await keywords... this is the shit.
        this.on('mount', async () => {
            console.log('Fetching users');
            await fetch('https://jsonplaceholder.typicode.com/users')
                 .then((resp) => resp.json())
                 .then((users) => {
                     console.log('Got users! HOLY FUCK IT WORKS, THIS IS THE BEST')
                     self.users = users
                     self.update()
                 })
            console.log('Loaded users')
        })
    </script>
</users>

<user>
    <h3>{opts.data.username}</h3>
    <p>
        {opts.data.name}
    </p>
</user>
