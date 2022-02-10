console.log("starting test")
const depDomain = '9c3e8103115452.au.deputy.com'

const scheduleCall = `https://9c3e8103115452.au.deputy.com/api/v1/me`

fetch(scheduleCall, {
    mode: 'no-cors',
    headers: {
    Authorization: 'Bearer b71b13fbb5200bb282841078d76f3a98'
    }
})
.then(response => response.json()).then(data => console.log(data))
