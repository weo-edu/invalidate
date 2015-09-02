# invalidate

Invalidate a resource that is currently cached by the browser, without reloading the current page.

## Installation

`npm install invalidate --save`

## Usage

```javascript
function avatarChanged (url) {
  invalidate(url, function (err) {
    if (err) throw err
    refreshImages(url)
  })
}
```