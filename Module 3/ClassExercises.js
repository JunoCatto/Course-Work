



function delay(func, ms = 1000){
    // delays fn call by value
    setTimeout(func,ms)
}


const main = () => {

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1");
            resolve();
        }, 100);
    });
    p1.then(() => {
        setTimeout(() => {
            console.log("2");
        })
    })








}
main();
