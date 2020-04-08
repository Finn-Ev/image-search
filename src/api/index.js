const url = "https://pixabay.com/api/?key=15127892-8696442402301390dd419b3b1"

export const fetchCategoryImages = async (category) => {

    try {
        const response = await fetch(`${url}&per_page=100&q=${category}&lang=de&safesearch=true}`)

        const { hits } = await response.json()

        return hits
    } catch (error) {
        throw (error)
    }

};

export const fetchCustomImages = async (urlQueryString, imageAmount) => {

    try {
        const response = await fetch(`${url}&q=${urlQueryString}&lang=de&per_page=${imageAmount}`)

        const { hits } = await response.json();

        return hits
    } catch (error) {
        throw error
    }

}


