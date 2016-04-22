var assert = require('assert');
var pagination = require('../pagination');


describe('pagination', function () {
    describe('getPages', function () {

        it('get pages: page 1 max page: 2', function () {
            var result = pagination.getPages(1, 2);

            assert.deepEqual(result, [
                { number: 0,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: true,
                    active: false },
                { number: 1,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 2,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 2,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false }]);
        });

        it('get pages: page 1 max page: 1', function () {
            var result = pagination.getPages(1, 1);

            assert.deepEqual(result, []);
        });

        it('get pages: page 2 max page: 2', function () {
            var result = pagination.getPages(2, 2);

            assert.deepEqual(result, [
                { number: 1,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 1,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 2,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 3,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: true,
                    active: false }]);
        });

        it('get pages: page 1 max page: 10', function () {
            var result = pagination.getPages(1, 10);

            assert.deepEqual(result, [
                { number: 0,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: true,
                    active: false },
                { number: 1,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 2,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 3,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 10,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 2,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false }]);
        });

        it('get pages: page 4 max page: 10', function () {
            var result = pagination.getPages(4, 10);

            assert.deepEqual(result, [
                { number: 3,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 1,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 2,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 3,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 4,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 5,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 6,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 10,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 5,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false }]);
        });

        it('get pages: page 10 max page: 20', function () {
            var result = pagination.getPages(10, 20);

            assert.deepEqual(result, [
                { number: 9,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 1,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 8,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 9,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 10,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 11,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 12,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 20,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 11,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false }  ]);
        });

        it('get pages: page 5 max page: 10', function () {
            var result = pagination.getPages(5, 10);

            assert.deepEqual(result, [
                { number: 4,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 1,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 2,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 3,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 4,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 5,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 6,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 7,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 10,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 6,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false } ]);
        });


    });

    describe('getPages with custom options', function () {

        it('get pages: page 3 max page: 5 options: {edges_limit: 0, center_limit: 0}', function () {
            var result = pagination.getPages(3, 5, {edges_limit: 0, center_limit: 0});

            assert.deepEqual(result, [
                { number: 2,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 3,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 4,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false } ]);
        });

        it('get pages: page 5 max page: 10 options: {edges_limit: 2, center_limit: 0}', function () {
            var result = pagination.getPages(5, 10, {edges_limit: 2, center_limit: 0});

            assert.deepEqual(result, [
                { number: 4,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 1,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 2,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 5,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 9,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 10,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 6,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false } ]);
        });

        it('get pages: page 5 max page: 10 options: {edges_limit: 0, center_limit: 2}', function () {
            var result = pagination.getPages(5, 10, {edges_limit: 0, center_limit: 2});

            assert.deepEqual(result, [
                { number: 4,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 3,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 4,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 5,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 6,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 7,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 6,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false }  ]);
        });

        it('get pages: page 5 max page: 10 options: {edges_limit: 0, center_limit: 2, hide_last_page: true}', function () {
            var result = pagination.getPages(5, 10, {edges_limit: 0, center_limit: 2, hide_last_page: true});

            assert.deepEqual(result, [
                { number: 4,
                    is_previous: true,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 3,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 4,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 5,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: true },
                { number: 6,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 7,
                    is_previous: false,
                    is_next: false,
                    is_separator: false,
                    disabled: false,
                    active: false },
                { number: 0,
                    is_previous: false,
                    is_next: false,
                    is_separator: true,
                    disabled: false,
                    active: false },
                { number: 6,
                    is_previous: false,
                    is_next: true,
                    is_separator: false,
                    disabled: false,
                    active: false }  ]);
        });

    });
});