// function fetchNews(){
//     fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-12&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
//     .then((result)=>{
//         return result.json()
//     }).then((response)=>{
//       let div =document.createElement("div");
//       response.articles.forEach((item)=>{
//         console.log(item)
//         div.innerHTML+=`
//         <h3>${item.title}</h3>
//         <p>${item.description?item.description.slice(0,40):"Over here No description"}</p>
//         <img width="150px" height="150" src="${item.urlToImage?item.urlToImage:"https://static.toiimg.com/thumb/msid-110908500,width-1070,height-580,imgsize-60224,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}"/>
//        `
//        document.querySelector("body").appendChild(div)
//       })
     
//     })
// }
async function fetchNews(){
        let data =await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-12&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
        let jsondata =await data.json()
        let div =document.createElement("div");
      jsondata.articles.forEach((item)=>{
        console.log(item)
        div.innerHTML+=`
        <h3>${item.title}</h3>
        <p>${item.description?item.description.slice(0,40):"Over here No description"}</p>
        <img width="150px" height="150" src="${item.urlToImage?item.urlToImage:"https://static.toiimg.com/thumb/msid-110908500,width-1070,height-580,imgsize-60224,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}"/>
       `
       document.querySelector("body").appendChild(div)
      })
     
}
fetchNews()