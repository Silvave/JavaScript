function medenkaWars(arrInput) {
    const medenkaSingleDmg = 60

    const whitePower = 'white'
    const darkPower = 'dark'

    const whiteLord = 'Vitkor'
    const darkLord = 'Naskor'

    let medenkaLordsData = {
        [whitePower]: {
            name: whiteLord,
            prevDmg: 0,
            attackCount: 0,
            specialAbility: 2,
            totalDmg: 0,
            multiplier: 2.75
        },
        [darkPower]: {
            name: darkLord,
            prevDmg: 0,
            attackCount: 0,
            specialAbility: 5,
            totalDmg: 0,
            multiplier: 4.5
        }
    }

    function updateLordData(lord, currentDmgDone) {
        if (lord.prevDmg === currentDmgDone) {
            lord.attackCount++
        } else {
            lord.prevDmg = currentDmgDone
            lord.attackCount = 1
        }

        if (lord.attackCount >= lord.specialAbility) {
            let specialDmgDone = currentDmgDone * lord.multiplier

            lord.totalDmg += specialDmgDone
            lord.prevDmg = specialDmgDone

            if (lord.name === whiteLord) {
                lord.attackCount = 0
            } else {
                lord.attackCount = 1
            }
        } else {
            lord.totalDmg += currentDmgDone
        }
    }

    arrInput = arrInput.map(row => row.split(' '))

    for (let [quanNum, lordType, medenka] of arrInput) {
        if (!lordType) {
            continue
        }

        let currentLordData = medenkaLordsData[lordType]

        let damageDone = medenkaSingleDmg * Number(quanNum)

        updateLordData(currentLordData, damageDone)
    }

    // Slower but gives 100/100 barely
    // let winnerLordObj = Object.entries(medenkaLordsData)
    //   .sort(([lordA, objA], [lordB, objB]) => objB.totalDmg - objA.totalDmg)
    //   .map(([lord, obj]) => obj)[0]

    let winnerLord
    let mostDmg
    if (medenkaLordsData[whitePower].totalDmg > medenkaLordsData[darkPower].totalDmg) {
        winnerLord = medenkaLordsData[whitePower].name
        mostDmg = medenkaLordsData[whitePower].totalDmg
    } else {
        winnerLord = medenkaLordsData[darkPower].name
        mostDmg = medenkaLordsData[darkPower].totalDmg
    }

    console.log(`Winner - ${winnerLord}`)
    console.log(`Damage - ${mostDmg}`)
}

function authorSolution(arrInput) {
    let vitkorDealtDmg = 0
    let naskorDealtDmg = 0

    let vitkorConsecAttacks = 0
    let naskorConsecAttacks = 0

    let vitkorPrevDmg = Number.NEGATIVE_INFINITY
    let naskorPrevDmg = Number.NEGATIVE_INFINITY

    for (let i = 0; i < arrInput.length; i++) {
        let line = arrInput[i].split(" ")

        let countOfMedenkas = Number(line[0])
        let currentDmg = 60 * countOfMedenkas
        let medenkaType = line[1]

        if (medenkaType === 'white') {
            if (vitkorPrevDmg === currentDmg) {
                vitkorConsecAttacks++
            } else {
                vitkorConsecAttacks = 1
            }

            if (vitkorConsecAttacks === 2) {
                vitkorDealtDmg += currentDmg * 2.75
                vitkorPrevDmg = currentDmg * 2.75
                vitkorConsecAttacks = 0
            } else {
                vitkorDealtDmg += currentDmg
                vitkorPrevDmg = currentDmg
            }
        } else {
            if (naskorPrevDmg === currentDmg) {
                naskorConsecAttacks++
            } else {
                naskorConsecAttacks = 1
            }

            if (naskorConsecAttacks === 5) {
                naskorDealtDmg += currentDmg * 4.5
                naskorPrevDmg = currentDmg * 4.5
                naskorConsecAttacks = 1
            } else {
                naskorDealtDmg += currentDmg
                naskorPrevDmg = currentDmg
            }
        }
    }

    if (vitkorDealtDmg > naskorDealtDmg) {
        console.log('Winner - Vitkor')
        console.log(`Damage - ${vitkorDealtDmg}`)
    } else {
        console.log('Winner - Naskor')
        console.log(`Damage - ${naskorDealtDmg}`)
    }
}

// Judge tests
medenkaWars([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas',
    '\n'
])

medenkaWars([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
])
