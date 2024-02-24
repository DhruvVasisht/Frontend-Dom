// var parent=document.querySelector("#parent");

// parent.addEventListener("click", function(details) {
//     if(details.target.id==="play"){
//         console.log("Play");
//     }
//     else if(details.target.id==="pause"){
//         console.log("pause");
//     }
// })

function divide(a,b){
    try{
        if(b==0){
            throw Error("Error Mila");
        }
        console.log(a/b);
    }

    catch(err){
        console.error(err);
    }
}

divide(1,0);