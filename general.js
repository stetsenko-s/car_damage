import { addDescriptionDamage } from "./template/descriptionDamage.js";
import { openContextMenu } from "./template/contextMenu.js"
import { getDataFromLocalStorage, getPositionCursor, createCircle } from "./localStorage.js"

const blockImage = document.querySelector('.block')
const blockDescription = document.querySelector('.data_damage')
const contextMenu = document.querySelector('.context-menu')

// преобразует время
const timestampToDate = (ts) => {
    let d = new Date();
    const timeData = new Date()
    d.setTime(ts);
    return [('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear(),
        `${timeData.getHours()}:${timeData.getMinutes()}`]
}

const dataAboutAuto = {
    id: [],
    numberDamage: 0,
    currentCursorPosition: [],
    dateAddDamage: [],
    description: [], // Описание повреждения
    setNumberDamage() {
        this.numberDamage += 1
    },
    setDateDamage() {
        this.dateAddDamage.push(timestampToDate(Date.now()))
    },
    setDescription(title) {
        this.description.push([title])
    },
    setId(id) {
        this.id.push([id])
    }
}

getDataFromLocalStorage(dataAboutAuto)
getPositionCursor(blockImage, dataAboutAuto, blockDescription)
createCircle(dataAboutAuto, blockImage)

// Удаляет все из Local Storage
document.querySelector('.clear')
    .addEventListener('click', () => localStorage.clear())
