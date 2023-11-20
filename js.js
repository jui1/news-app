const apiKey = "37a42149db0c4dd48088e5b825839be5";

const fetchData = async (category, pageSize) => {
  const url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const data = await fetch(url);
  const response = await data.json();
  console.log(response);
  return response.articles;
};
const News = (data)=>{
   brkimg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`
   bNews.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
   bTNews.innerHTML = `${data[0].description}`
  
}
fetchData('general',5).then(News)

const TopNews =(data)=>{
  let html =''
  let title = ''
  data.forEach(element => {
    if(element.title.length<100){
      title = element.title
    }
    else{
      title = element.title.slice(0,100) + '...'
    }
    html += `<div class="no">
              <div class="img">
              <img src=${element.urlToImage} alt="image">
              </div>
           <div class="text">
              <div class="title">
            <a href=${element.url}><p>${title}</p></a>
        </div>
       </div>
     </div>`
  });
  bTopN.innerHTML = html;
}
fetchData('general',20).then(TopNews)

const sports =(data)=>{

  let html =''
  let title = ''
  data.forEach(element => {
    if(element.title.length<100){
      title = element.title
    }
    else{
      title = element.title.slice(0,100) + '...'
    }
    html += `<div class="now-2">
              <div class="img">
              <img src=${element.urlToImage} alt="image">
              </div>
           <div class="text">
              <div class="title">
            <a href=${element.url}><p>${title}</p></a>
        </div>
       </div>
     </div>`
  });
  bTopNT.innerHTML = html;
}
fetchData('sports',5).then(sports)


const business =(data)=>{

  let html =''
  let title = ''
  data.forEach(element => {
    if(element.title.length<100){
      title = element.title
    }
    else{
      title = element.title.slice(0,100) + '...'
    }
    html += `<div class="now-2">
              <div class="img">
              <img src=${element.urlToImage} alt="image">
              </div>
           <div class="text">
              <div class="title">
            <a href=${element.url}><p>${title}</p></a>
        </div>
       </div>
     </div>`
  });
  bTopNTE.innerHTML = html;
}
fetchData('business',5).then(business)


const tech=(data)=>{

  let html =''
  let title = ''
  data.forEach(element => {
    if(element.title.length<100){
      title = element.title
    }
    else{
      title = element.title.slice(0,100) + '...'
    }
    html += `<div class="now-2">
              <div class="img">
              <img src=${element.urlToImage} alt="image">
              </div>
           <div class="text">
              <div class="title">
            <a href=${element.url}><p>${title}</p></a>
        </div>
       </div>
     </div>`
  });
  bTopNTEP.innerHTML = html;
}
fetchData('technology',5).then(tech)
















 let brkimg = document.querySelector('#brkimg')
 let bNews = document.querySelector('#brikingNews .title')
 let bTNews= document.querySelector('#brikingNews .des')
 let bTopN= document.querySelector('.TopN')
 let bTopNT= document.querySelector('#sp2 .now')
 let bTopNTE= document.querySelector('#sp .now')


 let bTopNTEP = document.querySelector('#spo .now')
 
 