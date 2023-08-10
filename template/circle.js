export const circle = (id, dataAboutAuto, x, y, openContextMenu) => {
    return (
        `<div 
           id=${id}
           class="circle" 
           oncontextmenu={openContextMenu(event)}
           onclick="" 
           style="
                top:${y}px; 
                left:${x}px;"
         >
            ${dataAboutAuto.numberDamage ? dataAboutAuto.numberDamage : dataAboutAuto}
       </div>`
    )
}
