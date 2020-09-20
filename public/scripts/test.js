console.log("Start test cript");

const btn_ug = document.getElementById("ug");
const txt_ug = document.getElementById("ugt");

const btn_up = document.getElementById("up");
const txt_up = document.getElementById("upt");

const btn_update = document.getElementById("update");
const txt_update = document.getElementById("update-txt");

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
        if(data.error) {
            console.log(data.error);
        }else{
            userData = data; 
        }; 
    });

    return userData;
}

async function updateUserName(id) {

    await fetch('http://localhost:5000/users/update/'+id, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
            name: "Hodor"
        })
    })
    .then(response => console.log(response));

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
    .then(response => console.log(response));

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
    let user = "Error"; 
    if(userData) user = userData.name;
    txt_up.innerText = user;
});

btn_update.addEventListener('click', async () => {
    await updateUserName(35);
});

btn_ud.addEventListener('click', async () => {
    await deleteUser(10);
});