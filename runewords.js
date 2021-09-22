const runewords = [
    {
        name: "Ancient's Pledge",
        clvl: 21,
        runes: [
            'Ral',
            'Ort',
            'Tal',
        ],
        itemTypes: [
            'Shields',
        ],
        effects: [
            "+50% Enhanced Defense",
            "Cold Resist +43%",
            "Fire Resist +48% (Ral=35%)",
            "Lightning Resist +48% (Ort=35%)",
            "Poison Resist +48% (Tal=35%)",
            "10% Damage Goes To Mana",
        ],
    },
    {
        name: "Beast",
        clvl: 63,
        runes: [
            'Ber',
            'Tir',
            'Um',
            'Mal',
            'Lum',
        ],
        itemTypes: [
            'Axes',
            'Hammers',
            'Scepters',
        ],
        effects: [
            "Level 9 Fanaticism Aura When Equipped",
            "+40% Increased Attack Speed",
            "+240-270% Enhanced Damage (varies)",
            "20% Chance of Crushing Blow (Ber)",
            "25% Chance of Open Wounds (Um)",
            "+3 To Werebear",
            "+3 To Lycanthropy",
            "Prevent Monster Heal (Mal)",
            "+25-40 To Strength (varies)",
            "+10 To Energy (Lum)",
            "+2 To Mana After Each Kill (Tir)",
            "Level 13 Summon Grizzly (5 Charges)",
        ],
    },
]






// Black ThulIoNef Thul(10) + Io(16) + Nef(4) Clubs, Hammers, Maces {
//     3
// } Clvl Required: 35



// Bone SolUmUm Sol(12) + Um(22) + Um(22) Armor {
//     3
// } Clvl Required: 47



// Bramble RalOhmSurEth Ral(8) + Ohm(27) + Sur(29) + Eth(5) Armor {
//     4
// } Clvl Required: 61



// Brand JahLoMalGul Jah(31) + Lo(28) + Mal(23) + Gul(25) Missile Weapons {
//     4
// } Clvl Required: 65



// Breath of the Dying VexHelElEldZodEth Vex(26) + Hel(15) + El(1) + Eld(2) + Zod(33) + Eth(5) All Weapons {
//     6
// } Clvl Required: 69



// Call to Arms AmnRalMalIstOhm Amn(11) + Ral(8) + Mal(23) + Ist(24) + Ohm(27) Weapons {
//     5
// } Clvl Required: 57



// Chains of Honor DolUmBerIst Dol(14) + Um(22) + Ber(30) + Ist(24) Armor {
//     4
// } Clvl Required: 63



// Chaos FalOhmUm Fal(19) + Ohm(27) + Um(22) Claws {
//     3
// } Clvl Required: 57



// Crescent Moon ShaelUmTir Shael(13) + Um(22) + Tir(3) Axes, Polearms & Swords {
//     3
// } Clvl Required: 47



// Death HelElVexOrtGul Hel(15) + El(1) + Vex(26) + Ort(9) + Gul(25) Swords & Axes {
//     5
// } Clvl Required: 55



// Delirium LemIstIo Lem(20) + Ist(24) + Io(16) Headgear(all types) {
//     3
// } Clvl Required: 51



// Destruction VexLoBerJahKo Vex(26) + Lo(28) + Ber(30) + Jah(31) + Ko(18) Polearms & Swords {
//     5
// } Clvl Required: 65



// Doom HelOhmUmLoCham Hel(15) + Ohm(27) + Um(22) + Lo(28) + Cham(32) Axes, Hammers & Polearms {
//     5
// } Clvl Required: 67



// Dragon SurLoSol Sur(29) + Lo(28) + Sol(12) Armor, Shields {
//     3
// } Clvl Required: 61



// Dream IoJahPul Io(16) + Jah(31) + Pul(21) Headgear, Shields {
//     3
// } Clvl Required: 65



// Duress ShaelUmThul Shael(13) + Um(22) + Thul(10) Armor {
//     3
// } Clvl Required: 47



// Edge TirTalAmn Tir(3) + Tal(7) + Amn(11) Missile Weapons {
//     3
// } Clvl Required: 25



// Enigma   JahIthBer Jah(31) + Ith(6) + Ber(30) Armor {
//     3
// } Clvl Required: 65



