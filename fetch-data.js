

async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users' ;

    // data container element
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const users = await response.json();

        // clear loading message

        dataContainer.innerHTML = '';

        // create and append user list

        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

        // Error handling
    } catch(){
        dataContainer.innerHTML = 'Failed to load user data.';
    }


}

// invoking fetchUserData

document.addEventListener('DOMContentLoaded', fetchUserData);
