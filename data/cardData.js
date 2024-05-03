// imports
import alphaImage from '../src/assets/Alpha.png'
import bettaImage from '../src/assets/Betta.png'
import gammaImage from '../src/assets/Gamma.png'
import deltaImage from '../src/assets/Delta.png'
import epsilonImage from '../src/assets/Epsilon.png'
import zetaImage from '../src/assets/Zeta.png'
import etaImage from '../src/assets/Eta.png'
import thetaImage from '../src/assets/Theta.png'
// import iotaImage from '../src/assets/Iota.png'
// import kappaImage from '../src/assets/Kappa.png'
// import lambdaImage from '../src/assets/Lambda.png'
// import muImage from '../src/assets/Mu.png'
// import nuImage from '../src/assets/Nu.png'
// import xiImage from '../src/assets/Xi.png'
// import omicronImage from '../src/assets/Omicron.png'
// import piImage from '../src/assets/Pi.png'
// import rhoImage from '../src/assets/Rho.png'
// import sigmaImage from '../src/assets/Sigma.png'
// import tauImage from '../src/assets/Tau.png'
// import upsilonImage from '../src/assets/Upsilon.png'
// import phiImage from '../src/assets/Phi.png'
// import chiImage from '../src/assets/Chi.png'
// import psiImage from '../src/assets/Psi.png'
// import omegaImage from '../src/assets/Omega.png'

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
    },

    // {
    //     title: 'Iota: Inferno Imp',
    //     hp: '11',
    //     abilityTitle: 'Fireball Frenzy:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Launches a blazing fireball that deals 3 damage to opponent's HP.`,
    //     atk: '4',
    //     def: '1',
    //     spe: '3',
    //     int: '7',
    //     image: iotaImage
    // },

    // {
    //     title: 'Kappa: Kraken Commander',
    //     hp: '12',
    //     abilityTitle: 'Tidal Wave:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Unleashes a powerful tidal wave that reduces opponent's SPE by 2.`,
    //     atk: '3',
    //     def: '3',
    //     spe: '2',
    //     int: '6',
    //     image: kappaImage
    // },

    // {
    //     title: 'Lambda: Lightning Lancer',
    //     hp: '9',
    //     abilityTitle: 'Thunder Strike:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Channels lightning energy into a devastating attack that paralyzes opponent for one turn.`,
    //     atk: '5',
    //     def: '1',
    //     spe: '3',
    //     int: '6',
    //     image: lambdaImage
    // },

    // {
    //     title: 'Mu: Mystic Mage',
    //     hp: '10',
    //     abilityTitle: 'Arcane Shield:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Creates a protective shield that absorbs 3 damage.`,
    //     atk: '2',
    //     def: '4',
    //     spe: '2',
    //     int: '6',
    //     image: muImage
    // },

    // {
    //     title: `Nu: Nature's Nymph`,
    //     hp: '11',
    //     abilityTitle: 'Forest Blessing:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Summons a healing aura that restores 2 HP to all friendly units.`,
    //     atk: '2',
    //     def: '2',
    //     spe: '3',
    //     int: '7',
    //     image: nuImage
    // },

    // {
    //     title: 'Xi: Xenon Xerxes',
    //     hp: '13',
    //     abilityTitle: 'Photon Beam:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Emits a concentrated beam of light that deals 4 damage to opponent's HP.`,
    //     atk: '3',
    //     def: '2',
    //     spe: '2',
    //     int: '7',
    //     image: xiImage
    // },

    // {
    //     title: 'Omicron: Ocean Oracle',
    //     hp: '12',
    //     abilityTitle: 'Aqua Barrier:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Creates a protective barrier of water that reduces incoming damage by 2.`,
    //     atk: '2',
    //     def: '3',
    //     spe: '2',
    //     int: '7',
    //     image: omicronImage
    // },

    // {
    //     title: 'Pi: Pyro Phoenix',
    //     hp: '14',
    //     abilityTitle: 'Inferno Rebirth:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Rises from the ashes with renewed strength, restoring HP to full.`,
    //     atk: '4',
    //     def: '2',
    //     spe: '2',
    //     int: '6',
    //     image: piImage
    // },

    // {
    //     title: 'Rho: Ragnarok Rider',
    //     hp: '15',
    //     abilityTitle: 'Apocalyptic Charge:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Unleashes a devastating charge that deals 6 damage to opponent's HP.`,
    //     atk: '5',
    //     def: '3',
    //     spe: '2',
    //     int: '5',
    //     image: rhoImage
    // },

    // {
    //     title: 'Sigma: Shadow Shifter',
    //     hp: '10',
    //     abilityTitle: 'Ethereal Evasion:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Vanishes into the shadows, dodging opponent's attack.`,
    //     atk: '3',
    //     def: '2',
    //     spe: '4',
    //     int: '6',
    //     image: sigmaImage
    // },

    // {
    //     title: 'Tau: Thunder Titan',
    //     hp: '20',
    //     abilityTitle: 'Thunderous Roar:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Emit a deafening roar that stuns opponent for one turn.`,
    //     atk: '4',
    //     def: '4',
    //     spe: '1',
    //     int: '5',
    //     image: tauImage
    // },

    // {
    //     title: 'Upsilon: Undying Warlock',
    //     hp: '12',
    //     abilityTitle: 'Soul Drain:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Drains opponent's life force, restoring 3 HP.`,
    //     atk: '3',
    //     def: '2',
    //     spe: '2',
    //     int: '8',
    //     image: upsilonImage
    // },

    // {
    //     title: 'Phi: Phoenix Fury',
    //     hp: '18',
    //     abilityTitle: 'Blazing Inferno:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Engulfs opponent in a blazing inferno, dealing 4 damage per turn for 3 turns.`,
    //     atk: '4',
    //     def: '2',
    //     spe: '2',
    //     int: '6',
    //     image: phiImage
    // },

    // {
    //     title: 'Chi: Chaos Champion',
    //     hp: '16',
    //     abilityTitle: 'Chaos Strike:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Unleashes a chaotic strike that deals 5 damage and confuses opponent.`,
    //     atk: '5',
    //     def: '2',
    //     spe: '1',
    //     int: '6',
    //     image: chiImage
    // },

    // {
    //     title: 'Psi: Psychic Sorcerer',
    //     hp: '14',
    //     abilityTitle: 'Mind Control:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Takes control of opponent's mind, forcing them to attack themselves.`,
    //     atk: '3',
    //     def: '2',
    //     spe: '3',
    //     int: '6',
    //     image: psiImage
    // },

    // {
    //     title: 'Omega: Overlord of the Abyss',
    //     hp: '25',
    //     abilityTitle: 'Dark Dominion:',
    //     abilitySubtitle: 'Battle Ability',
    //     abilityText: `Engulfs the battlefield in darkness, nullifying opponent's abilities for 3 turns.`,
    //     atk: '6',
    //     def: '5',
    //     spe: '1',
    //     int: '7',
    //     image: omegaImage
    // }    
]

export default cardData