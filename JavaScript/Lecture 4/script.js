// fetch('https://randomuser.me/api/')
// .then(raw=>raw.json())
// .then(readable=> console.log(readable.results[0]))

// axios.get('https://randomuser.me/api/')
// .then(result => console.log(result.data))

// function abcd(a,b){
//     b();
// }

// abcd(1,function(){
//     console.log("Callback Chala");
// });

// function dotask(url,callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(res => {
//         callback(res)
//     })
// }

// dotask("https://randomuser.me/api/",function(res){
//     console.log(res.results[0].gender,res.results[0].email,res.results[0].name.first)
// })


async function abcd(){
   let a= await fetch('https://randomuser.me/api/');
   a=await a.json();
   console.log(a);
}

abcd();