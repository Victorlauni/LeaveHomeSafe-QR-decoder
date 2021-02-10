leavehomesafehk-qr-decoder
===
The package can be used to decode the qr code message from HK LeaveHomeSafe 安心出行
## How to use
```javascript
var decoder = require("leavehomesafehk-qr-decoder") 
// import decoder from 'leavehomesafehk-qr-decoder'
var result = decoder("HKEN:0gxr8l5A6eyJtZXRhZGF0YSI6bnVsbCwibmFtZVpoIjoi6Imv55Sw6auU6IKy6aSoIiwibmFtZUVuIjoiTGV1bmcgVGluIFNwb3J0cyBDZW50cmUiLCJ0eXBlIjoiU1BPUlRTQ1VMVFVSQUxSRUNSRUFUSU9OQUwiLCJoYXNoIjoiZTczODE4YjFjN2U4MDUzM2E4MjI3NjE5NzZhMmMwNTJmMWUwNTQzZTQ2ODM0MDk1ODZmZDg5OTRhM2MxZmU3NiJ9")
```
The function only accept string and will return the decoded JSON object.