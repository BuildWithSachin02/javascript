const doggiesApi = document.getElementById("dog-img");
const dogChngbtn = document.getElementById("dog-change-btn");

dogChngbtn.addEventListener("click",()=>{
    fetchApi();
});

const fetchApi = ()=>{
    doggiesApi.style.opacity = "0.3";//mene issme ek opecity add krdi h jise jab bhi api se koi new img aye toh load hote img ke box me thoda blur yaa gray type ho jyega boh 
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        doggiesApi.src = data.message;
        doggiesApi.onload = () => { //onload pe hmne img ko opacity set ki h 
          doggiesApi.style.opacity = "1";
        };
      });

};
fetchApi();