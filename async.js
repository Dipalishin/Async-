const posts=[{title:'Post One',body:'This is post one',createAt:new Date().getTime()},
{title:'Post Two',body:'This is post two'}]

function getPosts(){
    return new Promise((res,rej)=>
    {
        intervalId=setInterval(()=>{
            let output='';
            for(let i=0;i<posts.length;i++){
                output+=`<li>${posts[i].title}</li>`;
                
            }
            res(document.body.innerHTML=output);
            },1000);
        
    })
    }

function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('error:something went wrong');
            }
        },2000);
    });
}

function deletePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const popele=posts.pop();
                resolve(popele);
           }else{
            reject('Array is empty now');
           }
            
            
        },1000)
    })
}

async function fun1(){
    const post=await createPost({title:'post Three',body:'this is post three'});
   const p1=await getPosts();
    console.log(p1);
    
   const post2=await deletePost();
   console.log(post2);
}
fun1();