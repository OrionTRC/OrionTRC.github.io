function reno() {
    return {
        name: 'Renegade Turner'
        , title:'Excuse me, are we related?'
        , details:[
            {label:'full name',value:'Renegade "Reno" Turner'}
            , {label: 'Lineage',value:'Florimel'}
        ]
        , download:'./assets/files/reno.docx'
        , slot:'8-1'
        , gm:'Stephen Quick'
        , stats: [
            { stat: 'Psyche', value: 20, rank:'Amber' }
            , { stat: 'Strength', value: 15, rank:'Amber'  }
            , { stat: 'Endurance', value: 5, rank:'Amber'  }
            , { stat: 'Warfare', value: 10, rank:'Amber'  }            
        ]
        , powers: [pattern]           
        , items: [
            {
                name: 'Nano-edged combat knife'
                , cost: 1
                , qualities: ['Extra hard']
                , quantity: 1
                , description: 'High-tech combat utility knife'
            }            
        ]
        , stuff: { type: 'Bad', value: -1 }
        , desc:{
            blurb:`Renegade “Reno” Turner is a son of Florimel. Ironically named, Flora had him trained to be dashing, devious, strong and ruthless. Knowing full well that she needed people to be enforcers at times, she utilizes him to scout out situations and ‘ deal’ with anything unsavory, which in turn keeps her hands clean. And if things go south, well, she’ll claim she had “nothing to do with whatever that silly boy is up to… it’s in the name, isn’t it?” \nSuffice to say Reno doesn’t like his mother very much. He’s acutely aware of the power she holds over him, though, so he dare not oppose her … yet.`
            , pic:'./assets/img/reno.png'
            , summary: 'Description'
        }
    };
};
