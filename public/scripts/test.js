console.log("Start test cript");

const btn_ug = document.getElementById("ug");
const txt_ug = document.getElementById("ugt");

const btn_up = document.getElementById("up");
const txt_up = document.getElementById("upt");

const btn_ud = document.getElementById("ud");
const txt_ud = document.getElementById("udt");


async function getUsers() {

    let usersData;

    await fetch('http://localhost:5000/users/', { method: 'GET' })
    .then(response => response.json())
    .then(data => { 
        usersData = data;
    });

    return usersData;
}

async function createUser() {

    let userData;

    await fetch('http://localhost:5000/users/', { 
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name : 'Homelander',
            email: 'homie@gmail.com',
            cel: '00 99999-9999',        
            password: 'milk'
        })
    })
    .then(response => response.json())
    .then(data => { 
        userData = data;
    });

    return userData;
}

async function deleteUser(id) {

    await fetch('http://localhost:5000/users/', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        })
    })
    .then(response => response.json())
    .then(data => { 
        console.log(data);
    });

}

btn_ug.addEventListener('click', async () => {
    let usersData = await getUsers();
    let users = '';
    usersData.forEach(element => {
        users += `${element.name} \n`;
    });
    txt_ug.innerText = users;
});

btn_up.addEventListener('click', async () => {
    let userData = await createUser();
    let user = userData.name;
    txt_up.innerText = user;
});

btn_ud.addEventListener('click', async () => {
    await deleteUser(9);
});