async function getData(url) {
    try {
        const response = await fetch(url);

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


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

getData(apiUrl)
    .then(data => {
        console.log('Полученные данные:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
