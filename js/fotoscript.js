function fotomodel(photolist) {
    var self = this;

    self.zipArray = ko.observableArray();
    for (let i = 1; i < 11; i++) {
        self.zipArray.push({ photo: `../assets/zip/Huwelijkskaarten${i}.zip`, title: `Huwelijkskaarten ${i}` });
    }

    const lostNumbers = [4, 6, 8, 11, 22, 31, 36, 37];
    if (photolist = document.getElementById('image-list')) {       
        for (let i = 1; i < 46; i++) {
            if (!lostNumbers.includes(i)) {               
                makeThumbnail(i);
            }
        }
    }

    function makeThumbnail(i) {
        return new Promise((resolve, reject) => {
            const
                href = `../assets/photos/${i}.jpg`
                , dataUrl = `../assets/thumbs/tmb_${i}.jpg`
                , li = add(photolist, 'li')
                , photo = add(li, 'a', {
                    href
                    , target: '_blank'
                    , download: `${i}`
                });

            photo.style.backgroundImage = `url(${dataUrl})`;
            resolve(li);
        });
    }
};


ko.applyBindings(new fotomodel());