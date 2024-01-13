function jen() {
    return {
        name: 'Jennifer Rennes'
        , title: 'Long Live the Queen'
        , slot: '9-5'
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
    };
};
