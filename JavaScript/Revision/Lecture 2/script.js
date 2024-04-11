
// var count=1;
// var a=setInterval(()=>{
//     count++
//     console.log("hey");
//     if(count==10){
//         clearInterval(a);
//     }
// },2000)


// axios.get(`https://randomuser.me/api/`)
// .then(result=>console.log(result.data.results[0].name))

const parchi=new Promise(function(resolve,reject){
    fetch(`https://randomuser.me/api/`)
    .then(raw=>raw.json())
    .then(result=>{
        if(result.results[0].gender=='male')
            resolve();
        else reject();
    })
})

parchi.then(()=>console.log("Haraa Button"))
.catch(()=>console.log("Laal Button"))