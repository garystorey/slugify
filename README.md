# slugify

A small dependency-free utility to remove whitespace from a string.

![Version](https://img.shields.io/github/package-json/v/garystorey/slugify)
![Size](https://img.shields.io/bundlephobia/min/@garystorey/slugify)
![License](https://img.shields.io/npm/l/@garystorey/slugify)

![Leywords](https://img.shields.io/github/package-json/keywords/garystorey/slugify)

## Installation

You can install either with `npm` or `yarn`:

```js
npm install @garystorey/slugify

yarn add @garystorey/slugify
```
## Parameters

| Parameter Type | Required | Description
--------|----------|---
| string| **Yes**| The string to strip whitespace
| _string_| _No_ | _Replacement character_

<br/>

## Usage

`slugify` has one required `string` parameter.

```js
import slugify from '@garystorey/slugify';
const slug = slugify('My Title');
console.log(slug);
// "mytitle"
```

Optionally, a replacement character can be provided as a second argument:


```js
import slugify from '@garystorey/slugify';
const slug = slugify('My Title','_');
console.log(slug);
// "my_title"
```

`slugify` is written in TypeScript.
