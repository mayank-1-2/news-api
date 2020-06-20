let news=document.getElementById('news')


const xhr= new XMLHttpRequest();
xhr.open('GET','http://newsapi.org/v2/top-headlines?country=in&apiKey=7c70eaa46034410f9151aac41a9bee38',true);
xhr.onload = function () {
    if (this.status==200) {
        let json=JSON.parse(this.responseText);
        newshtml="";
        json['articles'].forEach(function(element) {
            let img=element.urlToImage;
            item=`<div class="card">
             <img src="${img}" alt="">
            <div class="title">${element.title}</div>
            <div class="desc">${element.description}</div>
            <div class="url"><a href=${element['url']} target="_blank">Read more</a>></div>
            </div>`
         newshtml+=item;
        });
        news.innerHTML=newshtml;
    }
    else{
        console.log('Some error occured')
    }
    
}
xhr.send();