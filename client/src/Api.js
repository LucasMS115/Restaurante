const url = "http://localhost:5000/" ;
/* const url = "https://restaurante-sintese.herokuapp.com/"; */

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


}

const reservesTable = {

    getReserves: async () => {

        let reserves;
        
        await fetch(`${url}reservesTable/listWithUser`, { method: 'GET' })
        .then(response => response.json())
        .then(data => { 
            reserves = data;
        });

        return reserves;

    }

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

    deleteDish: async (id) => {
        console.log("Deleting dish: " + id);
        await fetch(`${url}dishesTable/${parseInt(id)}`, { method: 'DELETE' })
        .then(response => response.json());
    }

};

export { teste, usersTable, reservesTable, dishesTable }

       
    


