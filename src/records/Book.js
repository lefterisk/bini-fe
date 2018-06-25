import {Record as record, List} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'Book',
    book_id: null,
    book_author: new List(),
    book_title: null,
    book_parallel_title: null,
    book_sub_title: null,
    book_publisher: null,
    book_printer: null,
    book_publication_country: null,
    book_publication_city: null,
    book_publication_year: null,
    book_publication_number: null,
    book_shape: null,
    book_height: null,
    book_volumes: null,
    book_pages: null,
    book_pagination: null,
    book_illustration: null,
    book_publication_type: null,
    book_bibliography: null,
    book_subject: new List(),
    included_book_author: null,
    included_book_title: null,
    series_title: null,
    volume_number: null,
    magazine_title: null,
    magazine_opuscule: null,
    magazine_volume: null,
    newspaper_title: null,
    newspaper_volume: null,
    idological_classification: null,
    cronological_classification: null,
    thematical_classification: new List(),
    tekmirio_language: new List(),
    prototype: null,
    original_language: null,
    original_translated_language: null,
    libraries: new List(),
    url: null,
    contributors: new List(),
    funding: null,
    copublished_book_author: null,
    copublished_book_title: null,
    other_publication: null,
    other_publication_type: null,
    republication_title: null,
    republication_publisher: null,
    republication_instructor: null,
    republication_place: null,
    republication_year: null,
    title_page_text: null,
    kolofonas_text: null,
    description: null,
    prototype_author: new List(),
    prototype_title: null,
    prototype_parallel_title: null,
    prototype_subtitle: null,
    prototype_publisher: null,
    prototype_printer: null,
    prototype_publication_country: null,
    prototype_publication_city: null,
    prototype_publication_year: null,
    prototype_shape: null,
    prototype_volumes: null,
    prototype_pages: null,
    prototype_pagination: null,
    prototype_illustration: null,
    prototype_publication_type: null,
    prototype_original_prototype: null,
    prototype_original_language: null,
    translated_prototype_original_language: null
};

class Book extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(Book, json, {
            book_id: resolve.with(Number),
            book_author: resolve.with(List),
            book_title: resolve.with(String),
            book_parallel_title: resolve.with(String),
            book_sub_title: resolve.with(String),
            book_publisher: resolve.with(String),
            book_printer: resolve.with(String),
            book_publication_country: resolve.with(String),
            book_publication_city: resolve.with(String),
            book_publication_year: resolve.with(String),
            book_publication_number: resolve.with(String),
            book_shape: resolve.with(String),
            book_height: resolve.with(String),
            book_volumes: resolve.with(String),
            book_pages: resolve.with(String),
            book_pagination: resolve.with(String),
            book_illustration: resolve.with(String),
            book_publication_type: resolve.with(String),
            book_bibliography: resolve.with(String),
            book_subject: resolve.with(List),
            included_book_author: resolve.with(String),
            included_book_title: resolve.with(String),
            series_title: resolve.with(String),
            volume_number: resolve.with(String),
            magazine_title: resolve.with(String),
            magazine_opuscule: resolve.with(String),
            magazine_volume: resolve.with(String),
            newspaper_title: resolve.with(String),
            newspaper_volume: resolve.with(String),
            idological_classification: resolve.with(String),
            cronological_classification: resolve.with(String),
            thematical_classification: resolve.with(List),
            tekmirio_language: resolve.with(List),
            prototype: resolve.with(String),
            original_language: resolve.with(String),
            original_translated_language: resolve.with(String),
            libraries: resolve.with(List),
            url: resolve.with(String),
            contributors: resolve.with(List),
            funding: resolve.with(String),
            copublished_book_author: resolve.with(String),
            copublished_book_title: resolve.with(String),
            other_publication: resolve.with(String),
            other_publication_type: resolve.with(String),
            republication_title: resolve.with(String),
            republication_publisher: resolve.with(String),
            republication_instructor: resolve.with(String),
            republication_place: resolve.with(String),
            republication_year: resolve.with(String),
            title_page_text: resolve.with(String),
            kolofonas_text: resolve.with(String),
            description: resolve.with(String),
            prototype_author: resolve.with(List),
            prototype_title: resolve.with(String),
            prototype_parallel_title: resolve.with(String),
            prototype_subtitle: resolve.with(String),
            prototype_publisher: resolve.with(String),
            prototype_printer: resolve.with(String),
            prototype_publication_country: resolve.with(String),
            prototype_publication_city: resolve.with(String),
            prototype_publication_year: resolve.with(String),
            prototype_shape: resolve.with(String),
            prototype_volumes: resolve.with(String),
            prototype_pages: resolve.with(String),
            prototype_pagination: resolve.with(String),
            prototype_illustration: resolve.with(String),
            prototype_publication_type: resolve.with(String),
            prototype_original_prototype: resolve.with(String),
            prototype_original_language: resolve.with(String),
            translated_prototype_original_language: resolve.with(String)
        });
    }
}

export default Book;
