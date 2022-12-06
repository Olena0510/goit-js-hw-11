import axios from 'axios';

const API_KEY = '31748573-756ae01a8464a1c082026e61b';
const BASE_URL = 'https://pixabay.com/api';


export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

   async fetchImages() {
        const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
        return await axios
            .get(url)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            })
            .then(({ totalHits, hits }) => {
                this.incrementPage();
                return { totalHits, hits };
            })
            .catch(error => console.log(error));
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}