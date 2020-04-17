const message = "sirready" // 8 char max
const keys = ["rest", "time", "call", "left"]



// Input
let result = `Mesajul: ${message} ${binaryNumber(message, { withSpace: true })}
${binaryNumber(message.slice(0, 4), { withSpace: true })} - stanga
${binaryNumber(message.slice(4), { withSpace: true })} - dreapta
${showKeys(keys)}

`

const delta = 2654435769

// Right Side
let leftBinaryMessage = binaryNumber(message.slice(0, 4))
let rightBinaryMessage = binaryNumber(message.slice(4))

// --------------------------------
let firstResult = decimalNumber(rightBinaryMessage) << 4
let secondResult = firstResult + decimalNumber(binaryNumber(keys[0])) % 2 ** 32

let thirdResult = decimalNumber(rightBinaryMessage) + delta % 2 ** 32

let fourthResult = decimalNumber(rightBinaryMessage) >> 5
let fifthResult = fourthResult + decimalNumber(binaryNumber(keys[1])) % 2 ** 32
// --------------------------------

let encryptedRightMessage = secondResult ^ thirdResult ^ fifthResult
let newRightMessage = encryptedRightMessage + decimalNumber(leftBinaryMessage) % 2 ** 32

const finalLeftMessage = newRightMessage

// Cript

result += `   The odd part:

1.  The right side moves to the left with 4 bits:
    
    ${rightBinaryMessage} << 4 = ${binaryNumber(firstResult)}

2.  To the result (1) add the value "K0" mod 2 ^ 32:

    ${binaryNumber(firstResult)} + ${binaryNumber(keys[0])} mod 2^32 = ${binaryNumber(secondResult)}

3.  The right side joins I * "delta" mode 2 ^ 32:

    ${rightBinaryMessage} + 1 * ${binaryNumber(delta)} mod 2^32 = ${binaryNumber(thirdResult)}

4. The right side moves to the right with 5 bits:

    ${rightBinaryMessage} >> 5 = ${binaryNumber(fourthResult)}

5. To the result (4) add the value "K1" mod 2 ^ 32:

    ${binaryNumber(fourthResult)} + ${binaryNumber(keys[1])} mod 2^32 = ${binaryNumber(fifthResult)}

6.  The "XOR" is performed between the results (2), (3) and (5):

    ${binaryNumber(secondResult)} XOR ${binaryNumber(thirdResult)} XOR ${binaryNumber(fifthResult)} = ${binaryNumber(encryptedRightMessage)}

7. The left side is added together with the result (6) mode 2 ^ 32:

    ${leftBinaryMessage} + ${binaryNumber(encryptedRightMessage)} mod 2^32 = ${binaryNumber(newRightMessage)}



`

// The even side
leftBinaryMessage = binaryNumber(message.slice(4))
rightBinaryMessage = binaryNumber(newRightMessage)

// --------------------------------
firstResult = decimalNumber(rightBinaryMessage) << 4
secondResult = firstResult + decimalNumber(binaryNumber(keys[2])) % 2 ** 32

thirdResult = decimalNumber(rightBinaryMessage) + delta % 2 ** 32

fourthResult = decimalNumber(rightBinaryMessage) >> 5
fifthResult = fourthResult + decimalNumber(binaryNumber(keys[3])) % 2 ** 32
// --------------------------------

encryptedRightMessage = secondResult ^ thirdResult ^ fifthResult
newRightMessage = decimalNumber(leftBinaryMessage) + encryptedRightMessage % 2 ** 32

const finalResult = binaryNumber(finalLeftMessage) + binaryNumber(newRightMessage)

result += `    Even side:

1.  The right side moves to the left with 4 bits:
    
    ${rightBinaryMessage} << 4 = ${binaryNumber(firstResult)}

2.  To the result (1) add the value "K0" mod 2 ^ 32:

    ${binaryNumber(firstResult)} + ${binaryNumber(keys[0])} mod 2^32 = ${binaryNumber(secondResult)}

3. The right side joins I * "delta" mode 2 ^ 32:

    ${rightBinaryMessage} + 1 * ${binaryNumber(delta)} mod 2^32 = ${binaryNumber(thirdResult)}

4.  The right side moves to the right with 5 bits:

    ${rightBinaryMessage} >> 5 = ${binaryNumber(fourthResult)}

5.  To the result (4) add the value "K1" mod 2 ^ 32:

    ${binaryNumber(fourthResult)} + ${binaryNumber(keys[1])} mod 2^32 = ${binaryNumber(fifthResult)}

6.  The "XOR" is performed between the results (2), (3) and (5):

    ${binaryNumber(secondResult)} XOR ${binaryNumber(thirdResult)} XOR ${binaryNumber(fifthResult)} = ${binaryNumber(encryptedRightMessage)}

7. The left side is joined by the result (6) mode 2 ^ 32:

    ${leftBinaryMessage} + ${binaryNumber(encryptedRightMessage)} mod 2^32 = ${binaryNumber(newRightMessage)}


    The outcome: ${binariesAndTranslationText(finalResult)}


`


// decryption
leftBinaryMessage = binaryNumber(newRightMessage)
rightBinaryMessage = rightBinaryMessage


// --------------------------------
firstResult = decimalNumber(rightBinaryMessage) << 4
secondResult = firstResult + decimalNumber(binaryNumber(keys[2])) % 2 ** 32

thirdResult = decimalNumber(rightBinaryMessage) + delta % 2 ** 32

fourthResult = decimalNumber(rightBinaryMessage) >> 5
fifthResult = fourthResult + decimalNumber(binaryNumber(keys[3])) % 2 ** 32
// --------------------------------

