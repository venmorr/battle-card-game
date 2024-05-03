// imports
import alphaImage from '../src/assets/Alpha.png'
import bettaImage from '../src/assets/Betta.png'
import gammaImage from '../src/assets/Gamma.png'
import deltaImage from '../src/assets/Delta.png'
import epsilonImage from '../src/assets/Epsilon.png'
import zetaImage from '../src/assets/Zeta.png'
import etaImage from '../src/assets/Eta.png'
import thetaImage from '../src/assets/Theta.png'


const cardData = [
    {
        title: 'Alpha: Wolf Warrior',
        hp: '10',
        abilityTitle: 'Frosty Fangs:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Can use basic attack cards as counter attack cards.`,
        atk: '3',
        def: '2',
        spe: '1',
        int: '5',
        image: alphaImage
    },

    {
        title: 'Batta: Fish Fighter',
        hp: '08',
        abilityTitle: 'Distraction Scales:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Allows you to swap the first battle card you've played during the combat phase with one from your hand after observing your opponent's response.`,
        atk: '3',
        def: '1',
        spe: '2',
        int: '7',
        image: bettaImage
    },

    {
        title: 'Gamma: Gorgon Guardian',
        hp: '12',
        abilityTitle: 'Stone Gaze:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Renders opponent's battle card ineffective if it has a lower intelligence value.`,
        atk: '4',
        def: '3',
        spe: '1',
        int: '6',
        image: gammaImage
    },

    {
        title: 'Delta: Hydra Horrors',
        hp: '15',
        abilityTitle: 'Regeneration:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Restores 2 HP at the start of each combat phase.`,
        atk: '3',
        def: '4',
        spe: '1',
        int: '5',
        image: deltaImage
    },

    {
        title: 'Epsilon: Cyclops Crusher',
        hp: '18',
        abilityTitle: 'Mighty Blow:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Doubles attack power for one turn, but lowers defense by 2.`,
        atk: '5',
        def: '2',
        spe: '1',
        int: '4',
        image: epsilonImage
    },

    {
        title: 'Zeta: Zeus\'s Fury',
        hp: '20',
        abilityTitle: 'Lightning Bolt:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Deals 5 damage to opponent's HP directly once per battle.`,
        atk: '3',
        def: '2',
        spe: '2',
        int: '6',
        image: zetaImage
    },

    {
        title: 'Eta: Artemis\'s Arrow',
        hp: '10',
        abilityTitle: 'Precision Shot:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Ignores opponent's defense stat when attacking.`,
        atk: '4',
        def: '1',
        spe: '4',
        int: '5',
        image: etaImage
    },

    {
        title: 'Theta: Titan\'s Roar',
        hp: '25',
        abilityTitle: 'Earthquake:',
        abilitySubtitle: 'Battle Ability',
        abilityText: `Lowers opponent's defense by 3 for one turn.`,
        atk: '4',
        def: '3',
        spe: '1',
        int: '3',
        image: thetaImage
    }
]

export default cardData