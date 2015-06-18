# pagination-counter

[![Build Status](https://travis-ci.org/CourseTalk/pagination-counter.svg?branch=master)](https://travis-ci.org/CourseTalk/pagination-counter)

This library calculate page numbers (buttons) that should be shown in pagination.

## Installation

```
npm install pagination-counter --save-dev
```

## Usage

Simple case:

```

var pagination = require('pagination-counter');

var result = pagination.getPages(1, 2); //-> [{ number: 0, is_previous: true, is_next: false, is_separator: false, disabled: true, active: false }, { number: 1, is_previous: false, is_next: false, is_separator: false, disabled: false, active: true }, { number: 2, is_previous: false, is_next: false, is_separator: false, disabled: false, active: false }, { number: 2, is_previous: false, is_next: true, is_separator: false, disabled: false, active: false }]

```

## Result format

Result list contains objects with information about page number (pagination buttons):

- number: Page number
- is_previous: Previous button (left arrow)
- is_next: Next button (right arrow)
- is_separator: Buttons separator (button with dots)
- disabled: Disabled button (EX: for current_page:1 previous will be disabled)
- active: Button with current page number

## Options

- edges_limit: {Number} How many buttons may be shown next to the next/prev button. By default: 1
- center_limit: {Number} How many buttons may be shown next to the button with current page number. By default: 2

```

var pagination = require('pagination-counter');

var result = pagination.getPages(3, 5, {edges_limit: 0, center_limit: 0}); //-> [ { number: 2, is_previous: true, is_next: false, is_separator: false, disabled: false, active: false }, { number: 0, is_previous: false, is_next: false, is_separator: true, disabled: false, active: false }, { number: 3, is_previous: false, is_next: false, is_separator: false, disabled: false, active: true }, { number: 0, is_previous: false, is_next: false, is_separator: true, disabled: false, active: false }, { number: 4, is_previous: false, is_next: true, is_separator: false, disabled: false, active: false } ]

```

