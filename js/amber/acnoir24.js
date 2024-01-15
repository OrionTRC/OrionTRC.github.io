function Acnoir24() {
  var self = this;

  self.games = ko.observableArray([
    tallman()
    , carl()
    , {
      name:''
      , title:'A brand new world'
      , slot:'7-2'
    }
    , reno()
    , jen()
    , {
      name:''
      , title:'Aurellis (Edwardiana)'
      , slot:'10-3'
    }
    , {
      name:''
      , title:'My first heist'
      , slot:'115'
    }
  ]);

  self.selectedGame = ko.observable({});

  self.selectGame = function(game,event){
    self.selectedGame(game);
    event.target.closest('button').blur();
  };
};

ko.applyBindings(new Acnoir24());