mis=[' ','A̲','B̲','C̲','D̲', 'E̲', 'F̲', 'G̲', 'H̲', 'I̲', 'J̲', 'K̲', 'L̲', 'M̲', 'N̲', 'O̲', 'P̲', 'Q̲', 'R̲', 'S̲', 'T̲', 'U̲', 'V̲','W̲','X̲','Y̲','Z̲'];
alp=[' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
im=["image/st.png","image/st1.png","image/st2.png","image/st3.png","image/st4.png","image/st5.png","image/st6.png"];
ima=0;
function au(){
    ch='';
al=0;
for(qu of a){
       b=0;
       for(m of mi){
              if(m==al){
                     b=1;
              }
       }
       if(b==1){
              ch=ch+'_';
       }
       else{
              ch=ch+qu;
       }
       al++;
}
rle();
document.getElementById('dis').innerHTML=ch;
document.getElementById('ig').src=im[ima];
}
function wod(idt){
    ab=[];
       ac=0;
       ad=0;
       for(f of a){
              if(f==alp[idt]){
                     ab[ac]=ad;
                     ac++;
              }
              ad++;
       }
       if(ac!=0){
              ac=0;
       for(ae of ab){
              if(ch[ae]=='_'){
                     for(fi of ab){
                            let ba=0;
                            for(m of mi){
                                   if(fi==m){
                                        a[mi[ba]]='h';
                                          mi[ba]='-';
                                          ac=1;
                                   }
                                   ba++;
                            }
                     }
              }
       }
    }
    if(ac==0){
        ima++;
    }
    au();
}
function cho(chl){
    ima=0;
    document.getElementById('fr').style.display="block";
    document.getElementById('sm').style.display="none";
    if(chl==1){
        question=["POMEGRANATE","STRAWBERRY","CANTALOUPE","WATERMELON","GOOSEBERRY","GRAPEFRUIT","PINEAPPLE","RASPBERRY","BLUEBERRY","CRANBERRY"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==2){
        question=["DELIBERATION","CONTEMPLATION","RATIOCINATION","INTELLECTION","EXCOGITATION","SPECULATING","CEREBRATION","CONSIDERATION","INTENTNESS","REASONNINGS"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==3){
        question=["CAULIFLOWER","BROCCOLI","CUCUMBER","EGGPLANT","MUSHROOM","ZUCCHINI","ASPARAGUS","ARTICHOKE","BEETROOT","CAPSICUM"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==4){
        question=["ALLIGATOR","ARMADILLO","CHAMELEON","CHIMPANZEE","CROCODILE","HEDGEHOG","HIPPOPOTAMUS","ORANGUTAN","PORCUPINE","RHINOCEROS"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==5){
        question=["ADMINISTER","COLLABORATE","CONCENTRATE","COMMUNICATE","COORDINATE","DISTRIBUTE","ILLUSTRATE","INVESTIGATE","MANIPULATE","UNDERSTAND"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==6){
        question=["HUMMINGBIRD","NIGHTINGALE","KINGFISHER","WOODPECKER","ROADRUNNER","ALBATROSSES","CASSIOWARY","GUINEAFOWL","SANDPIPERS","SPOONBILLS"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==7){
        question=["CONGRATULATIONS","ENVIRONMENT","PHOTOGRAPHY","REFRIGERATOR","ARCHITECTURE","COMMUNICATION","SUPERMARKET","THERMOMETER","ELECTRICITY","DIFFERENCE"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==8){
        question=["AMBIVALENCE","ANTICIPATION","APPREHENSION","BEWILDERMENT","COMPASSION","CONTENTMENT","DETERMINATION","DISAPPOINTMENT","EMBARRASSMENT","FRUSTRATION "];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==9){
        question=["RAINFOREST","WATERFALL","EVERGREEN","ECOSYSTEM","MOUNTAIN","COUNTRYSIDE","LIGHTNING","BIODIVERSITY","PRECIPITATION","WILDERNESS","SUNSHINE","ATMOSPHERE"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else if(chl==10){
        question=["AUSTRALIA","ARGENTINA","SINGAPORE","INDONESIA","VENEZUELA","PHILIPPINES","LUXEMBOURG","BANGLADESH","MADAGASCAR","SWITZERLAND"];
p=Math.round(Math.random()*(question.length-1));
a=question[p];
mi=[];
r=Math.round((Math.random()*(a.length/2))+1);
for (let i= 0; i<r; i++) {
       mi[i]=Math.round(Math.random()*(a.length-1));
}
    }
    else{
           document.getElementById('go').style.display="none";
        document.getElementById('sm').style.display="flex";
        document.getElementById('fr').style.display="none";
        document.getElementById('dis').innerHTML="SORRY";
        mi=[0];
    }
    au();
    
}
function rle(){
    if(a==ch){
       document.getElementById('fr').style.display="none";
       document.getElementById('go').style.display="flex";
       document.getElementById('rl').innerHTML="WINNER🏆";
    }
    if(ima==6){
       document.getElementById('fr').style.display="none";
       document.getElementById('go').style.display="flex";
       document.getElementById('rl').innerHTML="Loss😔";
    }
}


