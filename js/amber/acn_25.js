export function acn() {
    return {
        Duke:
        {
            name: 'Duke Leopold Panzer'
            , title: 'Politics and pageantry'
            , slot: '6-5'
            , details: [
                { label: 'entourage', value: 'Dybele' }
            ]
            , download: './assets/files/ac25/duke.docx'
            , gm: 'Edith'
            , desc: {
                blurb: `Not a damn clue yet`
                , pic: './assets/img/ac25/Duke.png'
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
            name: 'Baron Eamon Fargo'
            , title: 'Cocaine Werebear'
            , slot: '8-5'
            , gm: 'Richard C'
            , desc: {
                blurb: `When Lady Alicia was seduced by king Oberon, she naively expected him to make her his next adoring queen… Turns out she was sorely mistaken. He stole her away to a castle in the country to bear his child, and when the boy was born, he went out of his way to declare him a baron, NOT a prince, and refused to acknowledge him as anything but a royal bastard. This way, the line of succession was secured, just in case things the kingdom would not weather the oncoming storm: Eamon is in line for the throne, but he’s dead last. He named the boy with an anagram for “Anagram of Oberon”, a name he knew would trouble him, just so he’d grow up angry enough to make his own way in life. Fourteen years later, with Oberon dead, so too have passed Lady Alicia’s dreams of one day returning to the court.She remains in Fargo Keep, reminiscing about the days of yore, and glory that passed her by.

And what of the boy?
Baron Eamon Fargo is a moody, brooding boy.He likes to lose himself in books when he can, as it takes him away from the realities of the politics around him, but what he really loves to do is run.He can run for hours, off the beaten path in the forests around the castle, where no one can find him and he can be alone.Away from all the stupid grownups with their stupid political agendas, away from his mother who keeps reminding him how great he could have been, away from the threats that come with being a son of Oberon now that he’s gone… he never asked for any of that.And so, he runs. 
It’s a blissful thing for him, to run.To have a cadence in his step, to see the world fly by, with no one who keeps up with him, no one who doesn’t understand, no one who tries take make him do stuff or be stuff, just him, by himself. If only running could also mean running away.`
                , pic: './assets/img/ac25/Eamon.png'
                , summary: 'Story'
            }
            , stats: [
                { stat: 'Psyche', value: 0, rank: 'Amber' }
                , { stat: 'Endurance', value: 20, rank: 'Amber' }
                , { stat: 'Strength', value: 15, rank: 'Amber' }
                , { stat: 'Warfare', value: 12, rank: 'Amber' }
            ]
            , items: [
                {
                    name: 'Signet Ring'
                    , cost: 4
                    , qualities: ['psychic sensitive (1)','alternate shapes(2)', 'Extra hard (1)']
                    , quantity: 1
                    , description: `The baronial signet ring, which turns invisible as soon as it's worn. It makes Eamon uncomfortable if he ever introduces himself without mentioning his full name and title. 
                    Shapes: (invisible) ring, hatchet, hunting knife, sparkrod and striker, skillet, compass, hook and line, collapsible spade, mocha coffee pot, arming sword, cestus`
                }
            ]
            , stuff: { type: 'Bad', value: 1 }
            , download: 'assets/img/ac25/Eamon.docx'
            , details: [
                { label: 'father', value: 'Oberon' }
                , { label: 'mother', value: 'Lady Alicia' }
                , { label: 'age', value: '14' }
                , { label: 'title', value: 'Baron (not prince), royal bastard' }
                , { label: 'Great outdoors', value: 'Love it.Open spaces, no confines, everywhere to run, and far away from all the stupid grownups.' }
                , { label: 'Loves Most', value: 'Running. Through the forest, mostly, but endurance running anywhere is great' }
                , { label: 'Hates Most', value: 'All the political bullshit that comes with being a 14 year old baron, and Oberon’s illegitimate son, too. Didn’t ask for it, don’t care, stop trying to use me for your own gain. Stop blaming me for everything. I never asked for any of this. ' }
                , { label: 'Favourite domestic animal', value: 'A tortoise. Basically a walking little brick with not a care in the world save for the occasional eagle/philosopher combo' }
                , { label: 'Favourite wild animal', value: 'A badger. Mostly solitary, keeps to itself, docile if left alone, but vicious enough to make even a bear think twice, when cornered.' }
            ]
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
            , download: './assets/files/ac25/Alexander_Stranger25.docx'
            , slot: '10-3'
            , gm: 'Paul J'
            , stats: [
                { stat: 'Psyche', value: 35, rank: 'Amber' }
                , { stat: 'Endurance', value: 25, rank: 'Amber' }
                , { stat: 'Strength', value: 10, rank: 'Amber' }
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
                    , qualities: ['Impervious armor (4)']
                    , quantity: 1
                    , description: 'Tailor made indestructible edwardian style suit,grey'
                }
                ,
                {
                    name: 'Skeleton key'
                    , cost: 1
                    , qualities: ['mold shadow stuff (1)']
                    , quantity: 1
                    , description: 'An odd looking key that seems to fit and open any mundane lock.'
                }
            ]
            , desc: {
                blurb: `Mister Stranger is a bit of a dreamer, a man of wealth and taste, who likes to think about things. He’s not a fighter, but he does have staying power. He takes great pride in his suit, which was tailor made for him; after all, as the song goes: every girl crazy for a sharp dressed man.
A while ago, he picked up a strange looking key. He’s not quite sure what it opens, as of yet… but it feels like it will unlock something important.`
                , pic: './assets/img/ac25/alex25.png'
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
            , download: './assets/files/ac25/jen25.docx'
            , slot: '11-6'
            , gm: 'Scott'
            , stats: [
                { stat: 'Psyche', value: 25, rank: 'Amber' }
                , { stat: 'Strength', value: 0, rank: 'Amber' }
                , { stat: 'Endurance', value: 5, rank: 'Amber' }
                , { stat: 'Warfare', value: 40, rank: 'Amber' }
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
                    , qualities: ['deadly damage (4)', 'alternate shapes (2)']
                    , quantity: 1
                    , description: 'Glove, Gauntlet, Cestus, Dagger, Rapier, Claymore, Scissors, Pliers, Bolt cutter,  Crowbar, Baseball bat, Necklace'
                }
                , {
                    name: 'Suitable armor'
                    , cost: 10
                    , qualities: ['Impervious to Conventional Weapons (4)', 'Limited Shape Shift (4)', 'Danger Sense (2)']
                    , quantity: 1
                    , description: 'This item takes any shape or form its wearer psychically calls for. It shifts into battle armor form automatically when it senses danger.'
                }
                , {
                    name: 'Deck of tricks'
                    , cost: 3
                    , qualities: ['Mold shadow stuff (1)']
                    , quantity: 52
                    , description: 'Whisper the desired effect and deal the card.'
                }
            ]
            , stuff: { type: 'Good', value: 1 }
            , desc: {
                blurb: `Born to the name of Basilissa (and hating it, obviously), the flame-haired daughter of Benedict certainly isn’t the son he never had. Jenny isn’t regal, she’s not traditional, she certainly won’t apply herself to the tasks women are usually confined to (to her father’s annoyance), she’s not a really big fan of monarchy, and the only reason she even likes Random is because he’s actually quite fun to hang around with, when he’s not kinging around. 
Having been taught Conjuration by Uncle Bleys and Power Words by Uncle Gerard, she makes it a point to get into as much trouble as she can whenever she’s around Amber. Anything to get a rise out of Dad, stoic bugger that he is.

The story so far:
After the last outing with her frenemy Princess Mireille things turned sour fast. There’s a grim irony in the fact Jennifer was only now starting to realize how much her father’s dreadful parenting had done for her; even though she hated the etiquette, the court shenanigans, the ballet lessons and the harpsichord, it made her pretty resilient towards social situations beyond her control. Mireille, despite all her freedom and all the things Jenn had wanted for herself growing up. never seemed to have learned that restraint; all she had learned from Benedict was to how to expect the very worst from the people around her. He had taught her to physically defend herself, but nothing else. No wonder Mireille had snapped; she simply didn’t know any better. Jenn almost felt sorry for her… if not for the fact she stabbed poor Charlie, Lord Cabra (he got better) and tried to kill Astrid, Jenn’s little sister. Oh, and Jenn too, but that was pretty much par for the course. She didn't really mind that, Jenn could fend for herself.
In the meantime, a lot of damage had been done. 
Jenn had gotten herself detained, then exiled. Sure, Random probably hadn’t meant it that way, but since she had formally come before him to turn herself in for quote unquote “laying hands on the Princess”, she chose to take his actions as formally as she should. After all, it was serious business. She received a thinly veiled pardon later on, which tried to indicate her exile was in error, but she had chosen to stay away from the Court nonetheless. Instead, she had returned to hated Rebma. Despite Queen Yvain’s orders never to return, she had to try and use her magic to help with rebuilding all that had been lost in the time spent fighting Mireille, instead of saving the city from ruin. After all, someone had to take responsibility for what had happened… 
`
                , pic: './assets/img/ac25/jen25_2.png'
                , summary: 'Story'
            }
        }
    }
};