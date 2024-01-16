import {jen} from './jen.js';
import {carl} from './carl.js';
import {tallman} from './tallman.js';
import {reno} from './reno.js';

function Acnoir24() {
  var self = this;

  self.games = ko.observableArray([
    tallman?.()
    , carl?.()
    , {
      name:''
      , title:'A brand new world'
      , slot:'7-2'
    }
    , reno?.()
    , jen?.()
    , {
      name:''
      , title:'Aurellis (Edwardiana)'
      , slot:'10-3'
    }
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

ko.applyBindings(new Acnoir24());