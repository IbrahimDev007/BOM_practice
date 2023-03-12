const getData=new Promise((resolve,reject)=>{
    const daa=Math.random()*10
    if (daa>4) {
        resolve(daa)
    } else {
        reject('no data available') 
    }
 
})

getData.then(dsta=>console.log(dsta))
       .catch(err=>console.log(err))