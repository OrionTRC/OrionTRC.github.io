function fotomodel(){
    var self=this;

    self.zipArray=ko.observableArray();
    for(let i=1;i<11;i++){
        self.zipArray.push({photo:`assets/zip/Huwelijkskaarten${i}.zip`,title:`Huwelijkskaarten ${i}`});
    }

    self.photoArray=ko.observableArray();    
   
    for(let i=1;i<46;i++){
        self.photoArray.push(`assets/photos/${i}.jpg`);
    }
};

ko.applyBindings(new fotomodel());