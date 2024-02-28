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


// async function abcd(){
//    let a= await fetch('https://randomuser.me/api/');
//    a=await a.json();
//    console.log(a);
// }

// abcd();

// function* printNums(){
//    console.log("Started");
//    yield 1;
//    console.log("Pehla Started");

//    yield 2;
//    console.log("Doosra Started");

//    yield 3;
//    console.log(" Teesra Started");
// }

// const ans =printNums();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);


// function* even(){
//    for(var i=0;i<100;i++){
//       if(i%2==0){
//          yield i;
//       }
//    }
// }

// const main=even();
// console.log(main.next().value);
// console.log(main.next().value);
// console.log(main.next().value);
// console.log(main.next().value);
// console.log(main.next().value);
// console.log(main.next().value);


var nums=Array.from({length:10000000},(_,b)=>b+1);