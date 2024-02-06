import {tallman,carl,jen,reno,alicia,alexander} from './acn24.js';

function acnoir() {
  var self = this;

  self.games = ko.observableArray([
    tallman?.()
    , carl?.()
    , alexander?.()
    , reno?.()
    , jen?.()
    , alicia?.()
    , {
      name:'Zach Whitfield'
      , title:'My first heist'
      , slot:'11-5'
    }
  ]);

  self.selectedGame = ko.observable({});

  self.selectGame = function(game,event){
    self.selectedGame(game);
    event.target.closest('button').blur();
  };
};

ko.applyBindings(new acnoir());