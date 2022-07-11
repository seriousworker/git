const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6

alert(calc('abcdef'));
alert(calc('ifkhchlhfd'));
alert(calc('aaaaaddddr'));
alert(calc('jfmgklf8hglbe'));
alert(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));

const obj = {
    x:10,
    y:20,
    foo : ()=>{
        console.log(x)
    }
}
console.log(alert)