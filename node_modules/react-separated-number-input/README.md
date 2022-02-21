![downloads](https://img.shields.io/npm/dt/react-separated-number-input.svg) ![build](https://img.shields.io/travis/wojtekmaj/react-separated-number-input/master.svg) ![dependencies](https://img.shields.io/david/wojtekmaj/react-separated-number-input.svg
) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/react-separated-number-input.svg
) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# React-Separated-Number-Input

A number input that automatically puts the separators in as you type.

## tl;dr
* Install by executing `npm install react-separated-number-input` or `yarn add react-separated-number-input`.
* Import by adding `import SeparatedNumberInput from 'react-separated-number-input'`.
* Use by adding `<SeparatedNumberInput groupLengths={[4, 4, 4, 4]} />`.

## Demo

Minimal demo page is included in sample directory.

[Online demo](http://projects.wojtekmaj.pl/react-separated-number-input/) is also available!

## Installation

Add React-Separated-Number-Input to your project by executing `npm install react-separated-number-input` or `yarn add react-separated-number-input`.

### Usage

Here's an example of basic usage:

```js
import React, { useState } from 'react';
import SeparatedNumberInput from 'react-separated-number-input';

function MyApp() {
  const [value, setValue] = useState('');

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <SeparatedNumberInput
      onChange={onChange}
      groupLengths={[4, 4, 4, 4]}
      value={value}
    />
  );
}
```

## User guide

### SeparatedNumberInput

Displays the input.

#### Props

|Prop name|Description|Example values|
|----|----|----|
|defaultValue|Defines the default value for SeparatedNumberInput used as an uncontrolled input.|`"1234"`|
|groupLengths|Defines lengths of the groups the input should split the numbers into. For example, given `value` `"12345678"` and `groupLengths` `[1, 2, 3]` the input will display `1 23 456`.|`[4, 4, 4, 4]`|
|inputRef|A function that behaves like ref, but it's passed to the `<input>` rendered by `<SeparatedNumberInput>` component.|`(ref) => { this.input = ref; }`|
|onChange|Defines the function to update the value when it changes in SeparatedNumberInput used as a controlled input.|`(event) => console.log(event.target.value);`|
|value|Defines the value to display for SeparatedNumberInput used as a controlled input.|`"1234"`

Note: You can also safely pass almost any other prop you would pass to `<input>` element. Exceptions are listed below.

#### Unsupported props

* `inputMode` - it's required for React-Separated-Number-Input to trigger numeric keyboard on mobile devices.

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="http://wojtekmaj.pl">http://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
