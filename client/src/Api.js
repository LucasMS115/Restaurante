/* const url = "http://localhost:5000/" ; */
const url = "https://restaurante-sintese.herokuapp.com/";

const teste = {
    print: () => {
        console.log("teste");
    }
}

const usersTable = {

    getByID: async (id) => {

        let user;
        
        await fetch(`${url}users/byId/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            user = data;
        });

        return user;

    },

    validateUser: async (email, password) => {

        let id;
        
        await fetch(`${url}users/testUser/${email}/${password}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            id = data;
        });
    
        return id;
    },

    postUser: async (data) => {

        try {
            await fetch(`${url}users`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    name: data.name,
                    cel: data.cel,
                    email: data.email,
                    password: data.password
                })
            })
        } catch (err) {
            console.log(err);
        }

    },

    updateUser: async (data, id) => {

        try {
            await fetch(`${url}users/update/${id}`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    name: data.name,
                    cel: data.cel,
                    email: data.email,
                    password: data.password
                })
            })
        } catch (err) {
            console.log(err);
        }

    },

    deleteUser: async (id) => {

        try {
            await fetch(`${url}users/${id}`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'DELETE',
            })
        } catch (err) {
            console.log(err);
        }

    }


}

const reservesTable = {

    getReserves: async () => {

        let reserves;
        
        await fetch(`${url}reservesTable/`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            reserves = data;
        });

        return reserves;

    },

    getByUser: async (user_id) => {

        let reserves;
        
        await fetch(`${url}reservesTable/byUser/${user_id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            reserves = data;
        });

        return reserves;

    },


    postReserve: async (data) => {
        console.log(data)

        try {
            await fetch(`${url}reservesTable/${data.user_id}`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    name: data.name,
                    cel: data.cel,
                    email: data.email,
                    hour: data.hour,
                    day: data.day,
                    room: data.room,
                    people: data.people,
                })
            })
        } catch (err) {
            console.log(err);
        }

    },

}

const dishesTable = {

    getDishes: async () => {

        let dishesData;
        
        await fetch(`${url}dishesTable/`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            dishesData = data;
        });
    
        return dishesData;
    },

    updateActive: async (id) => {

        console.log('updateActive => ' + id);
        try {
            await fetch(`${url}dishesTable/update/${id}`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    active: false,
                })
            })
        } catch (err) {
            console.log(err);
        }

    },

    updateArq: async (id) => {

        console.log('updateArq => ' + id);
        try {
            await fetch(`${url}dishesTable/update/${id}`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify({
                    active: true,
                })
            })
        } catch (err) {
            console.log(err);
        }

    },

    postDish: async (data) => {

        console.log('postDish => ' + data.name);
        try {
            await fetch(`${url}dishesTable`, { 
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    name: data.name,
                    price: data.price,
                    type: data.type,
                    description: data.desc,
                    active: "true" 
                })
            })
        } catch (err) {
            console.log(err);
        }

    },

    deleteDish: async (id) => {
        console.log("Deleting dish: " + id);
        await fetch(`${url}dishesTable/${parseInt(id)}`, { method: 'DELETE' })
        .then(response => response.json());
    }

};

export { teste, usersTable, reservesTable, dishesTable }

       
    


