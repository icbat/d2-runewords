const listToLines = stringList => {
    return stringList.map(line => {
        const lineWrapper = document.createElement('div')
        lineWrapper.append(line)
        return lineWrapper
    })
}

const lowestRuneCategory = runes => {
    if (runes.some(rune => nonCountessRunes.includes(rune))) {
        return 'nonCountessRunes'
    }

    if (runes.some(rune => hellCountessRunes.includes(rune))) {
        return 'hellCountessRunes'
    }

    if (runes.some(rune => nightmareCountessRunes.includes(rune))) {
        return 'nightmareCountessRunes'
    }

    return 'normalCountessRunes'
}

const createRunewordRow = runeword => {
    const wrapper = document.createElement('tr')

    const name = document.createElement('td')
    name.append(runeword.name)

    const level = document.createElement('td')
    level.append(runeword.clvl)

    const itemTypes = document.createElement('td')
    listToLines(runeword.itemTypes).forEach(el => itemTypes.appendChild(el))

    const runes = document.createElement('td')
    listToLines(runeword.runes).forEach(el => runes.appendChild(el))

    const effects = document.createElement('td')
    listToLines(runeword.effects).forEach(el => effects.appendChild(el))

    wrapper.className = lowestRuneCategory(runeword.runes)

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
        .map(el => el.value)

    const nameFilter = document.getElementById('filter-name').value
    const effectsFilter = document.getElementById('filter-effects').value
    const runesFilter = document.getElementById('filter-runes').value
    const itemTypesFilter = document.getElementById('filter-item-types').value
    const levelFilter = Number(document.getElementById('filter-level').value)

    runewords
        .filter(runeword => runeword.runes.length === runeword.runes.filter(rune => selectedRunes.includes(rune)).length)
        .filter(runeword => !nameFilter || runeword.name.toLowerCase().includes(nameFilter))
        .filter(runeword => !effectsFilter || runeword.effects.join('').toLowerCase().includes(effectsFilter))
        .filter(runeword => !itemTypesFilter || runeword.itemTypes.join('').toLowerCase().includes(itemTypesFilter))
        .filter(runeword => !runesFilter || runeword.runes.join('').toLowerCase().includes(runesFilter))
        .filter(runeword => !itemTypesFilter || runeword.itemTypes.join('').toLowerCase().includes(itemTypesFilter))
        .filter(runeword => !levelFilter || runeword.clvl <= levelFilter)
        .map(createRunewordRow).forEach(el => document.getElementById('runewords').append(el))
}

const createRuneBox = targetId => rune => {
    const wrapper = document.createElement('div')

    const input = document.createElement('input')
    input.type = 'checkbox'
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

const toggleColumn = (that) => {
    console.log(that.checked)
    const [_thisOne, ...toToggle] = [...that.parentElement.getElementsByTagName('input')]

    toToggle.forEach(el => el.checked = that.checked)
    renderRunewords()
}
