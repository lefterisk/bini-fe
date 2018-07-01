import {resolveAll, resolve} from '../helpers/mappers';
import Api from '../helpers/Api';
import Book from '../records/Book';

const BookSearch = {
    async search(search) {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.post('/books', {
                filters: search.getCondensedFilters(),
                page: search.page,
                itemsPerPage: search.limit
            });
            return {
                books: resolveAll(results.data.books).as(Book),
                count: results.data.count
            };
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    },

    async get(bookId) {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.get(`/book/${bookId}`);
            return resolve(results.data.books).as(Book);
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default BookSearch;
