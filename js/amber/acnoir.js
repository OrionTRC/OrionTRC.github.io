//powers
const
    brokenPattern = {
        name: 'Broken Pattern'
        , type: 'imprint'
        , cost: 10
        , details: ''
    }
    , pattern = {
        name: 'Pattern'
        , type: 'imprint'
        , cost: 50
        , details: ''
    }
    , logrus = {
        name: 'Logrus'
        , type: 'mastery'
        , cost: 45
        , details: ''
    }
    , trump = {
        name: 'Trump'
        , type: 'artistry'
        , cost: 40
        , details: ''
    }
    , shapeshifting = {
        name: 'Shapeshifting'
        , type: ''
        , cost: 35
        , details: ''
    }
    , powerWords = {
        name: 'Power words'
        , type: ''
        , cost: 10
        , details: ''
    }
    , sorcery = {
        name: 'Sorcery'
        , type: ''
        , cost: 15
        , details: ''
    }
    , conjuration = {
        name: 'Conjuration'
        , type: 'basic'
        , cost: 20
        , details: ''
    }


//page binding
function acnoir() {
    var self = this;

    self.gameset = [];
    self.games = ko.observableArray([]);
    self.selectedGame = ko.observable({});

    self.importYear = function (e) {
        e.preventDefault();
        const yr = e.target.dataset.year;

        import(`./acn_${yr}.js`).then((mod) => {
            self.gameset = [...Object.values(mod.acn())];
            self.games(self.gameset);
        }).catch(() => {
            self.games([]);
        });
    };

    self.selectGame = function (game, event) {
        self.selectedGame(game);
        event.target.closest('button').blur();
    };
};

ko.applyBindings(new acnoir());