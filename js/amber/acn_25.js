export function acn() {
    const
        img = '../assets/img/ac25'
        , file = '../assets/files/ac25';

    return {
        Duke:
        {
            name: 'Duke Leopold Panzer'
            , title: 'Politics and pageantry'
            , slot: '6-5'
            , details: [
                { label: 'birth name', value: '(unpronounceable growling roar)' }
                , { label: 'title', value: 'Duke of Fieras' }
                , { label: 'race', value: 'Mrrshan' }
                , { label: 'entourage', value: 'Dybele’s Intergalactic Empire' }
                , { label: 'role (official)', value: 'Emissary on behalf of the Mrrshan to the courts' }
                , { label: 'role (unoffical)', value: 'Military advisor' }
                , { label: 'motivation', value: 'The empire can not fall, lest the Mrrshan will fall to civil war' }

            ]
            , skills: [
                { skill: 'Melêe Combat', value: 'As an 8ft tall murder cat and warlord: excellent' }
                , { skill: 'Military tactics/ strategy', value: 'Military advisor to the throne' }
                , { skill: 'Heightened sense of smell', value: 'Apex predator' }
                , { skill: 'Human interaction', value: 'struggling' }
                , { skill: 'Physical integration', value: 'nothing is my size.' }
            ]
            , download: `${file}/duke.docx`
            , gm: 'Edith'
            , desc: {
                blurb: `Duke Panzer is an 8 foot tall (2.50m) anthropomorphic panther from a feudal, feral, high gravity jungle world. His name is a bit of a joke; his real name is unpronounceable to humans (sounding something like a growling roar), but due to his appearance and his size (built like a tank), he was named Leopold Panzer by a courtier and the name stuck. The courtier himself did not stick around, though, not after the Duke found out about the joke.

Panzer was a Duke on Fieras, his home world, a high ranking warlord who had the ear of the Lion throne itself. That is… until Dybele and her humans came. At first, they seemed no threat at all. After all, humans are squishy compared to a Mrrshan. They’re small, hairless, weak, have no claws or teeth to speak of, and they break easily. Only… they don’t die easily. And they won’t stop coming. No matter how many battles the Mrrshan won, the humans would return in greater numbers. No matter how long the battle lasted, the humans kept going. No matter how devastating the victory, the humans never sounded defeat… How do you win against an enemy who just won’t lose? In the end, it was Panzer who had to suggest to the Lion throne that this war could not be won, and that the only way he saw for his people to survive was to capitulate and join the Intergalactic Empire. His shame was unrivalled: never had the Mrrshan ever ceded a battle, let alone surrendered. It was the highest dishonour, and for his shame, Panzer was exiled from Fieras, to join the humans he had elevated above his people as the Mrrshan emissary. He can never go home.
                
Given the current negotiations, the Duke has some concerns:
o	Dybele doesn’t react well to being told “no”. She is used to wielding ultimate power, and to have someone oppose her, and oppose her so forcefully, it’s bound to lead her to make mistakes, be it out of pride, anger, or even insecurity.
o	Oberon’s forces are completely alien to theirs, and the cultural mismatch will prove difficult to manage.
o	There are always those looking to benefit from Chaos. There might be those who wish to dethrone or supplant Dybele, those who are out for revenge, those who think that the war could end by assassinating either or both of the monarchs, those who think they’ll profit from the extension of the war…. Everyone is suspect.
`
                , pic: `${img}/Duke.png`
                , summary: 'Description'
            }
        },
        Jake:
        {
            name: 'Jake Gallo'
            , title: 'Frat House Freak-out'
            , details: [
                { label: 'age', value: 23 }
                , { label: 'current major', value: 'Art, Culture and Media' }
            ]
            , download: `${file}/Jake.docx`
            , slot: '7-4'
            , gm: 'Tym'
            , desc: {
                blurb: `At the age of 23, you’d think Jake would be closer to finishing his studies than he’d be to starting them, but he’s jumped majors again. He started in Social Studies, then switched to Psychology, and now he’s trying his hand at Art, Culture and Media. And why? Well…. His late uncle left him a handsome stipend to absolutely not graduate, ever. He hadn’t intended to, of course. The poor man thought he’d be helping his nephew through university, but the setup was that as long as Jake did well enough and wasn’t expelled, he’d receive a sum from a trust fund each year that would enable him to live quite comfortably. Said arrangement would end as soon as he graduated, however, since his uncle imagined Jake should be able to make his own way in life from then on. The rest of the trust fund was destined to go to his uncle’s church. 
Jake never went to church, and even if he had, he didn’t particularly think his uncle’s church really needed all that money. So, he resolved to stay in University indefinitely, or at least as long as he could possibly manage.

Jake comes across as a bit of an airheaded dreamer, which is an image he carefully crafted so people wouldn’t question why he keeps switching majors... “That’s just how it is, you know. Gotta go where the wind takes you, man. Don’t get stuck in the grind, or it’ll grind you down”. Appearances notwithstanding, he does actually work hard at his studies; it’d be unfair to his uncle if he wouldn’t, and besides, if he were to find himself failed out of or expelled from the university, there went his trust fund too.  For the same reason, he keeps himself in good shape: a healthy body is a healthy mind, after all. People who don’t know him would be surprised how his lanky appearance hid a runner’s physique.
In the evenings, Jake supplements his income by playing poker, once again aided by his appearances… no one expects the hippie to take home more than he came in with. He makes sure never to win too much, though, as he imagines life is easier without enemies. 
`
                , summary: 'Description'
                , pic: `${img}/Jake.webp`
            }
            , stats: [
                { stat: 'Psyche', value: 5, rank: 'Chaos +' }
                , { stat: 'Endurance', value: -5, rank: 'Chaos -' }
                , { stat: 'Strength', value: 3, rank: 'Chaos +' }
                , { stat: 'Warfare', value: -10, rank: 'Chaos -' }
                , { stat: 'Wealth', value: 1, rank: '' }
                , { stat: 'Luck', value: 2, rank: '' }
            ]
            , powers: [
                {
                    name: 'Power words'
                    , type: 'Defensive Luck, Process surge'
                    , cost: 4
                    , details: 'Defensive Luck invoked by going “Fuck” intensely, Process surge by thumping something hard (Like Fonzie could)'
                }
            ]
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
                , pic: `${img}/Eamon.png`
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
                    , qualities: ['psychic sensitive (1)', 'alternate shapes(2)', 'Extra hard (1)']
                    , quantity: 1
                    , description: `The baronial signet ring, which turns invisible as soon as it's worn. It makes Eamon uncomfortable if he ever introduces himself without mentioning his full name and title. 
                    Shapes: (invisible) ring, hatchet, hunting knife, sparkrod and striker, skillet, compass, hook and line, collapsible spade, moka coffee pot, arming sword, cestus`
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
            name: `Sam o'Hara`
            , title: 'Deadlier than the  ...'
            , slot: '9-1'
            , gm: 'Pete M'
            , desc: {
                blurb: 'used to work for a consortia of criminal groups, but is currently in dispute with them. Supposedly they have hired the Baba Yaga to resolve this situation. Currently on the run.'
                , pic: `${img}/Sam.webp`
                , summary: 'Description'
            }
            , powers: [
                {
                    name: 'Shadow Mask'
                    , details: 'pull a shadow down from the brim of his hat or up from beneath your collar and wrap it around your head, rendering you completely unrecognizable to human eyes or electronic surveillance equipment (even equipment designed specifically to see in darkness). Your voice becomes an unidentifiable whisper. You can see through this mask, and some other people can recognize you through it. The shadow mask lasts for a maximum of 1 scene. You can will it to disperse before that period elapses, but otherwise, it remains in place the whole time even if you are unconscious.Useable 3 times in the session'
                }
            ]
            , stats: [
                { stat: 'Psyche', value: 10, rank: 'Superhuman' }
                , { stat: 'Endurance', value: 12, rank: 'Superhuman' }
                , { stat: 'Strength', value: 14, rank: 'Superhuman' }
                , { stat: 'Warfare', value: 14, rank: 'Superhuman' }
                , { stat: 'Presence', value: 13, rank: 'Superhuman' }
            ]
            , items: [
                {
                    name: 'tools of the trade'
                    , description: 'Large bag of guns'
                }
            ]
            , skills: [
                { skill: 'melee', value: 'unarmed, knife, club' }
                , { skill: 'firearms', value: 'all small arms' }
                , { skill: 'other skills', value: 'stealth, mechanic' }
                , { skill: 'education', value: 'high school and experience' }
                , { skill: 'linguistics', value: 'English, Italian, Russian, Korean' }
            ]
            , stuff: { type: 'Good', value: 2 }
            , download: 'assets/files/ac25/sam.docx'
            , details: [
                { label: 'name', value: `Samantha o'Hara` }
                , { label: 'age', value: 24 }
                , { label: 'occupation', value: 'former mob assassin' }
                , { label: 'current occupation', value: 'on the run' }
            ]
        },
        alexander:
        {
            name: 'Alexander Stranger'
            , title: 'A brand new world'
            , download: `${file}/Alexander_Stranger25.docx`
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
                , pic: `${img}/alex25.png`
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
            , download: `${file}/jen25.docx`
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
                , pic: `${img}/jen25_2.png`
                , summary: 'Story'
            }
        }
    }
};
