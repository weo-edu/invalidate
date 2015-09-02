/**
 * Invalidate a cached url
 */

function invalidate (url, cb) {
  var iframe = document.createElement('iframe')
  iframe.style.display = 'none'

  iframe.addEventListener('load', reload, false)
  iframe.addEventListener('error', error, false)

  iframe.src = url
  document.body.appendChild(iframe)

  function loaded () {
    this.contentWindow.location.reload(true)
    this.removeEventListener('load', loaded, false)
    this.addEventListener('load', function invalidated () {
      cb && cb()
      this.parentElement.removeChild(this)
    }, false)
  }

  function error (err) {
    this.parentElement.removeChild(this)
    cb && cb()
  }
}

/**
 * Exports
 */

module.exports = invalidate
