<users>
    <h1 class="hug">{opts.title}</h1>
    <user each={user in users} data={user}></user>

    <script>
        const self = this
        this.on('mount', async () => {
            console.log('Fetching users');
            await fetch('https://jsonplaceholder.typicode.com/users')
                 .then((resp) => { return resp.json() })
                 .then((users) => {
                     console.log('Got users')
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
