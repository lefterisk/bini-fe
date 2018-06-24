import keyMirror from 'keymirror';

export const SearchActionTypes = keyMirror({
    SEARCH_START: null,
    SEARCH_SUCCESS: null,
    SEARCH_FAIL: null
});

export const FilterTypes = {
    AUTHOR: 'author',
    LANGUAGE: 'language',
    PLACE_OF_PUBLICATION: 'placeOfPublication',
    PUBLICATION_TYPE: 'publicationType',
    PUBLISHER: 'publisher',
    SUBJECT: 'subject',
    TITLE: 'title',
    YEAR_OF_PUBLICATION: 'yearOfPublication',
};

export const Languages = {
    MODERN_GREEK: 'Νέα Ελληνικά',
    ANCIENT_GREEK: 'Αρχαία Ελληνικά',
    ITALIAN: 'Ιταλικά',
    GERMAN: 'Γερμανικά',
    FRENCH: 'Γαλλικά',
    RUSSIAN: 'Ρωσικά',
    LATIN: 'Λατινικά',
    ENGLISH: 'Αγγλικά',
    SERBIAN: 'Σερβικά',
    TURKISH: 'Τουρκικά'
};
