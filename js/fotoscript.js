function fotomodel(){
    var self=this;

    self.zipArray=ko.observableArray();
    for(let i=1;i<11;i++){
        self.zipArray.push({photo:`assets/zip/Huwelijkskaarten${i}.zip`,title:`Huwelijkskaarten ${i}`});
    }

    self.photoArray=ko.observableArray();
    
    let fs = require('fs');
    let photos= fs.readdirSync('../assets/photos/');
    for(let i=0,photo;photo=photos[i];i++){
        self.photoArray.push({
            link:`../assets/photos/${photo}`
            , source: require(`../assets/photos${photo}`)
        });
    }
};

ko.applyBindings(new fotomodel());