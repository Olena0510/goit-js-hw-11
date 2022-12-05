import axios from 'axios';

const API_KEY = '29727763-9de4927242ac493db1fc7e125';
const BASE_URL = 'https://pixabay.com/api';


export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
        return axios
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