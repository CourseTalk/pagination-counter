var _ = require('underscore');


function PaginationCounter(options) {
    this.options = _.extend({}, PaginationCounter.DEFAULT, options || {});
}
PaginationCounter.DEFAULT = {
    edges_limit: 1,
    center_limit: 2
};

PaginationCounter.prototype.getPages = function (current_page, max_pages) {
    var pages = [];
    if (max_pages > 1) {
        this.setPreviousPage(pages, current_page);
        this.setLeftEdges(pages, current_page);
        pages.push(this.extendPage({
            number: current_page,
            active: true
        }));
        this.setRightEdges(pages, current_page, max_pages);
        this.setNextPage(pages, current_page, max_pages);
    }
    return pages;
};

PaginationCounter.prototype.extendPage = function (data) {
    return _.extend({}, {
        number: 0,
        is_previous: false,
        is_next: false,
        is_separator: false,
        disabled: false,
        active: false
    }, data)
};

PaginationCounter.prototype.setPreviousPage = function (pages, current_page) {
    var page;
    if (current_page > 1) {
        page = this.extendPage({
            number: current_page - 1,
            is_previous: true
        });
    } else {
        page = this.extendPage({
            number: current_page - 1,
            is_previous: true,
            disabled: true
        });
    }
    pages.push(page);
};

PaginationCounter.prototype.setLeftEdges = function (pages, current_page) {
    var appendPage = _.bind(function (i) {
        pages.push(this.extendPage({
            number: i
        }));
    }, this);

    var is_separated = current_page > (this.options.edges_limit + this.options.center_limit + 2);
    if (is_separated) {
        _.each(_.range(1, this.options.edges_limit + 1), appendPage);
        pages.push(this.extendPage({
            is_separator: true
        }));
        _.each(_.range(current_page - this.options.center_limit, current_page), appendPage)
    } else {
        _.each(_.range(1, current_page), appendPage);
    }
};

PaginationCounter.prototype.setRightEdges = function (pages, current_page, max_pages) {
    var appendPage = _.bind(function (i) {
        pages.push(this.extendPage({
            number: i
        }));
    }, this);

    var is_separated = max_pages - current_page > (this.options.edges_limit + this.options.center_limit + 1);
    if (is_separated) {
        _.each(_.range(current_page + 1, current_page + this.options.center_limit + 1), appendPage);
        pages.push(this.extendPage({
            is_separator: true
        }));
        _.each(_.range(max_pages - this.options.edges_limit + 1, max_pages + 1), appendPage);
    } else {
        _.each(_.range(current_page + 1, max_pages + 1), appendPage);
    }
};

PaginationCounter.prototype.setNextPage = function (pages, current_page, max_pages) {
    var page;
    if (current_page < max_pages) {
        page = this.extendPage({
            number: current_page + 1,
            is_next: true
        });
    } else {
        page = this.extendPage({
            number: current_page + 1,
            is_next: true,
            disabled: true
        })
    }
    pages.push(page);
};

/**
 * Generate list of page numbers
 * @param {Number} current_page - Current page
 * @param {Number} max_pages - Maximum pages
 * @param {Object} [options] - Calculate options.
 * @returns {Object[]}
 */
function getPages(current_page, max_pages, options) {
    var counter = new PaginationCounter(options);
    return counter.getPages(current_page, max_pages)
}

module.exports = {
    getPages: getPages
};