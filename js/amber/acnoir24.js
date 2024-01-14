function Acnoir24() {
  var self = this;

  self.games = ko.observableArray([
    {
        name:'The Tall Man'
        , title:'Burning Coal'
        , slot:'5-2'
        , powers:[
          {
            name:'Relentless'
            , type:'strength'
            , details:'Will not stop. Ever'
          }
          ,{
            name:'Strong-willed'
            , type:'strength'
          }
          , {
            name:'Vulnerable to cold'
            , type:'weakness'
          }
          ,{
            name:'Master of Illusion'
            , type:'special'
          }
        ]
    }
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