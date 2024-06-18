setInterval( ()=>{
    let myTime = new Date().toLocaleTimeString()
    document.querySelector('.time').innerHTML = `${myTime}`
},1000 )