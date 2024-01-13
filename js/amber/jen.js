function jen() {
    return {
        name: 'Jennifer Rennes'
        , title: 'Long Live the Queen'
        , details:[
            {label:'full name',value:'Princess Basilissa Regina Barimen of Benedict'}
        ]
        , download:'./assets/files/jen.docx'
        , slot: '9-5'
        , gm:'Scott'
        , stats: [
            { stat: 'Psyche', value: 20, rank:'Amber' }
            , { stat: 'Strength', value: 0, rank:'Amber'  }
            , { stat: 'Endurance', value: 5, rank:'Amber'  }
            , { stat: 'Warfare', value: 35, rank:'Amber'  }
        ]
        , powers: [
            Object.assign(pattern, { cost: 0, details: 'free from character creation' })
            , conjuration
            , Object.assign(powerWords, {
                type: 'Schang, Krolak, Askiir, Jask, Marsk'
                , details: 'True Form, Neural Disrupt, Psyche Disrupt, Trump Disrupt, Weaken Structure'
            })
            , { name: 'Jewel of Rebma', type: 'initiate', cost: 10, details: 'Burnt into her left hand' }
        ]
        , items: [
            {
                name: 'Studded glove'
                , cost: 6
                , qualities: ['deadly damage','alternate shapes']
                , quantity: 1
                , description: 'Glove, Gauntlet, Cestus, Dagger, Rapier, Claymore, Scissors, Pliers, Bolt cutter,  Crowbar, Baseball bat, Necklace'
            }
            , {
                name: 'Suitable armor'
                , cost: 10
                , qualities: ['Impervious to Conventional Weapons','Limited Shape Shift','Danger Sense']
                , quantity: 1
                , description: 'This item takes any shape or form its wearer psychically calls for. It shifts into battle armor form automatically when it senses danger.'
            }
            , {
                name: 'Deck of tricks'
                , cost: 3
                , qualities: ['Mold shadow stuff']
                , quantity: 52
                , description: 'Whisper the desired effect and deal the card.'
            }
        ]
        , stuff: { type: 'Good', value: 1 }
        , desc:{
            blurb:`Born to the name of Basilissa (and hating it, obviously), the youngest daughter of Benedict certainly isn’t the son he never had. Jenny isn’t regal, she’s not traditional, she certainly won’t apply herself to the tasks women are usually confined to (to her father’s annoyance), she’s not a really big fan of monarchy, and the only reason she even likes Random is because he’s actually quite fun to hang around with, when he’s not kinging around.  Having been taught Conjuration by Uncle Bleys and Power Words by Uncle Gerard, she makes it a point to get into as much trouble as she can whenever she’s around Amber. Anything to get a rise out of Dad, stoic bugger that he is.`
            , pic:'./assets/img/jen.png'
        }
    };
};
