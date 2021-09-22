const runewords = [
    {
        "name": "Ancient's Pledge",
        "clvl": 21,
        "runes": [
            "Ral",
            "Ort",
            "Tal"
        ],
        "itemTypes": [
            "Shields"
        ],
        "effects": [
            "+50% Enhanced Defense",
            "Cold Resist +43%",
            "Fire Resist +48% (Ral=35%)",
            "Lightning Resist +48% (Ort=35%)",
            "Poison Resist +48% (Tal=35%)",
            "10% Damage Goes To Mana"
        ]
    },
    {
        "name": "Beast",
        "clvl": 63,
        "runes": [
            "Ber",
            "Tir",
            "Um",
            "Mal",
            "Lum"
        ],
        "itemTypes": [
            "Axes",
            "Hammers",
            "Scepters"
        ],
        "effects": [
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
            "Level 13 Summon Grizzly (5 Charges)"
        ]
    },
    {
        "name": "Black",
        "clvl": 35,
        "runes": [
            "Thul",
            "Io",
            "Nef"
        ],
        "itemTypes": [
            "Clubs",
            "Hammers",
            "Maces"
        ],
        "effects": [
            "+15% Increased Attack Speed",
            "+120% Enhanced Damage",
            "+200 to Attack Rating",
            "Adds 3-14 Cold Damage (3 sec)",
            "40% Chance of Crushing Blow",
            "Knockback",
            "+10 to Vitality",
            "Magic Damage Reduced By 2",
            "Level 4 Corpse Explosion (12 Charges)"
        ]
    },
    {
        "name": "Bone",
        "clvl": 47,
        "runes": [
            "Sol",
            "Um",
            "Um"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "effects": [
            "15% Chance To Cast level 10 Bone Armor When Struck",
            "15% Chance To Cast level 10 Bone Spear On Striking",
            "+2 To Necromancer Skill Levels",
            "+100-150 To Mana (varies)",
            "All Resistances +30",
            "Damage Reduced By 7 "
        ]
    },
    {
        "name": "Brand",
        "clvl": 65,
        "runes": [
            "Jah",
            "Lo",
            "Mal",
            "Gul"
        ],
        "itemTypes": [
            "Bows"
        ],
        "effects": [
            "35% Chance To Cast Level 14 Amplify Damage When Struck",
            "100% Chance To Cast Level 18 Bone Spear On Striking",
            "Fires Explosive Arrows or Bolts (15)",
            "+260-340% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "20% Bonus to Attack Rating",
            "+280-330% Damage To Demons (varies)",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "Knockback ",
        ]
    },
    {
        "name": "Bramble",
        "clvl": 61,
        "runes": [
            "Ral",
            "Ohm",
            "Sur",
            "Eth"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "effects": [
            "Level 15-21 Thorns Aura When Equipped (varies)",
            "+50% Faster Hit Recovery",
            "+25-50% To Poison Skill Damage (varies)",
            "+300 Defense",
            "Increase Maximum Mana 5%",
            "Regenerate Mana 15%",
            "+5% To Maximum Cold Resist",
            "Fire Resist +30%",
            "Poison Resist +100%",
            "+13 Life After Each Kill",
            "Level 13 Spirit of Barbs (33 Charges) "
        ]
    },
    {
        "name": "Breath of the Dying",
        "clvl": 69,
        "runes": [
            "Vex",
            "Hel",
            "El",
            "Eld",
            "Zod",
            "Eth"
        ],
        "itemTypes": [
            "Any Weapon"
        ],
        "effects": [
            "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
            "Indestructible",
            "+60% Increased Attack Speed",
            "+350-400% Enhanced Damage (varies)",
            "-25% Target Defense",
            "+50 To Attack Rating",
            "+200% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "7% Mana Stolen Per Hit",
            "12-15% Life Stolen Per Hit (varies)",
            "Prevent Monster Heal",
            "+30 To All Attributes",
            "+1 To Light Radius",
            "Requirements -20% "
        ]
    },
    {
        "name": "Call to Arms",
        "clvl": 57,
        "runes": [
            "Amn",
            "Ral",
            "Mal",
            "Ist",
            "Ohm"
        ],
        "itemTypes": [
            "Any Weapon"
        ],
        "effects": [
            "+1 To All Skills",
            "+40% Increased Attack Speed",
            "+240-290% Enhanced Damage (varies)",
            "Adds 5-30 Fire Damage",
            "7% Life Stolen Per Hit",
            "+2-6 To Battle Command (varies)",
            "+1-6 To Battle Orders (varies)",
            "+1-4 To Battle Cry (varies)",
            "Prevent Monster Heal",
            "Replenish Life +12",
            "30% Better Chance of Getting Magic Items "
        ]
    },
    {
        "name": "Chains of Honor",
        "clvl": 63,
        "runes": [
            "Dol",
            "Um",
            "Ber",
            "Ist"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "effects": [
            "+2 To All Skills",
            "+200% Damage To Demons",
            "+100% Damage To Undead",
            "8% Life Stolen Per Hit",
            "+70% Enhanced Defense",
            "+20 To Strength",
            "Replenish Life +7",
            "All Resistances +65",
            "Damage Reduced By 8%",
            "25% Better Chance of Getting Magic Items "
        ]
    },
    {
        "name": "Chaos",
        "clvl": 57,
        "runes": [
            "Fal",
            "Ohm",
            "Um"
        ],
        "itemTypes": [
            "Claws"
        ],
        "effects": [
            "9% Chance To Cast Level 11 Frozen Orb On Striking",
            "11% Chance To Cast Level 9 Charged Bolt On Striking",
            "+35% Increased Attacked Speed",
            "+240-290% Enhanced Damage (varies)",
            "Adds 216-471 Magic Damage",
            "25% Chance of Open Wounds",
            "+1 To Whirlwind",
            "+10 To Strength",
            "+15 Life After Each Demon Kill "
        ]
    },
    {
        "name": "Crescent Moon",
        "clvl": 47,
        "runes": [
            "Shael",
            "Um",
            "Tir"
        ],
        "itemTypes": [
            "Axes",
            "Polearms",
            "Swords"
        ],
        "effects": [
            "10% Chance To Cast Level 17 Chain Lightning On Striking",
            "7% Chance To Cast Level 13 Static Field On Striking",
            "+20% Increased Attack Speed",
            "+180-220% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "-35% To Enemy Lightning Resistance",
            "25% Chance of Open Wounds",
            "+9-11 Magic Absorb (varies)",
            "+2 To Mana After Each Kill",
            "Level 18 Summon Spirit Wolf (30 Charges) "
        ]
    },
    {
        "name": "Death",
        "clvl": 55,
        "runes": [
            "Hel",
            "El",
            "Vex",
            "Ort",
            "Gul"
        ],
        "itemTypes": [
            "Axes",
            "Swords"
        ],
        "effects": [
            "Indestructible",
            "100% Chance To Cast Level 44 Chain Lightning When You Die",
            "25% Chance To Cast Level 18 Glacial Spike On Attack",
            "+300-385% Enhanced Damage (varies)",
            "20% Bonus To Attack Rating",
            "+50 To Attack Rating",
            "Adds 1-50 Lightning Damage",
            "7% Mana Stolen Per Hit",
            "50% Chance of Crushing Blow",
            "(0.5*Clvl)% Deadly Strike (Based on Character Level)",
            "+1 To Light Radius",
            "Level 22 Blood Golem (15 Charges)",
            "Requirements -20% "
        ]
    },
    {
        "name": "Delirium",
        "clvl": 51,
        "runes": [
            "Lem",
            "Ist",
            "Io"
        ],
        "itemTypes": [
            "Headgear"
        ],
        "effects": [
            "1% Chance To Cast lvl 50 Delirium When Struck",
            "6% Chance To Cast lvl 14 Mind Blast When Struck",
            "14% Chance To Cast lvl 13 Terror When Struck",
            "11% Chance To Cast lvl 18 Confuse On Striking",
            "+2 To All Skills",
            "+261 Defense",
            "+10 To Vitality",
            "50% Extra Gold From Monsters",
            "25% Better Chance of Getting Magic Items",
            "Level 17 Attract (60 Charges) "
        ]
    },
    {
        "name": "Destruction",
        "clvl": 65,
        "runes": [
            "Vex",
            "Lo",
            "Ber",
            "Jah",
            "Ko"
        ],
        "itemTypes": [
            "Polearms",
            "Swords"
        ],
        "effects": [
            "23% Chance To Cast Level 12 Volcano On Striking",
            "5% Chance To Cast Level 23 Molten Boulder On Striking",
            "100% Chance To Cast level 45 Meteor When You Die",
            "15% Chance To Cast Level 22 Nova On Attack",
            "+350% Enhanced Damage",
            "Ignore Target's Defense",
            "Adds 100-180 Magic Damage",
            "7% Mana Stolen Per Hit",
            "20% Chance Of Crushing Blow",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+10 To Dexterity "
        ]
    },
    {
        "name": "Doom",
        "clvl": 67,
        "runes": [
            "Hel",
            "Ohm",
            "Um",
            "Lo",
            "Cham"
        ],
        "itemTypes": [
            "Axes",
            "Hammers",
            "Polearms"
        ],
        "effects": [
            "5% Chance To Cast Level 18 Volcano On Striking",
            "Level 12 Holy Freeze Aura When Equipped",
            "+2 To All Skills",
            "+45% Increased Attack Speed",
            "+330-370% Enhanced Damage (varies)",
            "-40-60% To Enemy Cold Resistance (varies)",
            "20% Deadly Strike",
            "25% Chance of Open Wounds",
            "Prevent Monster Heal",
            "Freezes Target +3",
            "Requirements -20% "
        ]
    },
    {
        "name": "Dragon",
        "clvl": 61,
        "runes": [
            "Sur",
            "Lo",
            "Sol"
        ],
        "itemTypes": [
            "Body Armor",
            "Shields"
        ],
        "effects": [
            "20% Chance to Cast Level 18 Venom When Struck",
            "12% Chance To Cast Level 15 Hydra On Striking",
            "Level 14 Holy Fire Aura When Equipped",
            "+360 Defense",
            "+230 Defense Vs. Missile",
            "+3-5 To All Attributes (varies)",
            "+(0.375*Clvl) To Strength (Based on Character Level)",
            "+5% To Maximum Lightning Resist",
            "Damage Reduced by 7",
            "Only in Armor:",
            "Increase Maximum Mana 5%",
            "Only in Shields:",
            "+50 To Mana "
        ]
    },
    {
        "name": "Dream",
        "clvl": 65,
        "runes": [
            "Io",
            "Jah",
            "Pul"
        ],
        "itemTypes": [
            "Headgear",
            "Shields"
        ],
        "effects": [
            "10% Chance To Cast Level 15 Confuse When Struck",
            "Level 15 Holy Shock Aura When Equipped",
            "+20-30% Faster Hit Recovery (varies)",
            "+30% Enhanced Defense",
            "+150-220 Defense (varies)",
            "+10 To Vitality",
            "+(0.625*Clvl) To Mana (Based On Character Level)",
            "All Resistances +5-20 (varies)",
            "12-25% Better Chance of Getting Magic Items (varies)",
            "Only in Headgear:",
            "Increase Maximum Life 5%",
            "Only in Shields:",
            "+50 To Life "
        ]
    },
    {
        "name": "Duress",
        "clvl": 47,
        "runes": [
            "Shael",
            "Um",
            "Thul"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "effects": [
            "40% faster hit Recovery",
            "+10-20% Enhanced Damage (varies)",
            "Adds 37-133 Cold Damage",
            "15% Crushing Blow",
            "33% Open Wounds",
            "+150-200% Enhanced Defense (varies)",
            "-20% Slower Stamina Drain",
            "Cold Resist +45%",
            "Lightning Resist +15%",
            "Fire Resist +15%",
            "Poison Resist +15% "
        ]
    },
    {
        "name": "Edge",
        "clvl": 25,
        "runes": [
            "Tir",
            "Tal",
            "Amn"
        ],
        "itemTypes": [
            "Bows"
        ],
        "effects": [
            "Level 15 Thorns Aura When Equipped",
            "+35% Increased Attack Speed",
            "+320-380% Damage To Demons (varies)",
            "+280% Damage To Undead",
            "+75 Poison Damage Over 5 Seconds",
            "7% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+5-10 To All Attributes (varies)",
            "+2 To Mana After Each Kill",
            "Reduces All Vendor Prices 15% "
        ]
    },
    {
        "name": "Enigma",
        "clvl": 65,
        "runes": [
            "Jah",
            "Ith",
            "Ber"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "effects": [
            "+2 To All Skills",
            "+45% Faster Run/Walk",
            "+1 To Teleport",
            "+750-775 Defense (Varies)",
            "+(0.75*Clvl) To Strength (Based On Character Level)",
            "Increase Maximum Life 5%",
            "Damage Reduced By 8%",
            "+14 Life After Each Kill",
            "15% Damage Taken Goes To Mana",
            "(1*Clvl)% Better Chance of Getting Magic Items (Based On Character Level) "
        ]
    },
    {
        "name": "Enlightenment",
        "clvl": 45,
        "runes": [
            "Pul",
            "Ral",
            "Sol"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "effects": [
            "5% Chance To Cast Level 15 Blaze When Struck",
            "5% Chance To Cast level 15 Fire Ball On Striking",
            "+2 To Sorceress Skill Levels",
            "+1 To Warmth",
            "+30% Enhanced Defense",
            "Fire Resist +30%",
            "Damage Reduced By 7 "
        ]
    },
    {
        "name": "Eternity",
        "clvl": 63,
        "runes": [
            "Amn",
            "Ber",
            "Ist",
            "Sol",
            "Sur"
        ],
        "itemTypes": [
            "Any Melee Weapon"
        ],
        "effects": [
            "Indestructible",
            "+260-310% Enhanced Damage (varies)",
            "+9 To Minimum Damage",
            "7% Life Stolen Per Hit",
            "20% Chance of Crushing Blow",
            "Hit Blinds Target",
            "Slows Target By 33%",
            "Replenish Mana 16%",
            "Cannot Be Frozen",
            "30% Better Chance Of Getting Magic Items",
            "Level 8 Revive (88 Charges) "
        ]
    },
    {
        "name": "Exile",
        "clvl": 57,
        "runes": [
            "Vex",
            "Ohm",
            "Ist",
            "Dol"
        ],
        "itemTypes": [
            "Paladin Shields"
        ],
        "effects": [
            "15% Chance To Cast Level 5 Life Tap On Striking",
            "Level 13-16 Defiance Aura When Equipped (varies)",
            "+2 To Offensive Auras (Paladin Only)",
            "+30% Faster Block Rate",
            "Freezes Target",
            "+220-260% Enhanced Defense (varies)",
            "Replenish Life +7",
            "+5% To Maximum Cold Resist",
            "+5% To Maximum Fire Resist",
            "25% Better Chance Of Getting Magic Items",
            "Repairs 1 Durability every 4 seconds "
        ]
    },
    {
        "name": "Faith",
        "clvl": 65,
        "runes": [
            "Ohm",
            "Jah",
            "Lem",
            "Eld"
        ],
        "itemTypes": [
            "Bows"
        ],
        "effects": [
            "Level 12-15 Fanaticism Aura When Equipped (varies)",
            "+1-2 To All Skills (varies)",
            "+330% Enhanced Damage",
            "Ignore Target's Defense",
            "300% Bonus To Attack Rating",
            "+75% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "+120 Fire Damage",
            "All Resistances +15",
            "10% Reanimate As: Returned",
            "75% Extra Gold From Monsters "
        ]
    },
    {
        "name": "Famine",
        "clvl": 65,
        "runes": [
            "Fal",
            "Ohm",
            "Ort",
            "Jah"
        ],
        "itemTypes": [
            "Axes",
            "Hammers"
        ],
        "effects": [
            "+30% Increased Attack Speed",
            "+320-370% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "Adds 180-200 Magic Damage",
            "Adds 50-200 Fire Damage",
            "Adds 51-250 Lightning Damage",
            "Adds 50-200 Cold Damage",
            "12% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+10 To Strength "
        ]
    },
    {
        "name": "Fortitude",
        "clvl": 59,
        "runes": [
            "El",
            "Sol",
            "Dol",
            "Lo"
        ],
        "itemTypes": [
            "Any Weapon",
            "Body Armor"
        ],
        "effects": [
            "Both",
            "20% Chance To Cast Level 15 Chilling Armor when Struck",
            "+25% Faster Cast Rate",
            "+300% Enhanced Damage",
            "+200% Enhanced Defense",
            "+((8-12)*0.125*Clvl) To Life (Based on Character Level) (varies)",
            "All Resistances +25-30 (varies)",
            "12% Damage Taken Goes To Mana",
            "+1 To Light Radius",
            "Only on Weapons:",
            "+9 To Minimum Damage",
            "+50 To Attack Rating",
            "20% Deadly Strike",
            "Hit Causes Monster To Flee 25%",
            "Only on Armor:",
            "+15 Defense",
            "Replenish Life +7",
            "+5% To Maximum Lightning Resist",
            "Damage Reduced By 7 "
        ]
    },
    {
        "name": "Fury",
        "clvl": 65,
        "runes": [
            "Jah",
            "Dul",
            "Eth"
        ],
        "itemTypes": [
            "Any Melee Weapon"
        ],
        "effects": [
            "40% Increased Attack Speed",
            "+209% Enhanced Damage",
            "Ignores Target Defense",
            "-25% Target Defense",
            "20% Bonus to Attack Rating",
            "6% Life Stolen Per Hit",
            "33% Chance Of Deadly Strike",
            "66% Chance Of Open Wounds",
            "+5 To Frenzy (Barbarian Only)",
            "Prevent Monster Heal "
        ]
    },
    {
        "name": "Gloom",
        "clvl": 47,
        "runes": [
            "Fal",
            "Um",
            "Pul"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "effects": [
            "15% Chance To Cast Level 3 Dim Vision When Struck",
            "+10% Faster Hit Recovery",
            "+200-260% Enhanced Defense (varies)",
            "+10 To Strength",
            "All Resistances +45",
            "Half Freeze Duration",
            "5% Damage Taken Goes To Mana",
            "-3 To Light Radius "
        ]
    },
    {
        "name": "Grief",
        "clvl": 59,
        "runes": [
            "Eth",
            "Tir",
            "Lo",
            "Mal",
            "Ral"
        ],
        "itemTypes": [
            "Swords",
            "Axes"
        ],
        "effects": [
            "35% Chance To Cast Level 15 Venom On Striking",
            "+30-40% Increased Attack Speed (varies)",
            "Damage +340-400 (varies)",
            "Ignore Target's Defense",
            "-25% Target Defense",
            "+(1.875*Clvl)% Damage To Demons (Based on Character Level)",
            "Adds 5-30 Fire Damage",
            "-20-25% To Enemy Poison Resistance (varies)",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+2 To Mana After Each Kill",
            "+10-15 Life After Each Kill (varies) "
        ]
    },
    {
        "name": "Hand of Justice",
        "clvl": 67,
        "runes": [
            "Sur",
            "Cham",
            "Amn",
            "Lo"
        ],
        "itemTypes": [
            "Any Weapon"
        ],
        "effects": [
            "100% Chance To Cast Level 36 Blaze When You Level-Up",
            "100% Chance To Cast Level 48 Meteor When You Die",
            "Level 16 Holy Fire Aura When Equipped",
            "+33% Increased Attack Speed",
            "+280-330% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "-20% To Enemy Fire Resistance",
            "7% Life Stolen Per Hit",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3 "
        ]
    },
    {
        "name": "Harmony",
        "clvl": 67,
        "runes": [
            "Tir",
            "Ith",
            "Sol",
            "Ko"
        ],
        "itemTypes": [
            "Bows"
        ],
        "effects": [
            "Level 10 Vigor Aura When Equipped",
            "+200-275% Enhanced Damage (varies)",
            "+9 To Minimum Damage",
            "+9 To Maximum Damage",
            "Adds 55-160 Fire Damage",
            "Adds 55-160 Lightning Damage",
            "Adds 55-160 Cold Damage",
            "+2-6 To Valkyrie (varies)",
            "+10 To Dexterity",
            "Regenerate Mana 20%",
            "+2 To Mana After Each Kill",
            "+2 To Light Radius",
            "Level 20 Revive (25 Charges) "
        ]
    },
    {
        "name": "Heart of Oak",
        "runes": [
            "Ko",
            "Vex",
            "Pul",
            "Thul"
        ],
        "itemTypes": [
            "Staves",
            "Maces"
        ],
        "clvl": 55,
        "effects": [
            "+3 To All Skills",
            "+40% Faster Cast Rate",
            "+75% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "Adds 3-14 Cold Damage",
            "7% Mana Stolen Per Hit",
            "+10 To Dexterity",
            "Replenish Life +20",
            "Increase Maximum Mana 15%",
            "All Resistances +30-40 (varies)",
            "Level 4 Oak Sage (25 Charges)",
            "Level 14 Raven (60 Charges) "
        ]
    },
    {
        "name": "Holy Thunder",
        "runes": [
            "Eth",
            "Ral",
            "Ort",
            "Tal"
        ],
        "itemTypes": [
            "Scepters"
        ],
        "clvl": 23,
        "effects": [
            "+60% Enhanced Damage",
            "+10 to Maximum Damage",
            "-25% Target Defense",
            "Adds 5-30 Fire Damage",
            "Adds 21-110 Lightning Damage",
            "+75 Poison Damage over 5 secs",
            "+3 to Holy Shock (Paladin Only)",
            "+5% to Maximum Lightning Resist",
            "Lightning Resist +60%",
            "Level 7 Chain Lightning (60 charges)"
        ]
    },
    {
        "name": "Honor",
        "runes": [
            "Amn",
            "El",
            "Ith",
            "Tir",
            "Sol"
        ],
        "itemTypes": [
            "Any Melee Weapon"
        ],
        "clvl": 27,
        "effects": [
            "+1 to all skills",
            "+160% Enhanced Damage",
            "+9 to Minimum Damage",
            "+9 to Maximum Damage",
            "+250 Attack Rating",
            "7% Life Stolen per Hit",
            "25% Deadly Strike",
            "+10 to Strength",
            "Replenish life +10",
            "+2 to Mana after each Kill",
            "+1 to Light Radius "
        ]
    },
    {
        "name": "Ice",
        "runes": [
            "Amn",
            "Shael",
            "Jah",
            "Lo"
        ],
        "itemTypes": [
            "Bows"
        ],
        "clvl": 65,
        "effects": [
            "100% Chance To Cast Level 40 Blizzard When You Level-up",
            "25% Chance To Cast Level 22 Frost Nova On Striking",
            "Level 18 Holy Freeze Aura When Equipped",
            "+20% Increased Attack Speed",
            "+140-210% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "+25-30% To Cold Skill Damage (varies)",
            "7% Life Stolen Per Hit",
            "-20% To Enemy Cold Resistance",
            "20% Deadly Strike",
            "(3.125*Clvl)% Extra Gold From Monsters (Based on Character Level) "
        ]
    },
    {
        "name": "Infinity",
        "runes": [
            "Ber",
            "Mal",
            "Ber",
            "Ist"
        ],
        "itemTypes": [
            "Polearms"
        ],
        "clvl": 63,
        "effects": [
            "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
            "Level 12 Conviction Aura When Equipped",
            "+35% Faster Run/Walk",
            "+255-325% Enhanced Damage (varies)",
            "-(45-55)% To Enemy Lightning Resistance (varies)",
            "40% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "+(0.5*Clvl) To Vitality (Based on Character Level)",
            "30% Better Chance of Getting Magic Items",
            "Level 21 Cyclone Armor (30 Charges) "
        ]
    },
    {
        "name": "Insight",
        "runes": [
            "Ral",
            "Tir",
            "Tal",
            "Sol"
        ],
        "itemTypes": [
            "Polearms",
            "Staves"
        ],
        "clvl": 27,
        "effects": [
            "Level 12-17 Meditation Aura When Equipped (varies)",
            "+35% Faster Cast Rate",
            "+200-260% Enhanced Damage (varies)",
            "+9 To Minimum Damage",
            "180-250% Bonus to Attack Rating (varies)",
            "Adds 5-30 Fire Damage",
            "+75 Poison Damage Over 5 Seconds",
            "+1-6 To Critical Strike (varies)",
            "+5 To All Attributes",
            "+2 To Mana After Each Kill",
            "23% Better Chance of Getting Magic Items "
        ]
    },
    {
        "name": "King's Grace",
        "runes": [
            "Amn",
            "Ral",
            "Thul"
        ],
        "itemTypes": [
            "Swords",
            "Scepters"
        ],
        "clvl": 25,
        "effects": [
            "+100% Enhanced Damage",
            "+150 to Attack Rating",
            "+100% Damage to Demons",
            "+100 to Attack Rating against Demons",
            "+50% Damage to Undead",
            "+100 to Attack Rating against Undead",
            "Adds 5-30 Fire Damage",
            "Adds 3-14 Cold damage",
            "7% Life stolen per hit "
        ]
    },
    {
        "name": "Kingslayer",
        "runes": [
            "Mal",
            "Um",
            "Gul",
            "Fal"
        ],
        "itemTypes": [
            "Swords",
            "Axes"
        ],
        "clvl": 53,
        "effects": [
            "+30% Increased Attack Speed",
            "+230-270% Enhanced Damage (varies)",
            "-25% Target Defense",
            "20% Bonus To Attack Rating",
            "33% Chance of Crushing Blow",
            "50% Chance of Open Wounds",
            "+1 To Vengeance",
            "Prevent Monster Heal",
            "+10 To Strength",
            "40% Extra Gold From Monsters "
        ]
    },
    {
        "name": "Last Wish",
        "runes": [
            "Jah",
            "Mal",
            "Jah",
            "Sur",
            "Jah",
            "Ber"
        ],
        "itemTypes": [
            "Axes",
            "Hammers",
            "Swords"
        ],
        "clvl": 65,
        "effects": [
            "6% Chance To Cast Level 11 Fade When Struck",
            "10% Chance To Cast Level 18 Life Tap On Striking",
            "20% Chance To Cast Level 20 Charged Bolt On Attack",
            "Level 17 Might Aura When Equipped",
            "+330-375% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "60-70% Chance of Crushing Blow (varies)",
            "Prevent Monster Heal",
            "Hit Blinds Target",
            "(0.5*Clvl)% Chance of Getting Magic Items (Based on Character Level) "
        ]
    },
    {
        "name": "Lawbringer",
        "runes": [
            "Amn",
            "Lem",
            "Ko"
        ],
        "itemTypes": [
            "Hammers",
            "Scepters",
            "Swords"
        ],
        "clvl": 43,
        "effects": [
            "20% Chance To Cast Level 15 Decrepify On Striking",
            "Level 16-18 Sanctuary Aura When Equipped (varies)",
            "-50% Target Defense",
            "Adds 150-210 Fire Damage",
            "Adds 130-180 Cold Damage",
            "7% Life Stolen Per Hit",
            "Slain Monsters Rest In Peace",
            "+200-250 Defense Vs. Missile (varies)",
            "+10 To Dexterity",
            "75% Extra Gold From Monsters "
        ]
    },
    {
        "name": "Leaf",
        "runes": [
            "Tir",
            "Ral"
        ],
        "itemTypes": [
            "Staves"
        ],
        "clvl": 19,
        "effects": [
            "+3 to Fire Skills",
            "Adds 5-30 Fire Damage",
            "+3 to Inferno (Sorceress Only)",
            "+3 to Warmth (Sorceress Only)",
            "+3 to Fire Bolt (Sorceress Only)",
            "+(2*Clvl) Defence (Based on Character Level)",
            "Cold Resist +33%",
            "+2 to Mana after each Kill"
        ]
    },
    {
        "name": "Lionheart",
        "runes": [
            "Hel",
            "Lum",
            "Fal"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 41,
        "effects": [
            "+20% Enhanced Damage",
            "+25 To Strength",
            "+15 To Dexterity",
            "+20 To Vitality",
            "+10 To Energy",
            "+50 To Life",
            "All Resistances +30",
            "Requirements -15% "
        ]
    },
    {
        "name": "Lore",
        "runes": [
            "Ort",
            "Sol"
        ],
        "itemTypes": [
            "Headgear"
        ],
        "clvl": 27,
        "effects": [
            "+1 to All Skills",
            "+10 to Energy",
            "Lightning Resist +30%",
            "Damage Reduced by 7",
            "+2 to Mana after each Kill",
            "+2 to Light Radius "
        ]
    },
    {
        "name": "Malice",
        "runes": [
            "Ith",
            "El",
            "Eth"
        ],
        "itemTypes": [
            "Any Melee Weapon"
        ],
        "clvl": 15,
        "effects": [
            "+33% Enhanced Damage",
            "+9 to Maximum Damage",
            "-25% Target Defense",
            "+50 to Attack Rating",
            "100% Chance of Open wounds",
            "Prevent Monster Heal",
            "-100 to Monster Defense Per Hit",
            "Drain Life -5 "
        ]
    },
    {
        "name": "Melody",
        "runes": [
            "Shael",
            "Ko",
            "Nef"
        ],
        "itemTypes": [
            "Bows"
        ],
        "clvl": 39,
        "effects": [
            "+3 To Bow and Crossbow Skills (Amazon Only)",
            "+20% Increased Attack Speed",
            "+50% Enhanced Damage",
            "+300% Damage To Undead",
            "+3 To Slow Missiles (Amazon Only)",
            "+3 To Dodge (Amazon Only)",
            "+3 To Critical Strike (Amazon Only)",
            "Knockback",
            "+10 To Dexterity"
        ]
    },
    {
        "name": "Memory",
        "runes": [
            "Lum",
            "Io",
            "Sol",
            "Eth"
        ],
        "itemTypes": [
            "Staves"
        ],
        "clvl": 37,
        "effects": [
            "+3 To Sorceress Skill Levels",
            "+33% Faster Cast Rate",
            "+9 To Minimum Damage",
            "-25% Target Defence",
            "+3 To Energy Shield (Sorceress Only)",
            "+2 To Static Field (Sorceress Only)",
            "+50% Enhanced Defense",
            "+10 Vitality",
            "+10 Energy",
            "Increase Maximum Mana 20%",
            "Magic Damage Reduced By 7 "
        ]
    },
    {
        "name": "Myth",
        "runes": [
            "Hel",
            "Amn",
            "Nef"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 25,
        "effects": [
            "3% Chance To Cast Level 1 Howl When Struck",
            "10% Chance To Cast Level 1 Taunt On Striking",
            "+2 To Barbarian Skill Levels",
            "+30 Defense Vs. Missile",
            "Replenish Life +10",
            "Attacker Takes Damage of 14",
            "Requirements -15% "
        ]
    },
    {
        "name": "Nadir",
        "runes": [
            "Nef",
            "Tir"
        ],
        "itemTypes": [
            "Headgear"
        ],
        "clvl": 13,
        "effects": [
            "+50% Enhanced Defense",
            "+10 Defense",
            "+30 Defense vs. Missile",
            "+5 to Strength",
            "+2 to Mana after each Kill",
            "-33% Extra Gold from Monsters",
            "-3 to Light Radius",
            "Level 13 Cloak of Shadows (9 charges)"
        ]
    },
    {
        "name": "Oath",
        "runes": [
            "Shael",
            "Pul",
            "Mal",
            "Lum"
        ],
        "itemTypes": [
            "Axes",
            "Maces",
            "Swords"
        ],
        "clvl": 59,
        "effects": [
            "Indestructible",
            "30% Chance To Cast Level 20 Bone Spirit On Striking",
            "+50% Increased Attack Speed",
            "+210-340% Enhanced Damage (varies)",
            "+75% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "Prevent Monster Heal",
            "+10 To Energy",
            "+10-15 Magic Absorb (varies)",
            "Level 16 Heart of Wolverine (20 Charges)",
            "Level 17 Iron Golem (14 Charges) "
        ]
    },
    {
        "name": "Obedience",
        "runes": [
            "Hel",
            "Ko",
            "Thul",
            "Eth",
            "Fal"
        ],
        "itemTypes": [
            "Polearms"
        ],
        "clvl": 41,
        "effects": [
            "30% Chance To Cast Level 21 Enchant When You Kill An Enemy",
            "+40% Faster Hit Recovery",
            "+370% Enhanced Damage",
            "-25% Target Defense",
            "Adds 3-14 Cold Damage (3 Seconds Duration,Normal)",
            "-25% To Enemy Fire Resistance",
            "40% Chance of Crushing Blow",
            "+200-300 Defense (varies)",
            "+10 To Strength",
            "+10 To Dexterity",
            "All Resistances +20-30 (varies)",
            "Requirements -20% "
        ]
    },
    {
        "name": "Passion",
        "runes": [
            "Dol",
            "Ort",
            "Eld",
            "Lem"
        ],
        "itemTypes": [
            "Any Weapon"
        ],
        "clvl": 43,
        "effects": [
            "+25% Increased Attack Speed",
            "+160-210% Enhanced Damage (varies)",
            "50-80% Bonus To Attack Rating (varies)",
            "+75% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "Adds 1-50 Lightning Damage",
            "+1 To Berserk",
            "+1 To Zeal",
            "Hit Blinds Target +10",
            "Hit Causes Monster To Flee 25%",
            "75% Extra Gold From Monsters",
            "Level 3 Heart of Wolverine (12 Charges) "
        ]
    },
    {
        "name": "Peace",
        "runes": [
            "Shael",
            "Thul",
            "Amn"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 29,
        "effects": [
            "4% Chance To Cast Level 5 Slow Missiles When Struck",
            "2% Chance To Cast level 15 Valkyrie On Striking",
            "+2 To Amazon Skill Levels",
            "+20% Faster Hit Recovery",
            "+2 To Critical Strike",
            "Cold Resist +30%",
            "Attacker Takes Damage of 14 "
        ]
    },
    {
        "name": "Phoenix",
        "runes": [
            "Vex",
            "Vex",
            "Lo",
            "Jah"
        ],
        "itemTypes": [
            "Any Weapon",
            "Shields"
        ],
        "clvl": 65,
        "effects": [
            "Both",
            "100% Chance To Cast level 40 Blaze When You Level-up",
            "40% Chance To Cast Level 22 Firestorm On Striking",
            "Level 10-15 Redemption Aura When Equipped (varies)",
            "+350-400% Enhanced Damage (varies)",
            "-28% To Enemy Fire Resistance",
            "+350-400 Defense Vs. Missile (varies)",
            "+15-21 Fire Absorb (varies)",
            "Only on Weapons:",
            "Ignores Target's Defense",
            "14% Mana Stolen Per Hit",
            "20% Deadly Strike",
            "Only on Shields:",
            "+50 To Life",
            "+5% To Maximum Lightning Resist",
            "+10% To Maximum Fire Resist "
        ]
    },
    {
        "name": "Pride",
        "runes": [
            "Cham",
            "Sur",
            "Io",
            "Lo"
        ],
        "itemTypes": [
            "Polearms"
        ],
        "clvl": 67,
        "effects": [
            "25% Chance To Cast Level 17 Fire Wall When Struck",
            "Level 16-20 Concentration Aura When Equipped (varies)",
            "260-300% Bonus To Attack Rating (varies)",
            "+(1*Clvl)% Damage To Demons (Based on Character Level)",
            "Adds 50-280 Lightning Damage",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3",
            "+10 To Vitality",
            "Replenish Life +8",
            "(1.875*Clvl)% Extra Gold From Monsters (Based on Character Level) "
        ]
    },
    {
        "name": "Principle",
        "runes": [
            "Ral",
            "Gul",
            "Eld"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 55,
        "effects": [
            "100% Chance To Cast Level 5 Holy Bolt On Striking",
            "+2 To Paladin Skill Levels",
            "+50% Damage to Undead",
            "+100-150 to Life (varies)",
            "15% Slower Stamina Drain",
            "+5% To Maximum Poison Resist",
            "Fire Resist +30% "
        ]
    },
    {
        "name": "Prudence",
        "runes": [
            "Mal",
            "Tir"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 49,
        "effects": [
            "+25% Faster Hit Recovery",
            "+140-170% Enhanced Defense (varies)",
            "All Resistances +25-35 (varies)",
            "Damage Reduced by 3",
            "Magic Damage Reduced by 17",
            "+2 To Mana After Each Kill",
            "+1 To Light Radius",
            "Repairs Durability 1 In 4 Seconds "
        ]
    },
    {
        "name": "Radiance",
        "runes": [
            "Nef",
            "Sol",
            "Ith"
        ],
        "itemTypes": [
            "Headgear"
        ],
        "clvl": 27,
        "effects": [
            "+75% Enhanced Defense",
            "+30 Defense vs. Missiles",
            "+10 to Vitality",
            "+10 to Energy",
            "+33 to Mana",
            "Damage Reduced by 7",
            "Magic Damage Reduced by 3",
            "15% Damage Taken Goes to Mana",
            "+5 to Light Radius "
        ]
    },
    {
        "name": "Rain",
        "runes": [
            "Ort",
            "Mal",
            "Ith"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 49,
        "effects": [
            "5% Chance To Cast Level 15 Cyclone Armor When Struck",
            "5% Chance To Cast Level 15 Twister On Striking",
            "+2 To Druid Skills",
            "+100-150 To Mana (varies)",
            "Lightning Resist +30%",
            "Magic Damage Reduced By 7",
            "15% Damage Taken Goes to Mana "
        ]
    },
    {
        "name": "Rhyme",
        "runes": [
            "Shael",
            "Eth"
        ],
        "itemTypes": [
            "Shields"
        ],
        "clvl": 29,
        "effects": [
            "+40% Faster Block Rate",
            "20% Increased Chance of Blocking",
            "Regenerate Mana 15%",
            "All Resistances +25",
            "Cannot be Frozen",
            "50% Extra Gold from Monsters",
            "25% Better Chance of Getting Magic Items "
        ]
    },
    {
        "name": "Rift",
        "runes": [
            "Hel",
            "Ko",
            "Lem",
            "Gul"
        ],
        "itemTypes": [
            "Polearms",
            "Scepters"
        ],
        "clvl": 53,
        "effects": [
            "20% Chance To Cast Level 16 Tornado On Striking",
            "16% Chance To Cast Level 21 Frozen Orb On Attack",
            "20% Bonus To Attack Rating",
            "Adds 160-250 Magic Damage",
            "Adds 60-180 Fire Damage",
            "+5-10 To All Attributes (varies)",
            "+10 To Dexterity",
            "38% Damage Taken Goes To Mana",
            "75% Extra Gold From Monsters",
            "Level 15 Iron Maiden (40 Charges)",
            "Requirements -20% "
        ]
    },
    {
        "name": "Sanctuary",
        "runes": [
            "Ko",
            "Ko",
            "Mal"
        ],
        "itemTypes": [
            "Shields"
        ],
        "clvl": 49,
        "effects": [
            "+20% Faster Hit Recovery",
            "+20% Faster Block Rate",
            "20% Increased Chance of Blocking",
            "+130-160% Enhanced Defense (varies)",
            "+250 Defense vs. Missile",
            "+20 To Dexterity",
            "All Resistances +50-70 (varies)",
            "Magic Damage Reduced By 7",
            "Level 12 Slow Missiles (60 Charges) "
        ]
    },
    {
        "name": "Silence",
        "runes": [
            "Dol",
            "Eld",
            "Hel",
            "Ist",
            "Tir",
            "Vex"
        ],
        "itemTypes": [
            "Any Weapon"
        ],
        "clvl": 55,
        "effects": [
            "+2 to All Skills",
            "+20% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "+200% Enhanced Damage",
            "+75% Damage To Undead",
            "+50 to Attack Rating Against Undead",
            "11% Mana Stolen Per Hit",
            "Hit Blinds Target +33",
            "Hit Causes Monster to Flee 25%",
            "All Resistances +75",
            "+2 to Mana After Each Kill",
            "30% Better Chance of Getting Magic Items",
            "Requirements -20% "
        ]
    },
    {
        "name": "Smoke",
        "runes": [
            "Nef",
            "Lum"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 37,
        "effects": [
            "+20% Faster Hit Recovery",
            "+75% Enhanced Defense",
            "+280 Defense vs. Missiles",
            "+10 to Energy",
            "All Resistances +50",
            "-1 to Light Radius",
            "Level 6 Weaken (18 charges) "
        ]
    },
    {
        "name": "Spirit",
        "runes": [
            "Tal",
            "Thul",
            "Ort",
            "Amn"
        ],
        "itemTypes": [
            "Shields",
            "Swords"
        ],
        "clvl": 25,
        "effects": [
            "Both",
            "+2 To All Skills",
            "+25-35% Faster Cast Rate (varies)",
            "+55% Faster Hit Recovery",
            "+250 Defense Vs. Missile",
            "+22 To Vitality",
            "+89-112 To Mana (varies)",
            "+3-8 Magic Absorb (varies)",
            "Shields",
            "Cold Resist +35%",
            "Lightning Resist +35%",
            "Poison Resist +35%",
            "Attacker Takes Damage of 14",
            "Swords",
            "Adds 1-50 Lightning Damage",
            "Adds 3-14 Cold Damage (3 Sec,Normal)",
            "+75 Poison Damage Over 5 Seconds",
            "7% Life Stolen Per Hit "
        ]
    },
    {
        "name": "Splendor",
        "runes": [
            "Eth",
            "Lum"
        ],
        "itemTypes": [
            "Shields"
        ],
        "clvl": 37,
        "effects": [
            "+1 To All Skills",
            "+10% Faster Cast Rate",
            "+20% Faster Block Rate",
            "+60-100% Enhanced Defense (varies)",
            "+10 To Energy",
            "Regenerate Mana 15%",
            "50% Extra Gold From Monsters",
            "20% Better Chance of Getting Magic Items",
            "+3 To Light Radius "
        ]
    },
    {
        "name": "Stealth",
        "runes": [
            "Tal",
            "Eth"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 17,
        "effects": [
            "+25% Faster Run/Walk",
            "+25% Faster Casting Rate",
            "+25% Faster Hit Recovery",
            "+6 to Dexterity",
            "Regenerate Mana 15%",
            "+15 Maximum Stamina",
            "Poison Resist +30%",
            "Magic Damage Reduced by 3 "
        ]
    },
    {
        "name": "Steel",
        "runes": [
            "Tir",
            "El"
        ],
        "itemTypes": [
            "Swords",
            "Axes",
            "Maces"
        ],
        "clvl": 13,
        "effects": [
            "+25% Increased Attack Speed",
            "+20% Enhanced Damage",
            "+3 to Minimum Damage",
            "+3 to Maximum Damage",
            "+50 to Attack Rating",
            "50% Chance of Open Wounds",
            "+2 to Mana after each Kill",
            "+1 to Light Radius "
        ]
    },
    {
        "name": "Stone",
        "runes": [
            "Shael",
            "Um",
            "Pul",
            "Lum"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 47,
        "effects": [
            "+60% Faster Hit Recovery",
            "+250-290% Enhanced Defense (varies)",
            "+300 Defense Vs. Missile",
            "+16 To Strength",
            "+16 To Vitality",
            "+10 To Energy",
            "All Resistances +15",
            "Level 16 Molten Boulder (80 Charges)",
            "Level 16 Clay Golem (16 Charges) "
        ]
    },
    {
        "name": "Strength",
        "runes": [
            "Amn",
            "Tir"
        ],
        "itemTypes": [
            "Any Melee Weapon"
        ],
        "clvl": 25,
        "effects": [
            "+35% Enhanced Damage",
            "7% Life stolen per hit",
            "25% Chance of Crushing Blow",
            "+20 to Strength",
            "+10 to Vitality",
            "+2 to Mana after each Kill "
        ]
    },
    {
        "name": "Treachery",
        "runes": [
            "Shael",
            "Thul",
            "Lem"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 43,
        "effects": [
            "5% Chance To Cast Level 15 Fade When Struck",
            "25% Chance To Cast level 15 Venom On Striking",
            "+2 To Assassin Skills",
            "+45% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "Cold Resist +30%",
            "50% Extra Gold From Monsters "
        ]
    },
    {
        "name": "Venom",
        "runes": [
            "Tal",
            "Dol",
            "Mal"
        ],
        "itemTypes": [
            "Any Weapon"
        ],
        "clvl": 49,
        "effects": [
            "Ignore Target's Defense",
            "+273 Poison Damage Over 6 Seconds",
            "7% Mana Stolen Per Hit",
            "Prevent Monster Heal",
            "Hit Causes Monster To Flee 25%",
            "Level 13 Poison Nova (11 Charges)",
            "Level 15 Poison Explosion (27 Charges) "
        ]
    },
    {
        "name": "Voice of Reason",
        "runes": [
            "Lem",
            "Ko",
            "El",
            "Eld"
        ],
        "itemTypes": [
            "Maces",
            "Swords"
        ],
        "clvl": 43,
        "effects": [
            "15% Chance To Cast Level 13 Frozen Orb On Striking",
            "18% Chance To Cast Level 20 Ice Blast On Striking",
            "+50 To Attack Rating",
            "+220-350% Damage To Demons (varies)",
            "+355-375% Damage To Undead (varies)",
            "+50 To Attack Rating Against Undead",
            "Adds 100-220 Cold Damage",
            "-24% To Enemy Cold Resistance",
            "+10 To Dexterity",
            "Cannot Be Frozen",
            "75% Extra Gold From Monsters",
            "+1 To Light Radius "
        ]
    },
    {
        "name": "Wealth",
        "runes": [
            "Lem",
            "Ko",
            "Tir"
        ],
        "itemTypes": [
            "Body Armor"
        ],
        "clvl": 43,
        "effects": [
            "+10 to Dexterity",
            "+2 to Mana After Each Kill",
            "300% Extra Gold From Monsters",
            "100% Better Chance of Getting Magic Items "
        ]
    },
    {
        "name": "White",
        "runes": [
            "Dol",
            "Io"
        ],
        "itemTypes": [
            "Wands"
        ],
        "clvl": 35,
        "effects": [
            "+3 to Poison and Bone Skills (Necromancer Only)",
            "+20% Faster Cast Rate",
            "+2 to Bone Spear (Necromancer Only)",
            "+4 to Skeleton Mastery (Necromancer Only)",
            "+3 to Bone Armor (Necromancer Only)",
            "Hit causes monster to flee 25%",
            "+10 to vitality",
            "+13 to mana",
            "Magic Damage Reduced by 4"
        ]
    },
    {
        "name": "Wind",
        "runes": [
            "Sur",
            "El"
        ],
        "itemTypes": [
            "Any Melee Weapon"
        ],
        "clvl": 61,
        "effects": [
            "10% Chance To Cast Level 9 Tornado On Striking",
            "+20% Faster Run/Walk",
            "+40% Increased Attack Speed",
            "+15% Faster Hit Recovery",
            "+120-160% Enhanced Damage (varies)",
            "-50% Target Defense",
            "+50 To Attack Rating",
            "Hit Blinds Target",
            "+1 To Light Radius",
            "Level 13 Twister (127 Charges) "
        ]
    },
    {
        "name": "Wrath",
        "runes": [
            "Pul",
            "Lum",
            "Ber",
            "Mal"
        ],
        "itemTypes": [
            "Bows"
        ],
        "clvl": 63,
        "effects": [
            "30% Chance To Cast Level 1 Decrepify On Striking",
            "5% Chance To Cast Level 10 Life Tap On Striking",
            "+375% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "+250-300% Damage To Undead (varies)",
            "Adds 85-120 Magic Damage",
            "Adds 41-240 Lightning Damage",
            "20% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "+10 To Energy",
            "Cannot Be Frozen "
        ]
    },
    {
        "name": "Zephyr",
        "runes": [
            "Ort",
            "Eth"
        ],
        "itemTypes": [
            "Bows"
        ],
        "clvl": 21,
        "effects": [
            "7% Chance to Cast Level 1 Twister When Struck",
            "+25% Faster Run/Walk",
            "+25% Increased Attack Speed",
            "+33% Enhanced Damage",
            "-25% Target Defense",
            "+66 to Attack Rating",
            "Adds 1-50 lightning damage",
            "+25 Defense "
        ]
    }
]

const validateRunewords = () => {
    const missingRunes = runewords.map(runeword => runeword.runes.filter(rune => !runes.includes)).flat()
    if (missingRunes.length) {
        console.warn('Possibly fat-fingered rune names:', missingRunes)
    }

    const itemTypes = Array.from(new Set(runewords.map(runeword => runeword.itemTypes).flat())).sort()
    if (itemTypes.length) {
        // console.warn('All item types (check those out by hand for now)', itemTypes)
    }

    const unfinishedRunewords = [
        ...runewords.filter(runeword => !runeword.itemTypes.length),
        ...runewords.filter(runeword => !runeword.effects.length),
        ...runewords.filter(runeword => !runeword.runes.length),
        ...runewords.filter(runeword => runeword.clvl > 99),
    ]
    if (unfinishedRunewords.length) {
        console.warn('Unfinished runewords, please fill these in:', unfinishedRunewords.map(runeword => runeword.name))
    }
}

validateRunewords()
