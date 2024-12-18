
function acnoir() {
    var self = this;

    self.gameset = [];
    self.games = ko.observableArray([]);

    self.selectedGame = ko.observable({});

    self.importYear = function (e) {
        e.preventDefault();
        const amberBody = document.getElementById('bodyCover');
        const yr = e.target.dataset.year;

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
