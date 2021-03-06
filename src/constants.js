import keyMirror from 'keymirror';

export const SearchActionTypes = keyMirror({
    SEARCH_START: null,
    SEARCH_SUCCESS: null,
    SEARCH_FAIL: null
});

export const BookActionTypes = keyMirror({
    GET_BOOK_START: null,
    GET_BOOK_SUCCESS: null,
    GET_BOOK_FAIL: null
});

export const CountriesActionTypes = keyMirror({
    COUNTRIES_START: null,
    COUNTRIES_SUCCESS: null,
    COUNTRIES_FAIL: null
});

export const CitiesActionTypes = keyMirror({
    CITIES_START: null,
    CITIES_SUCCESS: null,
    CITIES_FAIL: null
});

export const LibrariesActionTypes = keyMirror({
    LIBRARIES_START: null,
    LIBRARIES_SUCCESS: null,
    LIBRARIES_FAIL: null
});

export const SubjectsActionTypes = keyMirror({
    SUBJECTS_START: null,
    SUBJECTS_SUCCESS: null,
    SUBJECTS_FAIL: null
});

export const FilterTypes = {
    ALL: 'all',
    AUTHOR: 'author',
    LANGUAGE: 'language',
    COUNTRY_OF_PUBLICATION: 'countryOfPublication',
    CITY_OF_PUBLICATION: 'cityOfPublication',
    PUBLICATION_TYPE: 'publicationType',
    PUBLISHER: 'publisher',
    SUBJECT: 'subject',
    TITLE: 'title',
    YEAR_OF_PUBLICATION: 'yearOfPublication',
    THEMATICAL_CLASSIFICATION: 'thematicalClassification',
    IDOLOGICAL_CLASSIFICATION: 'idologicalClassification',
    CHRONOLOGICAL_CLASSIFICATION: 'chronologicalClassification',
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

export const PublicationTypes = {
    BOOK: 'Βιβλίο',
    BOOK_PART: 'Μέρος βιβλίου',
    SCHOOL_MANUAL: 'Βιβλίο-σχολικό εγχειρίδιο',
    UNI_BOOK: 'Βιβλίο-πανεπιστημιακό σύγγραμμα',
    TWO_PAGE: 'Δίφυλλο',
    ONE_PAGE: 'Μονόφυλλο',
    ARTICLE: 'Άρθρο σε περιοδικό',
    MAP: 'Χάρτης'
};

export const UiActionTypes = keyMirror({
    LOADING_START: null,
    LOADING_END: null
});

export const ThematicalClassifications = [
    'Γενικά έργα',
    'Φιλοσοφία-Θεωρία Ιστορίας',
    'Οικονομική Ιστορία',
    'Κοινωνική Ιστορία',
    'Πολιτική Ιστορία',
    'Πολεμική Ιστορία',
    'Διπλωματική Ιστορία',
    'Εκκλησιαστική Ιστορία',
    'Ιστορία Δικαίου-Θεσμών',
    'Πολιτισμική Ιστορία',
    'Γραμματολογία',
    'Ιστορία των Επιστημών',
    'Τοπική Ιστορία',
    'Βιογραφίες',
    'Ιστορία έθνους',
    'Ιστορία εθνών'
];

export const IdologicalClassifications = [
    'Ιστοριογραφία',
    'Χρονογραφία',
    'Χρονολογία',
    'Βιβλιογραφία'
];


export const ChronologicalClassifications = [
    'Αρχαιότητα',
    'Μεσαίωνας',
    'Νεότεροι Χρόνοι',
    'Αρχαιότητα-Μεσαίωνας',
    'Μεσαίωνας-Νεότεροι χρόνοι',
    'Α-Μ-Ν',
    '12ος-6ος αι. π.Χ.',
    '500-338 π.Χ.',
    '338-146 π.Χ.',
    '146-330 μ.Χ.',
    '330-1453',
    '1453-1821',
    '1821-1833',
    '1833-1909'
];
