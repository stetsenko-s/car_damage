import { circle } from "./template/circle.js";
import { openContextMenu } from "./template/contextMenu.js"
import { addDescriptionDamage } from "./template/descriptionDamage.js";

// Получает данный из Local Storage и передает в массив
export const getDataFromLocalStorage = (data) => {
    const getData = JSON.parse(localStorage.getItem('test'))

    if (!getData) return

    data.numberDamage = getData[0]
    data.currentCursorPosition = [...getData[1]]
    data.dateAddDamage = [...getData[2]]
    data.description = [...getData[3]]
    data.id = [...getData[4]]
}

// Обновляет данные в Local Storage=_
const addDataInLocalStorage = (data) => {
    const getDataFromLocalStorage = JSON.parse(localStorage.getItem('test'))

    // Данные из LS
    const numberDamage = data.numberDamage
    const currentCursorPosition = data.currentCursorPosition
    const dateAddDamage = data.dateAddDamage
    const description = data.description
    const id = data.id

    // Если в LS нет данных - LS заполняется пустыми данными
    if (getDataFromLocalStorage == null) {
        return localStorage.setItem('test', JSON.stringify(
            [numberDamage,
                currentCursorPosition,
                dateAddDamage,
                description,
                id]))
    } else {
        //Если данные есть, то они удаляются и заново записываются с учетом обновлений
        localStorage.clear()
        return localStorage.setItem('test', JSON.stringify(
            [numberDamage,
                currentCursorPosition,
                dateAddDamage,
                description,
                id])
        )
    }
}

// Получает данные меток
export const getPositionCursor = (blockImage, dataAboutAuto, blockDescription) => {
    blockImage.addEventListener('click', e => {
        const position = [e.offsetX - 12, e.offsetY -12]
        dataAboutAuto.currentCursorPosition.push(position)
        dataAboutAuto.setNumberDamage()
        dataAboutAuto.setDateDamage()
        dataAboutAuto.setId(Date.now())
        addDataInLocalStorage(dataAboutAuto)

        addDescriptionDamage(blockDescription, dataAboutAuto)

        createNewCircle(position, dataAboutAuto, blockImage)
    })
}

// Загружает метки из LS
export const createCircle = (data, blockImage) => {
    for (let i = 0; i < data.numberDamage; i++) {
        const id = data.id[i]
        const x = data.currentCursorPosition[i][0]
        const y = data.currentCursorPosition[i][1]
        const numberDamage = i + 1
        blockImage.insertAdjacentHTML('afterbegin', circle(id, numberDamage, x, y, openContextMenu)
        )
    }
}

// Создает новые метки при нажатии на картинку
const createNewCircle = (position, dataAboutAuto, blockImage) => {
    console.log(position, dataAboutAuto.id, blockImage)
    const [x, y] = position
    blockImage.insertAdjacentHTML('afterbegin',
        circle(dataAboutAuto.id, dataAboutAuto, x, y, openContextMenu)
    )
}