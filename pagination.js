var _ = require('underscore');

var EDGES_LIMIT = 1,
    CENTER_LIMIT = 2;

function getPages(current_page, max_pages) {
    var pages = [];
    if (max_pages > 1) {
        setPreviousPage(pages, current_page);
        setLeftEdges(pages, current_page);
        pages.push(extendPage({
            number: current_page,
            active: true
        }));
        setRightEdges(pages, current_page, max_pages);
        setNextPage(pages, current_page, max_pages);
    }
    return pages;
}

function extendPage(data) {
    return _.extend({}, {
        number: 0,
        is_previous: false,
        is_next: false,
        is_separator: false,
        disabled: false,
        active: false
    }, data)
}

function setPreviousPage(pages, current_page) {
    var page;
    if (current_page > 1) {
        page = extendPage({
            number: current_page - 1,
            is_previous: true
        });
    } else {
        page = extendPage({
            number: current_page - 1,
            is_previous: true,
            disabled: true
        });
    }
    pages.push(page);
}

function setLeftEdges(pages, current_page) {
    var appendPage = _.bind(function (i) {
        pages.push(extendPage({
            number: i
        }));
    }, this);

    var is_separated = current_page > (EDGES_LIMIT + CENTER_LIMIT + 2);
    if (is_separated) {
        _.each(_.range(1, EDGES_LIMIT + 1), appendPage);
        pages.push(extendPage({
            is_separator: true
        }));
        _.each(_.range(current_page - CENTER_LIMIT, current_page), appendPage)
    } else {
        _.each(_.range(1, current_page), appendPage);
    }
}

function setRightEdges(pages, current_page, max_pages) {
    var appendPage = _.bind(function (i) {
        pages.push(extendPage({
            number: i
        }));
    }, this);

    var is_separated = max_pages - current_page > (EDGES_LIMIT + CENTER_LIMIT + 1);
    if (is_separated) {
        _.each(_.range(current_page + 1, current_page + CENTER_LIMIT + 1), appendPage);
        pages.push(extendPage({
            is_separator: true
        }));
        _.each(_.range(max_pages - EDGES_LIMIT + 1, max_pages + 1), appendPage);
    } else {
        _.each(_.range(current_page + 1, max_pages + 1), appendPage);
    }
}

function setNextPage(pages, current_page, max_pages) {
    var page;
    if (current_page < max_pages) {
        page = extendPage({
            number: current_page + 1,
            is_next: true
        });
    } else {
        page = extendPage({
            number: current_page + 1,
            is_next: true,
            disabled: true
        })
    }
    pages.push(page);
}

module.exports = {
    getPages: getPages
};