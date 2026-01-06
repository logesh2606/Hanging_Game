// alp=[' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','S','Y','Z','_'];
mis=[' ','A̲','B̲','C̲','D̲', 'E̲', 'F̲', 'G̲', 'H̲', 'I̲', 'J̲', 'K̲', 'L̲', 'M̲', 'N̲', 'O̲', 'P̲', 'Q̲', 'R̲', 'S̲', 'T̲', 'U̲', 'V̲','W̲','X̲','Y̲','Z̲'];
im=["image/st.png","image/st1.png","image/st2.png","image/st3.png","image/st4.png","image/st5.png","image/st6.png"];
ima=0;
cho(6);
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
}
// document.getElementById(alp[1]).style.display='none';

function cho(ch){
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
    // else if(ch==5){
    //     q=[];
    //     m=[];
    // }
    else{
        console.log("SORRY");
    document.getElementById('dis').innerHTML="SORRY";
    }
    que=q;
    mi=m;
    au();
}
