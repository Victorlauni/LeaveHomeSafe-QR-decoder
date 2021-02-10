const decode = function(msg) {
  if (typeof msg === 'string') {
    const HKEN = msg.substr(0,6)
    const LocateID = msg.substr(6, 8)
    const hash = msg.substr(14)
    const decodedMsg = JSON.parse(Buffer.from(hash, 'base64').toString())
    console.log(decodedMsg)
  }
}
exports.decode = decode

