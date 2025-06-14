

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
        
    } catch(){
        
    }
}