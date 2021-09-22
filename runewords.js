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
    {
        name: "Black",
        clvl: 35,
        runes: [
            'Thul',
            'Io',
            'Nef',
        ],
        itemTypes: [
            'Clubs',
            'Hammers',
            'Maces',
        ],
        effects: [
        ],
    },
    {
        name: "Bone",
        clvl: 47,
        runes: [
            'Sol',
            'Um',
            'Um',
        ],
        itemTypes: [
            'Armor',
        ],
        effects: [
        ],
    },
    {
        name: "Bramble",
        clvl: 61,
        runes: [
            'Ral',
            'Ohm',
            'Sur',
            'Eth',
        ],
        itemTypes: [
            'Armor',
        ],
        effects: [
        ],
    },
    {
        name: "Breath of the Dying",
        clvl: 69,
        runes: [
            'Vex',
            'Hel',
            'El',
            'Eld',
            'Zod',
            'Eth',
        ],
        itemTypes: [
            'Any Weapon',
        ],
        effects: [
        ],
    },
    {
        name: "Call to Arms",
        clvl: 57,
        runes: [
            'Amn',
            'Ral',
            'Mal',
            'Ist',
            'Ohm',
        ],
        itemTypes: [
            'Any Weapon',
        ],
        effects: [
        ],
    },
    {
        name: "Chains of Honor",
        clvl: 63,
        runes: [
            'Dol',
            'Um',
            'Ber',
            'Ist',
        ],
        itemTypes: [
            'Armor',
        ],
        effects: [
        ],
    },
    {
        name: "Chaos",
        clvl: 57,
        runes: [
            'Fal',
            'Ohm',
            'Um',
        ],
        itemTypes: [
            'Claws',
        ],
        effects: [
        ],
    },
    {
        name: "Crescent Moon",
        clvl: 47,
        runes: [
            'Shael',
            'Um',
            'Tir',
        ],
        itemTypes: [
            'Axes',
            'Polearms',
            'Swords',
        ],
        effects: [
        ],
    },
    {
        name: "Death",
        clvl: 55,
        runes: [
            'Hel',
            'El',
            'Vex',
            'Ort',
            'Gul',
        ],
        itemTypes: [
            'Axes',
            'Swords',
        ],
        effects: [
        ],
    },
    {
        name: "Delirium",
        clvl: 51,
        runes: [
            'Lem',
            'Ist',
            'Io',
        ],
        itemTypes: [
            'Head',
        ],
        effects: [
        ],
    },
    {
        name: "Destruction",
        clvl: 65,
        runes: [
            'Vex',
            'Lo',
            'Ber',
            'Jah',
            'Ko',
        ],
        itemTypes: [
            'Polearms',
            'Swords',
        ],
        effects: [
        ],
    },
    {
        name: "Doom",
        clvl: 67,
        runes: [
            'Hel',
            'Ohm',
            'Um',
            'Lo',
            'Cham',
        ],
        itemTypes: [
            'Axes',
            'Hammers',
            'Polearms',
        ],
        effects: [
        ],
    },
    {
        name: "Dragon",
        clvl: 61,
        runes: [
            'Sur',
            'Lo',
            'Sol',
        ],
        itemTypes: [
            'Armor',
            'Shields',
        ],
        effects: [
        ],
    },
    {
        name: "Dream",
        clvl: 65,
        runes: [
            'Io',
            'Jah',
            'Pul',
        ],
        itemTypes: [
            'Headgear',
            'Shields',
        ],
        effects: [
        ],
    },
    {
        name: "Duress",
        clvl: 47,
        runes: [
            'Shael',
            'Um',
            'Thul',
        ],
        itemTypes: [
            'Armor',
        ],
        effects: [
        ],
    },
    {
        name: "Edge",
        clvl: 25,
        runes: [
            'Tir',
            'Tal',
            'Amn',
        ],
        itemTypes: [
            'Missle Weapons',
        ],
        effects: [
        ],
    },
    {
        name: "Enigma",
        clvl: 65,
        runes: [
            'Jah',
            'Ith',
            'Ber',
        ],
        itemTypes: [
            'Armor',
        ],
        effects: [
        ],
    },
    {
        name: "Enlightenment",
        clvl: 45,
        runes: [
            'Pul',
            'Ral',
            'Sol',
        ],
        itemTypes: [
            'Armor',
        ],
        effects: [
        ],
    },
    {
        name: "Eternity",
        clvl: 63,
        runes: [
            'Amn',
            'Ber',
            'Ist',
            'Sol',
            'Sur',
        ],
        itemTypes: [
            'All Melee Weapons',
        ],
        effects: [
        ],
    },
    {
        name: "Exile",
        clvl: 57,
        runes: [
            'Vex',
            'Ohm',
            'Ist',
            'Dol',
        ],
        itemTypes: [
            'Shields',
        ],
        effects: [
        ],
    },
    {
        name: "Faith",
        clvl: 65,
        runes: [
            'Ohm',
            'Jah',
            'Lem',
            'Eld',
        ],
        itemTypes: [
            'Missile Weapons',
        ],
        effects: [
        ],
    },
    {
        name: "Famine",
        clvl: 65,
        runes: [
            'Fal',
            'Ohm',
            'Ort',
            'Jah',
        ],
        itemTypes: [
            'Axes',
            'Hammers',
        ],
        effects: [
        ],
    },
    {
        name: "Fortitude",
        clvl: 59,
        runes: [
            'El',
            'Sol',
            'Dol',
            'Lo',
        ],
        itemTypes: [
            'Weapons',
            'Armor',
        ],
        effects: [
        ],
    },
    {
        name: "Fury",
        clvl: 65,
        runes: [
            'Jah',
            'Dul',
            'Eth',
        ],
        itemTypes: [
            'All Melee Weapons',
        ],
        effects: [
        ],
    },
]

const validateRunewords = () => {
    const missingRunes = runewords.map(runeword => runeword.runes.filter(rune => !runes.includes)).flat()
    console.warn('Possibly fat-fingered rune names:', missingRunes)

    const itemTypes = Array.from(new Set(runewords.map(runeword => runeword.itemTypes).flat()))
    console.warn('All item types (check those out by hand for now)', itemTypes)

    const unfinishedRunewords = [
        ...runewords.filter(runeword => !runeword.itemTypes.length),
        ...runewords.filter(runeword => !runeword.effects.length),
        ...runewords.filter(runeword => !runeword.runes.length),
        ...runewords.filter(runeword => runeword.clvl > 99),
    ]
    console.warn('Unfinished runewords, please fill these in:', unfinishedRunewords.map(runeword => runeword.name))
}

validateRunewords()
