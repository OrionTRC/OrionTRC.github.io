function Acnoir24() {
  var self = this;

  self.games = ko.observableArray([
    {
        name:'The Tall Man'
        , title:'Burning Coal'
        , slot:'5-2'
    }
    , {
      name: 'Carloman Randolph'
      , title: 'Who killed Julian'
      , slot:'6-3'
    }
    , {
      name:'?'
      , title:'A brand new world'
      , slot:'7-2'
    }
    , {
      name:'?'
      , title:'Excuse me, are we related?'
      , slot:'8-1'
    }
    , {
      name: 'Jennifer Rennes'
      , title: 'Long Live the Queen'
      , slot:'9-5'
    }
    , {
      name:'?'
      , title:'Aurellis (Edwardiana)'
      , slot:'10-3'
    }
    , {
      name:'?'
      , title:'My first heist'
      , slot:'115'
    }
  ]);
};

ko.applyBindings(new Acnoir24());