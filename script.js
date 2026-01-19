mis=[' ','A̲','B̲','C̲','D̲', 'E̲', 'F̲', 'G̲', 'H̲', 'I̲', 'J̲', 'K̲', 'L̲', 'M̲', 'N̲', 'O̲', 'P̲', 'Q̲', 'R̲', 'S̲', 'T̲', 'U̲', 'V̲','W̲','X̲','Y̲','Z̲'];
im=["image/st.png","image/st1.png","image/st2.png","image/st3.png","image/st4.png","image/st5.png","image/st6.png"];
ima=0;
function au(){
    di="";
    for(q of que){
        if(typeof q==='number'){
            di=di+'_';
        }
        else{
            di=di+q;
        }
    }
document.getElementById('dis').innerHTML=di;
document.getElementById('ig').src=im[ima];
}
function wod(a){
    i=0;
    for(m of mi){
        if(m==a){
            k=0;
            for(q of que){
                if(i==q){
                    que[k]=mis[a];
                }
                    k++;}}
        else{
            i++;
        }}
    if(i==mi.length){
        ima=(ima+1)%7;
    }
    au();
    rle();
}
function cho(ch){
    ima=0;
    document.getElementById('fr').style.display="block";
    document.getElementById('sm').style.display="none";
    if(ch==1){
        q=['F','R',0,1,'H',2,3,'U','I','T',1];
        m=[5,19,6,18]; 
    }
    else if(ch==2){
        q=['T',0,1,'N',2,'I',3,'G','P','O',4,'E','R'];
        m=[8,9,11,14,23];
    }
    else if(ch==3){
        q=['V',0,1,'E','T','A',2,'L','E',3,'A','R',4];
        m=[5,7,2,6,13];
    }
    else if(ch==4){
        q=['W','I',0,'D',1,2,'I',3,'A',0,'S'];
        m=[12,1,14,13];
    }
    else if(ch==5){
        q=['D','A',0,1,'Y','A',2,'T',0,'V','I',3,'Y'];
        m=[9,12,3,20];
    }
    else if(ch==6){
        q=['F',0,1,'I','N',2,3,'I','R',4,'S'];
        m=[12,25,7,2,4];
    }
    else if(ch==7){
        q=['H',0,'U',1,'E','H','O','L',2,3,'T','E',4,'S'];
        m=[15,19,4,9,13];
    }
    else if(ch==8){
        q=['H','A',0,0,'Y',1,'E',2,'L',3,'N','G','S'];
        m=[16,6,5,9];
    }
    else if(ch==9){
        q=['E','N',0,1,'R',2,'N','M','E',3,'T',4,'A','R','E'];
        m=[22,9,15,14,3];
    }
    else if(ch==10){
        q=['D',0,'S','T','I','N',1,'T','I',2,3,'C','I',4,5];
        m=[5,1,15,14,20,25];
    }
    else{
        document.getElementById('sm').style.display="flex";
        document.getElementById('fr').style.display="none";
        document.getElementById('dis').innerHTML="SORRY";
    }
    que=q;
    mi=m;
    res=ch;
    au();
    
}
function rle(){
    a=0;
    for(q of que){
        if(typeof q!='number'){
            a++;
        }
    }
    if(a==que.length){
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
function re(){
    cho(res);
}


