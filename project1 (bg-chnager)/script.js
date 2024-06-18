
document.querySelectorAll('.box').forEach( (x) =>{
x.addEventListener( 'click', (e)=>{
    
    if(e.target.id == 'black'){
        document.body.style.backgroundColor = e.target.id
        document.body.style.color = 'white'
        document.querySelectorAll('.box').forEach( (box)=>{
            box.style.border = '1px solid white'
        } )
    }
    else{
        document.body.style.backgroundColor = e.target.id
        if(e.target.id == 'white'){
            document.body.style.color = 'black'
        }
        document.querySelectorAll('.box').forEach( (box)=>{
            box.style.border = 'none'
        } )
    }

    
} )
} )
