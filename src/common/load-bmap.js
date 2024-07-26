export function Bmap() {
  return new Promise(function (resolve, reject) {
    window.initBMapGL = function () {
      console.log('initBMapGL')
      resolve()
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `//api.map.baidu.com/api?v=3.0&ak=5PU0WFXapWvZSWgr3obXj1pi4Ap5E2Eg&callback=initBMapGL`

    script.onerror = reject

    // document.head.appendChild(script)
  })
}

