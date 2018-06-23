import {resolveAll} from '../helpers/mappers';
import Book from '../records/Book';


const BookSearch = {
    async search(search) {
        setTimeout(() => {
            return resolveAll([]).as(Book);
        }, 3000);
    }
};

export default BookSearch;
