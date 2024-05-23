window.addEventListener('load',function(){
    
const Yazdigim_Deyer = document.getElementById('yazdigimdeyer');
const Gelen_Deyer = document.getElementById('gelendeyer');
const GelenValyuta =document.getElementById('gelen');
const SecdiyimValyuta = document.getElementById('secdiyim');
const btn = document.getElementById('cevir');
const frm = document.querySelector('form');
const p1 = document.querySelector('.p1')


 const images = {
    AZN: '/img/azzz.png',
    TRY: '/img/try.png',
    USD: '/img/us.svg',
    CAD: '/img/cad.png'
 }

// function deyis(){

//     for(i in images){
//         frm.style.backgroundImage = `url(${images[i]})`;
//         frm.style.backgroundSize='cover'
//     }

// }

// GelenValyuta.addEventListener('change',deyis)




function GetValue(){



    const request = {
        from: { name:  SecdiyimValyuta?.value,
              value: Number(Yazdigim_Deyer?.value)
        },

        to: {
            name: GelenValyuta?.value
        }

        
    }
    
    return request;
}


function SelectValue(from,to,api_key = "demo"){
    console.log(from,to,api_key);
    console.log(images[from]);
    console.log(images[to]);

const url = `https://api.fastforex.io/fetch-multi?from=${from}&to=${to}&api_key=${api_key}`;
axios.get(url).then(({status,data}) => {
    if(status===200){
       const {results} = data;
       const index = results[to];
      
       SetValue(index)
    
    }
    else{
        console.error("sehv")
    }



})
}

function SetValue(index){
    const {from,to} = GetValue();
    const d = to?.name;
//     const sp = document.createElement('span');
//     sp.style.marginLeft = '-200px'

//    sp.textContent = d;
//    p1.appendChild(sp);

    const val = (from?.value * index);
    Gelen_Deyer.value = val.toFixed(2) ;

}



function Convert(){
    const {from,to} = GetValue();
    SelectValue(from?.name,to?.name);
  
    

}


btn.addEventListener('click',Convert);



//Umumi Convert funksiyam olacaq.
//1.Deeyerleri oxumaliyam Forumdan,GetValue();
//2.Hemin deyerleri API-a gondermeliyem. SelectValue();
//Sonda inputun icine qurawdiracam. SetValue();








})