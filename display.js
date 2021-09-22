const renderRunewords = () => {
    const runewordsWrapper = document.getElementById('runewords')
    const x = [...runewordsWrapper.children].forEach(child => { child.remove() })
    const selectedRunes = [...document.getElementsByTagName('input')]
        .filter(el => el.checked)
        .map(el => el.name)

    runewords.map(runeword => runeword.runes.filter(rune => selectedRunes.includes(rune))).forEach(out => console.log(out))

    runewords
        .filter(runeword => runeword.runes.length === runeword.runes.filter(rune => selectedRunes.includes(rune)).length)
        .map(runeword => {
            console.log(runeword)
            const wrapper = document.createElement('div')
            wrapper.append(runeword.name)

            return wrapper
        }).forEach(el => document.getElementById('runewords').append(el))
}


const createRuneBox = targetId => rune => {
    const wrapper = document.createElement('div')

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.name = rune
    input.value = rune
    input.defaultChecked = true
    input.onchange = renderRunewords

    wrapper.append(input)
    wrapper.append(rune)

    document.getElementById(targetId).appendChild(wrapper)
}

normalCountessRunes.forEach(createRuneBox('normalCountessRunes'))
nightmareCountessRunes.forEach(createRuneBox('nightmareCountessRunes'))
hellCountessRunes.forEach(createRuneBox('hellCountessRunes'))
nonCountessRunes.forEach(createRuneBox('nonCountessRunes'))

renderRunewords()
