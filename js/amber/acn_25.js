export function acn() {
    return {
        Duke:
        {
            name: 'To be determined'
            , title: 'Politics and pageantry'
            , slot: '6-5'           
            , details: [
                { label: 'entourage', value: 'Dybele' }
            ]
            , download: './assets/files/ac25/duke.docx'
            , gm: 'Edith'
            , desc: {
                blurb: `Not a damn clue yet            `
                , pic: './assets/img/ac25/duke.png'
                , summary: 'Description'
            }
        },
        Jake:
        {
            name: 'Jake ...something'
            , title: 'Frat House Freak-out'
            , details: []
            , download: './assets/files/ac25/jake.docx'
            , slot: '7-4'
            , gm: 'Tym'
            , desc: {
                blurb: `TBD`
                , summary: 'Description'
                , pic: './assets/img/ac25/jake.png'
            }
        },
        baron: {
            name: 'baron Eamon Fargo'
            , title: 'Cocaine Werebear'
            , slot: '8-5'
            , gm: 'Richard C'
            , desc: {
                blurb: 'TBD'
                , pic: './assets/img/ac25/eamon.png'
                , summary:'Story'
            }
            , powers: []
            , stats: []
            , items: []
            , stuff: {}
            , download: 'assets/img/ac25/eamon.docx'
            , details:[]
        },
        unknown_1: {
            name: 'tbd'
            , title: 'Deadlier than the  ...'
            , slot: '9-1'
            , gm: 'Pete M'
            , desc: {
                blurb: 'TBD'
                , pic: './assets/img/ac25/unknown.png'
                , summary: 'Story'
            }
            , powers: []
            , stats: []
            , items: []
            , stuff: {}
            , download: 'assets/img/ac25/unknown.docx'
            , details: []
        },
        alexander:
        {
            name: 'Alexander Stranger'
            , title: 'A brand new world'
            , download: './assets/files/Alexander_Stranger.docx'
            , slot: '10-3'
            , gm: 'Paul J'
            , stats: [
                { stat: 'Psyche', value: 25, rank: 'Amber' }
                , { stat: 'Endurance', value: 15, rank: 'Amber' }
                , { stat: 'Strength', value: 5, rank: 'Amber' }
                , { stat: 'Warfare', value: -10, rank: 'Chaos' }
            ]
            , powers: [
                {
                    name: 'Energy Manipulation'
                    , type: 'Psionic'
                    , cost: 15
                    , details: 'Absorb, Create, Negate energy'
                }
                , {
                    name: 'Psychic Defense'
                    , type: 'Psionic'
                    , cost: 15
                    , details: 'Psychic, physical, elemental shielding'
                }
                , {
                    name: 'Walker'
                    , cost: 3
                    , details: 'Shadow trail, path, seek, Exegesis'
                }
                , {
                    name: 'Empathy'
                    , cost: 2
                    , details: 'Sense psyche'
                }
            ]
            , items: [
                {
                    name: 'Excellent suit'
                    , cost: 4
                    , qualities: ['Impervious armor']
                    , quantity: 1
                    , description: 'Tailor made indestructible edwardian style suit,grey'
                }
                ,
                {
                    name: 'Skeleton key'
                    , cost: 1
                    , qualities: ['mold shadow stuff']
                    , quantity: 1
                    , description: 'An odd looking key that seems to fit and open any mundane lock.'
                }
            ]
            , desc: {
                blurb: `Mister Stranger is a bit of a dreamer, a man of wealth and taste, who likes to think about things. He’s not a fighter, but he does have staying power. He takes great pride in his suit, which was tailor made for him; after all, as the song goes: every girl crazy for a sharp dressed man.
A while ago, he picked up a strange looking key. He’s not quite sure what it opens, as of yet… but it feels like it will unlock something important.`
                , pic: './assets/img/alexander.png'
                , summary: 'Description'
            }
        },
        jen:
        {
            name: 'Jennifer Rennes'
            , title: `On her Majesty's service`
            , details: [
                { label: 'full name', value: 'Princess Basilissa Regina Barimen of Benedict' }
            ]
            , download: './assets/files/jen.docx'
            , slot: '11-6'
            , gm: 'Scott'
            , stats: [
                { stat: 'Psyche', value: 20, rank: 'Amber' }
                , { stat: 'Strength', value: 0, rank: 'Amber' }
                , { stat: 'Endurance', value: 5, rank: 'Amber' }
                , { stat: 'Warfare', value: 35, rank: 'Amber' }
            ]
            , powers: [
                Object.assign({}, pattern, { cost: 0, details: 'free from character creation' })
                , conjuration
                , Object.assign({}, powerWords, {
                    type: 'Schang, Krolak, Askiir, Jask, Marsk'
                    , details: 'True Form, Neural Disrupt, Psyche Disrupt, Trump Disrupt, Weaken Structure'
                })
                , { name: 'Jewel of Rebma', type: 'initiate', cost: 10, details: 'Burnt into her left hand' }
            ]
            , items: [
                {
                    name: 'Studded glove'
                    , cost: 6
                    , qualities: ['deadly damage', 'alternate shapes']
                    , quantity: 1
                    , description: 'Glove, Gauntlet, Cestus, Dagger, Rapier, Claymore, Scissors, Pliers, Bolt cutter,  Crowbar, Baseball bat, Necklace'
                }
                , {
                    name: 'Suitable armor'
                    , cost: 10
                    , qualities: ['Impervious to Conventional Weapons', 'Limited Shape Shift', 'Danger Sense']
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
            , desc: {
                blurb: `Born to the name of Basilissa (and hating it, obviously), the youngest daughter of Benedict certainly isn’t the son he never had. Jenny isn’t regal, she’s not traditional, she certainly won’t apply herself to the tasks women are usually confined to (to her father’s annoyance), she’s not a really big fan of monarchy, and the only reason she even likes Random is because he’s actually quite fun to hang around with, when he’s not kinging around.  Having been taught Conjuration by Uncle Bleys and Power Words by Uncle Gerard, she makes it a point to get into as much trouble as she can whenever she’s around Amber. Anything to get a rise out of Dad, stoic bugger that he is.`
                , pic: './assets/img/jen3.png'
                , summary: 'Description'
            }
        }
    }
};