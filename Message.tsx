function Message(){
    const z=[];
    const a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    for(var i=0;i<25;i++)
     if(a[i]% 2!== 0)
      console.log(z.push(a[i]));

    
    return z;
}

export default Message;