encryptedRightMessage = decimalNumber(binaryNumber(secondResult ^ thirdResult ^ fifthResult))

newRightMessage = decimalNumber(leftBinaryMessage) - encryptedRightMessage % 2 ** 32

result += `decryption:

    Even side:

1.  The right side moves to the left with 4 bits:
    
    ${rightBinaryMessage} << 4 = ${binaryNumber(firstResult)}

2.  To the result (1) add the value "K0" mod 2 ^ 32:

    ${binaryNumber(firstResult)} + ${binaryNumber(keys[0])} mod 2^32 = ${binaryNumber(secondResult)}

3.  The right side joins I * "delta" mode 2 ^ 32:

    ${rightBinaryMessage} + 1 * ${binaryNumber(delta)} mod 2^32 = ${binaryNumber(thirdResult)}

4.  The right side moves to the right with 5 bits:

    ${rightBinaryMessage} >> 5 = ${binaryNumber(fourthResult)}

5. To the result (4) add the value "K1" mod 2 ^ 32:

    ${binaryNumber(fourthResult)} + ${binaryNumber(keys[1])} mod 2^32 = ${binaryNumber(fifthResult)}

6.  "XOR" is performed between the results (2), (3) and (5)

    ${binaryNumber(secondResult)} XOR ${binaryNumber(thirdResult)} XOR ${binaryNumber(fifthResult)} = ${binaryNumber(encryptedRightMessage)}

7.  From the left side the result (6) mod 2 ^ 32 is subtracted:

    ${leftBinaryMessage} - ${binaryNumber(encryptedRightMessage)} mod 2^32 = ${binaryNumber(newRightMessage)}


${binariesAndTranslationText(binaryNumber(newRightMessage))}


`



// Partea impara
leftBinaryMessage = rightBinaryMessage
rightBinaryMessage = binaryNumber(newRightMessage)

// --------------------------------
firstResult = decimalNumber(rightBinaryMessage) << 4
secondResult = firstResult + decimalNumber(binaryNumber(keys[0])) % 2 ** 32

thirdResult = decimalNumber(rightBinaryMessage) + delta % 2 ** 32

fourthResult = decimalNumber(rightBinaryMessage) >> 5
fifthResult = fourthResult + decimalNumber(binaryNumber(keys[1])) % 2 ** 32
// --------------------------------

encryptedRightMessage = decimalNumber(binaryNumber(secondResult ^ thirdResult ^ fifthResult))
newRightMessage = decimalNumber(leftBinaryMessage) - encryptedRightMessage % 2 ** 32

result += `    Partea impara:

1.  The right side moves to the left with 4 bits:

    ${rightBinaryMessage} << 4 = ${binaryNumber(firstResult)}

2. To the result (1) add the value "K0" mod 2 ^ 32:

    ${binaryNumber(firstResult)} + ${binaryNumber(keys[0])} mod 2^32 = ${binaryNumber(secondResult)}

3.  The right side joins I * "delta" mode 2 ^ 32:

    ${rightBinaryMessage} + 1 * ${binaryNumber(delta)} mod 2^32 = ${binaryNumber(thirdResult)}

4. The right side moves to the right with 5 bits:

    ${rightBinaryMessage} >> 5 = ${binaryNumber(fourthResult)}

5.  To the result (4) add the value "K1" mod 2 ^ 32:

    ${binaryNumber(fourthResult)} + ${binaryNumber(keys[1])} mod 2^32 = ${binaryNumber(fifthResult)}

6.  "XOR" is performed between the results (2), (3) and (5)

    ${binaryNumber(secondResult)} XOR ${binaryNumber(thirdResult)} XOR ${binaryNumber(fifthResult)} = ${binaryNumber(encryptedRightMessage)}

7.  From the left side the result (6) mod 2 ^ 32 is subtracted

    ${leftBinaryMessage} - ${binaryNumber(encryptedRightMessage)} mod 2^32 = ${binaryNumber(newRightMessage)}

${binariesAndTranslationText(binaryNumber(newRightMessage))}

`


console.log(result)
// leftBinaryMessage


function binaryNumber(value, options = { withSpace: false }) {
  return typeof value == "number"
    ? (value < 0 ? value >>> 0 : value).toString(2)
    : [...value].reduce((accumulator, currentValue) => {
      const binary = currentValue.charCodeAt(0).toString(2)
      const eightBitLeftZeros = (options.withSpace ? ' ' : '') + new Array(9 - binary.length).join('0')

      return accumulator + eightBitLeftZeros + binary
    }, '');
}

function decimalNumber(value) {
  return parseInt((value + '')
    .replace(/[^01]/gi, ''), 2)
}

function showKeys(keys) {
  return keys.reduce((accumulator, currentValue, index) => accumulator + `Cheia K${index}: ${currentValue} ${binaryNumber(currentValue, { withSpace: true })}` + '\n', '')
}

function binariesAndTranslationText(binary) {
  const binaries = binaryText(binary)

  return `${binariesWithSpace(binaries)} -> ${binariesToText(binaries)}`
}

function binaryText(binary) {
  const splitBinary = [...binary]

  const binaryChars = []

  while (splitBinary.length) {
    const binaryLetter = splitBinary.splice(-8).join('')

    binaryChars.push(new Array(9 - binaryLetter.length).join('0') + binaryLetter)
  }

  return binaryChars.reverse()
}

function binariesWithSpace(binaries) {
  return binaries.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue, '')
}

function binariesToText(binaries) {
  return binaries.reduce((accumulator, currentValue) => accumulator + String.fromCharCode(parseInt(currentValue, 2)), '')
}
