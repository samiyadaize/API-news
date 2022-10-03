const api = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=206895d3a8f14f24b114ffe7340f3c23';

async function getData(){
    try{
        const response = await fetch(api);
        const data = await response.json();
        printData(data);
    }
    catch(e){
        console.log("erreur :",e.message);
    }
}

function printData(data){
    const article = document.getElementById("news");
    console.log(data);
    for(var i =0;i<10;i++){
        article.innerHTML += "<section class=\"page-section\">"
    +"<div class=\"container\">"
        +"<div class=\"product-item\">"
            +"<div class=\"product-item-title d-flex\">"
                +"<div class=\"bg-faded p-5 d-flex ms-auto rounded\">"
                    +"<h2 class=\"section-heading mb-0\">"
                        +"<span class=\"section-heading-upper\">"+ data.articles[i].title +"</span><br>"
                        +"<span class=\"section-heading-lower\">"+ data.articles[i].source.name +"</span>"
                   +"</h2>"
               + "</div>"
            +"</div>"
            +"<img class=\"product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0\" src=\" " + data.articles[i].urlToImage + "\" alt=\"...\" />"
            +"<div class=\"product-item-description d-flex me-auto\">"
                +"<div class=\"bg-faded p-5 rounded\"><a style=\"text-decoration: none; color : white;\" href=\"  "+ data.articles[i].url + "\" ><p class=\"mb-0\">"+ data.articles[i].description +"</p></a></div>"
            +"</div>"
        +"</div>"
    +"</div>"
+"</section>";
    }
    
}
getData();