export const openContextMenu = (e) => {
    console.log(e)
    e.preventDefault()
    let x, y
    dataAboutAuto.id.map((item, i) => {
        if (item[0] === +e.target.id) {
            [x, y] = dataAboutAuto.currentCursorPosition[i]
            contextMenu.style
            contextMenu.style.left = x
            contextMenu.style.top = y
            contextMenu.style.display = 'inline-block'
        }
    })
}