// Enlightenment PulRalSol Pul(21) + Ral(8) + Sol(12) Armor {
//     3
// } Clvl Required: 45



// Eternity AmnBerIstSolSur Amn(11) + Ber(30) + Ist(24) + Sol(12) + Sur(29) All Melee Weapons {
//     5
// } Clvl Required: 63



// Exile VexOhmIstDol Vex(26) + Ohm(27) + Ist(24) + Dol(14) Shields {
//     4
// } Clvl Required: 57



// Faith OhmJahLemEld Ohm(27) + Jah(31) + Lem(20) + Eld(2) Missile Weapons {
//     4
// } Clvl Required: 65



// Famine FalOhmOrtJah Fal(19) + Ohm(27) + Ort(9) + Jah(31) Axes & Hammers {
//     4
// } Clvl Required: 65



// Fortitude ElSolDolLo El(1) + Sol(12) + Dol(14) + Lo(28) Weapons & Armor {
//     4
// } Clvl Required: 59



// Fury JahGulEth Jah(31) + Gul(25) + Eth(5) All Melee Weapons {
//     3
// } Clvl Required: 65



// Gloom FalUmPul Fal(19) + Um(22) + Pul(21) Armor {
//     3
// } Clvl Required: 47



// Grief EthTirLoMalRal Eth(5) + Tir(3) + Lo(28) + Mal(23) + Ral(8) Swords & Axes {
//     5
// } Clvl Required: 59



// Hand of Justice SurChamAmnLo Sur(29) + Cham(32) + Amn(11) + Lo(28) All Weapons {
//     4
// } Clvl Required: 67



// Harmony TirIthSolKo Tir(3) + Ith(6) + Sol(12) + Ko(18) Missile Weapons {
//     4
// } Clvl Required: 39



// Heart of the Oak KoVexPulThul Ko(18) + Vex(26) + Pul(21) + Thul(10) Staves & Maces {
//     4
// } Clvl Required: 55



// Holy Thunder EthRalOrtTal Eth(5) + Ral(8) + Ort(9) + Tal(7) Scepters {
//     4
// } Clvl Required: 23



// Honor AmnElIthTirSol Amn(11) + El(1) + Ith(6) + Tir(3) + Sol(12) All Melee Weapons {
//     5
// } Clvl Required: 27



// Ice AmnShaelJahLo Amn(11) + Shael(13) + Jah(31) + Lo(28) Missile Weapons {
//     4
// } Clvl Required: 65



// Infinity BerMalBerIst Ber(30) + Mal(23) + Ber(30) + Ist(24) Polearms {
//     4
// } Clvl Required: 63



// Insight RalTirTalSol Ral(8) + Tir(3) + Tal(7) + Sol(12) Polearms & Staves {
//     4
// } Clvl Required: 27



// King's Grace AmnRalThul Amn (11) + Ral (8) + Thul (10)  Swords & Scepters {
// 3
// } Clvl Required: 25



// Kingslayer MalUmGulFal Mal(23) + Um(22) + Gul(25) + Fal(19) Swords & Axes {
//     4
// } Clvl Required: 53



// Last Wish JahMalJahSurJahBer Jah(31) + Mal(23) + Jah(31) + Sur(29) + Jah(31) + Ber(30) Axes, Hammers & Swords {
//     6
// } Clvl Required: 65



// Lawbringer AmnLemKo Amn(11) + Lem(20) + Ko(18) Hammers, Scepters & Swords {
//     3
// } Clvl Required: 43



// Leaf TirRal Tir(3) + Ral(8) Staves {
//     2
// } Clvl Required: 19



// Lionheart HelLumFal Hel(15) + Lum(17) + Fal(19) Armor {
//     3
// } Clvl Required: 41



// Lore OrtSol Ort(9) + Sol(12) Headgear {
//     2
// } Clvl Required: 27



// Malice IthElEth Ith(6) + El(1) + Eth(5)  All Melee Weapons {
//     3
// } Clvl Required: 15



// Melody ShaelKoNef Shael(13) + Ko(18) + Nef(4) Missile Weapons {
//     3
// } Clvl Required: 39



// Memory LumIoSolEth Lum(17) + Io(16) + Sol(12) + Eth(5) Staves {
//     4
// } Clvl Required: 37



