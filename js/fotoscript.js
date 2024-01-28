function fotomodel(){
    var self=this;

    self.zipArray=ko.observableArray();
    for(let i=1;i<11;i++){
        self.zipArray.push({photo:`assets/zip/Huwelijkskaarten${i}.zip`,title:`Huwelijkskaarten ${i}`});
    }

    self.photoArray=ko.observableArray();
    
   
    fetch('../assets/photos/').then((response)=>{
        let list=ret.split('\n');
        for(let entry,info,i=0;entry=list[i];i++){
            info=entry.split(' ');
            info[0]=='201' && photoArray.push({
                link:`../assets/photos/${info[1]}`
                , source: `../assets/photos${info[1]}`
            });
        }
    });   
};

ko.applyBindings(new fotomodel());