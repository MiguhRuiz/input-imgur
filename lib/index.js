const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const FormData = require('form-data')

class Uploader {
  constructor(i) {
    this.clientId = i
  }
  upload(f) {
    const r = new XMLHttpRequest()
    const d = new FormData()
    var u

    d.append('image', f)

    r.open('POST', 'https://api.imgur.com/3/image/')
    r.setRequestHeader('Authorization', `Client-ID ${this.clientId}`)
    r.onreadystatechange = function () {
      if(r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText)
        return res
      }
    }
    r.send(d)
  }
}

module.exports = Uploader
