function importYear(e, el) {
    e.preventDefault();
    const amberBody = document.getElementById('bodyCover');
    const yr = el.dataset.year;
    
    import(`./acn${yr}.js`).then(module => module.loadPageInto(amberBody)).then(() => {
        ko.applyBindings(new acnoir(acn()));
    });  
}

function acnoir(ac) {
    var self = this;
    const chars = Object.values(ac);   

    self.selectedGame = ko.observable({});

    self.selectGame = function (game, event) {
        self.selectedGame(game);
        event.target.closest('button').blur();
    };
};