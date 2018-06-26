import {resolveAll} from '../helpers/mappers';
import Api from '../helpers/Api';
import Book from '../records/Book';


const BookSearch = {
    async search(search) {
        const apiClient = Api.getApiClient();
        try {
            const results = await apiClient.post('/books', {
                filters: search.getCondensedFilters()
            });
            return {
                books: resolveAll(results.data.books).as(Book),
                count: results.data.count
            };
        } catch (err) {
            console.error(err);
            return Promise.reject();
        }
    }
};

export default BookSearch;
