# Rebote

_Rebote_ is a simple that checks whether an error is one of the standard 
Javascript errors and rethrows it. _Rebote_ is the spanish word for 
[_bounce_](#inspiration).

Example usage:

```javascript
import rebote from "rebote";

try {
  const response = await someAsyncFunction();
} catch (e) {
  // This line rethrows any of the standard JS errors
  // which are otherwise silenced due to the try catch.
  rebote.rethrow(e);
}
```

The standard Javascript errors rethrown are:

- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

## API

### rebote.rethrow(error, type)
- `error` is the cought error that should be checked and potentially rethrown.
- `type` is any of `native`, `any`, `all`. Default: `native`.
  - `native` - rethrows only the standard JS errors listed above.
  - `any`, `all` - rethrow all errors regardless of type.

## Inspiration

This library was inspired by [bouce](https://www.npmjs.com/package/bounce). However, 
`bounce` has additional dependencies on [hoek](https://www.npmjs.com/package/hoek) 
and [boom](https://www.npmjs.com/package/boom) which are related to node's 
[hapi](https://www.npmjs.com/package/hapi) which may contain code mean for not and 
not the browser.

Rebote aims to be free of platform specific dependencies and usable in both node and 
javascript in the the browser (after being bundled.)

## License: MIT
```
Copyright 2018 Bladymir Tellez<btellez@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
```
