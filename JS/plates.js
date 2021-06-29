let dataToStore ='';

function cleaningElements(){
    document.getElementById("first-row").innerHTML = "";
    document.getElementById("second-row").innerHTML = "";
};

function sendData() {
    let userName = document.getElementById('name').value;
    let userMail = document.getElementById('email').value;
    let userText = document.getElementById('textArea').value;

    if ((userName==0) || (userMail==0) || (userText==0)) {
            alert('Все поля должны быть заполнены');
    } else {
    $.get('form.php', {name: userName, mail: userMail, text: userText}, function(data){
            console.log(data);
    })}
    
};

function reciveData(){
    $.get('getData.php', {para:'sole'}, function(data){ 
        dataToStore=JSON.parse(data);
    })
}

function themPlates(){
   


    let upperComm = document.getElementById("first-row");
    let lowerComm = document.getElementById("second-row");
    let counter = dataToStore.length;
    let y = 0;


    for (;counter;) {
        if ((counter>3) && dataToStore[y].id%2>0){
            upperComm.insertAdjacentHTML("beforeend",'<div class="col-sm-8 col-lg-3 py-2 px-4"><div class ="col background"><p class="fs-4 text-center mb-auto py-3 fw-bold text-white">'+dataToStore[y].name+'</p></div><div class ="col bg-themplates-fst"><p class="fs-5 text-center py-4 px-3 fw-bold bg-text-color-fst">'+dataToStore[y].mail+'</p><p class="fs-5 text-center pb-5 px-2 bg-text-color-fst">'+dataToStore[y].text+'</p></div></div>');
            counter--; 
            y++;
        } else if ((counter>3) && dataToStore[y].id%2==0) {
            upperComm.insertAdjacentHTML("beforeend",'<div class="col-sm-8 col-lg-3 py-2 px-4"><div class ="col bg-themplates-text-snd"><p class="fs-4 text-center mb-auto py-3 fw-bold text-white">'+dataToStore[y].name+'</p></div><div class ="col bg-themplates-snd"><p class="fs-5 text-center py-4 px-3 fw-bold bg-text-color-snd">'+dataToStore[y].mail+'</p><p class="fs-5 text-center pb-5 px-2 bg-text-color-fst">'+dataToStore[y].text+'</p></div></div>');
            counter--;
            y++;
        } else if ((counter<=3) && (dataToStore[y].id%2>0)) {          
                lowerComm.insertAdjacentHTML("beforeend",'<div class="col-sm-8 col-lg-3 py-2 px-4"><div class ="col bg-themplates-text-snd"><p class="fs-4 text-center mb-auto py-3 fw-bold text-white">'+dataToStore[y].name+'</p></div><div class ="col bg-themplates-snd"><p class="fs-5 text-center py-4 px-3 fw-bold bg-text-color-snd">'+dataToStore[y].mail+'</p><p class="fs-5 text-center pb-5 px-2 bg-text-color-fst">'+dataToStore[y].text+'</p></div></div>');
                counter--;;
                y++;
        } else if ((counter<=3) && (dataToStore[y].id%2==0)) {
                lowerComm.insertAdjacentHTML("beforeend",'<div class="col-sm-8 col-lg-3 py-2 px-4"><div class ="col background"><p class="fs-4 text-center mb-auto py-3 fw-bold text-white">'+dataToStore[y].name+'</p></div><div class ="col bg-themplates-fst"><p class="fs-5 text-center py-4 px-3 fw-bold bg-text-color-fst">'+dataToStore[y].mail+'</p><p class="fs-5 text-center pb-5 px-2 bg-text-color-fst">'+dataToStore[y].text+'</p></div></div>');
                counter--;
                y++;
        }
    }
};

function timers(){
    setTimeout(cleaningElements,500);
    setTimeout(sendData,100);
    setTimeout(reciveData,1200);
    setTimeout(themPlates,1500);
};