import {resolveAll} from '../helpers/mappers';
import Book from '../records/Book';


const BookSearch = {
    async search(search) {
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 3000);
        });
        return resolveAll([]).as(Book);
    }
};

export default BookSearch;
