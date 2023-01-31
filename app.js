console.log("Client to request... ", "loading started");
let student = {
    name: "Бексултан" ,
    direction: "Фронтенд" ,
    level: 3
}
setTimeout(function () {
    let start = new Promise((resolve, reject) => {
        let JSONdata = JSON.stringify(student);
        resolve(JSONdata);
     if(!error){
        const response = {
            status: 2000,
        };
        console.log("Response server");
        resolve(response);
     }else {
        reject("Error")
     }
})
    start
        .then(function (JSONda) {
        setTimeout(function () {
            console.log("Server send student--" + student);
        }, 1000)
        setTimeout(function () {
            let newStud = JSON.parse(JSONda)
            console.log("Preparing Data");
            console.log(newStud);
        },2000
        )
    })
})