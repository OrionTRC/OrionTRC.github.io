function fotomodel(){
    var self=this;

    self.photoArray=ko.observableArray();

    for(let i=1;i<11;i++){
        self.photoArray.push({photo:`assets/photos/Huwelijkskaarten${i}.zip`,title:`Huwelijkskaarten ${i}`});
    }
};

ko.applyBindings(new fotomodel());