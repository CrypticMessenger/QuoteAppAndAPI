
const quote = document.getElementById("quote");
const colors = ["#E06C75","#98C379","#E5C07B","#61AFEF","#C678DD","#56B6C2","#ABB2BF","#282C34"];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

var r = document.querySelector(':root');
function getQuote(){
    const rand_num = getRandomIntInclusive(0,colors.length-2);
    $("blockquote").css("background-color", colors[rand_num]+"65");
    $("blockquote").css("color", colors[rand_num]);
    $(".neon").css("-webkit-box-shadow", "0px 0px 225px 64px " + colors[rand_num]);
    $(".neon").css("-moz-box-shadow", "0px 0px 225px 64px " + colors[rand_num]);
    $(".neon").css("box-shadow", "0px 0px 225px 64px " + colors[rand_num]);
    r.style.setProperty('--pink', colors[rand_num]);

    fetch("/quote").then(function (response) {
        return response.json();
    }).then(function (data) {  
        const obj = data;
        quote.textContent = data['quote'];
    });
}