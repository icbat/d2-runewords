const createRunewordRow = runeword => {
    const wrapper = document.createElement('tr')

    const name = document.createElement('td')
    name.append(runeword.name)

    const level = document.createElement('td')
    level.append(runeword.clvl)

    const itemTypes = document.createElement('td')
    itemTypes.append(runeword.itemTypes)

    const runes = document.createElement('td')
    runes.append(runeword.runes)

    const effects = document.createElement('td')
    runeword.effects.map(line => {
        const lineWrapper = document.createElement('div')
        lineWrapper.append(line)
        return lineWrapper
    }).forEach(el => effects.appendChild(el))



    wrapper.append(name)
    wrapper.append(level)
    wrapper.append(itemTypes)
    wrapper.append(runes)
    wrapper.append(effects)
    return wrapper
}

const renderRunewords = () => {
    const runewordsWrapper = document.getElementById('runewords')
    const x = [...runewordsWrapper.children].forEach(child => { child.remove() })
    const selectedRunes = [...document.getElementsByTagName('input')]
        .filter(el => el.checked)
        .map(el => el.name)

    const nameFilter = document.getElementById('filter-name').value
    const effectsFilter = document.getElementById('filter-effects').value

    runewords
        .filter(runeword => runeword.runes.length === runeword.runes.filter(rune => selectedRunes.includes(rune)).length)
        .filter(runeword => !nameFilter || runeword.name.toLowerCase().includes(nameFilter))
        .filter(runeword => !effectsFilter || runeword.effects.join('').toLowerCase().includes(effectsFilter))
        .map(createRunewordRow).forEach(el => document.getElementById('runewords').append(el))
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
