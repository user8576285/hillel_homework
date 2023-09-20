async function fetchData(endpoint) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);

        if (!response.ok) {
            throw new Error(`Ошибка при запросе данных: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
    }
}


const endpoint = '/posts'; 

fetchData(endpoint)
    .then(data => {
        console.log('Полученные данные:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
