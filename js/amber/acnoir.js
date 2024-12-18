
function acnoir() {
    var self = this;

    self.gameset = [];
    self.games = ko.observableArray([]);

    self.selectedGame = ko.observable({});

    self.importYear = function (e, el) {
        e.preventDefault();
        const amberBody = document.getElementById('bodyCover');
        const yr = el.dataset.year;

        import(`./acn_${yr}.js`).then((mod) => {
            yearBinding = mod;
            gameset = [...Object.values(mod.acn())];
            self.games = ko.observableArray(gameset);
        });
    };

    self.selectGame = function (game, event) {
        self.selectedGame(game);
        event.target.closest('button').blur();
    };
};

ko.applyBindings(new acnoir());