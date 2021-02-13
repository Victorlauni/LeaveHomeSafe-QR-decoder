const decode = function(msg) {
  if (typeof msg === 'string' && msg.substr(0,5) === "HKEN:") {
    const HKEN = msg.substr(0,6)
    const LocateID = msg.substr(6, 8)
    try {
      const hash = msg.substr(14)
      const decodedMsg = JSON.parse(Buffer.from(hash, 'base64').toString())
      return decodedMsg
    } catch (err) {
      console.error("Invalid QR code")
      return null
    }
    
  }
  else return null
}
module.exports = decode