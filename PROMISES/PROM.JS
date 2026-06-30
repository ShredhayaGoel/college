let myprom = new Promise(function (resolve, reject) {
    let number = 10 + 20;
    if (number == 30) {
        resolve("success:=");
    }
    else {
        reject("error:=");
    }

})
myprom.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});