// Myth HelAmnNef Hel(15) + Amn(11) + Nef(4) Armor {
//     3
// } Clvl Required: 25



// Nadir NefTir Nef(4) + Tir(3) Headgear(all types) {
//     2
// } Clvl Required: 13



// Oath ShaelPulMalLum Shael(13) + Pul(21) + Mal(23) + Lum(17) Axes, Maces & Swords {
//     4
// } Clvl Required: 59



// Obedience HelKoThulEthFal Hel(15) + Ko(18) + Thul(10) + Eth(5) + Fal(19) Polearms {
//     5
// } Clvl Required: 41



// Passion DolOrtEldLem Dol(14) + Ort(9) + Eld(2) + Lem(20) All Weapons {
//     4
// } Clvl Required: 43



// Peace ShaelThulAmn Shael(13) + Thul(10) + Amn(11) Armor {
//     3
// } Clvl Required: 29



// Phoenix VexVexLoJah Vex(26) + Vex(26) + Lo(28) + Jah(31) Weapons & Shields {
//     4
// } Clvl Required: 65



// Pride ChamSurIoLo Cham(32) + Sur(29) + Io(16) + Lo(28) Polearms {
//     4
// } Clvl Required: 67



// Principle RalGulEld Ral(8) + Gul(25) + Eld(2) Armor {
//     3
// } Clvl Required: 55



// Prudence MalTir Mal(23) + Tir(3) Armor {
//     2
// } Clvl Required: 49



// Radiance NefSolIth Nef(4) + Sol(12) + Ith(6) Headgear {
//     3
// } Clvl Required: 27



// Rain OrtMalIth Ort(9) + Mal(23) + Ith(6) Armor {
//     3
// } Clvl Required: 49



// Rhyme ShaelEth Shael(13) + Eth(5) Shields {
//     2
// } Clvl Required: 29



// Rift HelKoLemGul Hel(15) + Ko(18) + Lem(20) + Gul(25) Polearms & Scepters {
//     4
// } Clvl Required: 53



// Sanctuary KoKoMal Ko(18) + Ko(18) + Mal(23) Shields {
//     3
// } Clvl Required: 49



// Silence DolEldHelIstTirVex Dol(14) + Eld(2) + Hel(15) + Ist(24) + Tir(3) + Vex(26)  Weapons {
//     6
// } Clvl Required: 55



// Smoke NefLum Nef(4) + Lum(17) Armor {
//     2
// } Clvl Required: 37



// Spirit TalThulOrtAmn Tal(7) + Thul(10) + Ort(9) + Amn(11) Shields & Swords {
//     4
// } Clvl Required: 25



// Splendor EthLum Eth(5) + Lum(17) Shields {
//     2
// } Clvl Required: 37



// Stealth   TalEth Tal(7) + Eth(5) Armor {
//     2
// } Clvl Required: 17



// Steel TirEl Tir(3) + El(1) Swords, Axes, Maces {
//     2
// } Clvl Required: 13



// Stone ShaelUmPulLum Shael(13) + Um(22) + Pul(21) + Lum(17) Armor {
//     4
// } Clvl Required: 47



// Strength AmnTir Amn(11) + Tir(3) Melee Weapons {
//     2
// } Clvl Required: 25



// Treachery ShaelThulLem Shael(13) + Thul(10) + Lem(20) Armor {
//     3
// } Clvl Required: 43



// Venom TalDolMal  Tal(7) + Dol(14) + Mal(23) All Weapons {
//     3
// } Clvl Required: 49



// Voice of Reason LemKoElEld Lem(20) + Ko(18) + El(1) + Eld(2) Maces & Swords {
//     4
// } Clvl Required: 43



// Wealth LemKoTir Lem(20) + Ko(18) + Tir(3) Armor {
//     3
// } Clvl Required: 43



// White DolIo Dol(14) + Io(16) Wands {
//     2
// } Clvl Required: 35



// Wind SurEl Sur(29) + El(1) Melee Weapons {
//     2
// } Clvl Required: 61



// Wrath PulLumBerMal Pul(21) + Lum(17) + Ber(30) + Mal(23) Missile Weapons {
//     4
// } Clvl Required: 63



// Zephyr OrtEth Ort(9) + Eth(5) Missile Weapons {
//     2
// } Clvl Required: 21




