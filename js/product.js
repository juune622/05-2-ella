function genStar(v){
    for(var i=2, html='';i<7;i++){
        if(Math.ceil(v)>=i){ 
            html +='<i class="star fa fa-star"></i>'
        }
    }
    return html;
}





$.get('../json/product.json',onProduct);
var html=''
function onProduct(r){
    for(var i in r){
        html += '<i class="product-wrap">'
        html += '<div class="img-wrap ">'
        html += '<a href="#"><img src="'+r[i].src+'" alt="" class="w-100"></a>'
        html += '</div>'
        html += '<div class="info-wrap">'
        html += '<div class="title">'+r[i].title+'<i class="far fa-heart"></i></div>'
        html += '<div class="summary">'+r[i].summary+'</div>'
        html += '<div class="price">'+r[i].price+'</div>'
        html += '<div class="star-wrap">''</div>'
        html += '</div>'
    }
    $(".wrapper").append(html);
}