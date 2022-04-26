const passwordString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$?!&'


const generateBtn = document.getElementById('generate-btn')
const firstPass = document.querySelector('.output-1')
const secondPass = document.querySelector('.output-2')
const thirdPass = document.querySelector('.output-3')
const fourthPass = document.querySelector('.output-4')

function generatePassword(){
    const passwordLength = document.getElementById('input-num').value
    let password = ''
    for(let i = 0; i <= passwordLength; i++){
        randomNum = Math.floor(Math.random() * passwordString.length)
        password += passwordString[randomNum]
    }
    return password
}

generateBtn.addEventListener('click', ()=> {
    const firstOutPut = generatePassword()
    const secondOutPut = generatePassword()
    const thirdOutPut = generatePassword()
    const fourthOutPut = generatePassword()

    firstPass.textContent = firstOutPut
    secondPass.textContent = secondOutPut
    thirdPass.textContent = thirdOutPut
    fourthPass.textContent = fourthOutPut

})