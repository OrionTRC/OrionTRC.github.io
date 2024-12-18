function importYear(e, el) {
    e.preventDefault();
    const amberBody = document.getElementById('bodyCover');
    const yr = el.dataset.year;
    
    import(`./acn_${yr}.js`).then((mod) => {
        ko.applyBindings(new acnoir(mod.acn()));
    });  
};

function acnoir(ac) {
    var self = this;
    const chars = Object.values(ac);   

    self.selectedGame = ko.observable({});

    self.selectGame = function (game, event) {
        self.selectedGame(game);
        event.target.closest('button').blur();
    };
};