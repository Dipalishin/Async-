console.log('person1:shows tickets');
console.log('person2:shows tickets');

const preMovie= async()=>
{
    const promiseWifeBringTicks= new Promise((resolve,reject)=>
    {
        setTimeout (()=>resolve('ticket'),3000);
    });
    const getPopcorn=new Promise((reslove,reject)=>reslove(`popcorn`));
    const addbutter=new Promise ((reslove,reject)=>reslove(`butter`));
    const getColdDrinks =new Promise((reslove,reject)=>reslove(`colddrinks`));
    let ticket=await promiseWifeBringTicks; 
    console.log(`wife:i have ${ticket}`);
    let popcorn=await getPopcorn;
    console.log(`husband:i get some ${popcorn}`);
    let butter=await addbutter;
    console.log(`husband:I get some ${butter} on popcorn`);
    let colddrinks=await getColdDrinks ;
    console.log(`husband:I get  ${colddrinks}`);

return ticket;
}
preMovie().then((m)=>console.log(`person 3:shows ${m}`));
