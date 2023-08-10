export const addDescriptionDamage = (blockDescription, data) => {
    blockDescription.insertAdjacentHTML('afterbegin',
        `<div class="data__description">
                  <input type="checkbox"/>  
                  <p>${data.numberDamage}</p>
                  <p class="description-damage" 
                     contenteditable="false"
                     ondblclick=${correctionOfTheDescription(event)}
                     onkeydown=${pressEnter(data, event)}
                     >
                    Описание повреждения
                  </p>
                  <p>${data.dateAddDamage[0][0]}</p>
               </div>`)
}

// Устанавливает значение true атрибуту contenteditable
const correctionOfTheDescription = (e) => {
    return e.composedPath()[0].contentEditable = true
}

// При нажатии на Enter устанавливает значение false атрибуту contenteditable
const pressEnter = (data, e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
        e.composedPath()[0].contentEditable = false
        const text = e.target.innerText
        data.setDescription(text)
    }
}