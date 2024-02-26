// fetch('https://randomuser.me/api/')
// .then(raw=>raw.json())
// .then(readable=> console.log(readable.results[0]))

axios.get('https://randomuser.me/api/')
.then(result => console.log(result.data))