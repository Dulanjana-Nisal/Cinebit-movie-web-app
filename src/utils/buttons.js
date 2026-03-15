// pre button
export function preBtn(setSearchParems,type,page) {
    setSearchParems({ type: type, page: Number(page) - 1 })
}

//next button
export function nextBtn(setSearchParems,type,page) {
    setSearchParems({ type: type, page: Number(page) + 1 })
}

//pre button for List params
export function preListBtn(setSearchParems,listParem,page){
    setSearchParems({ list: listParem, page: Number(page) - 1 })
}

// next button for list params
export function nextListBtn(setSearchParems,listParem,page){
    setSearchParems({ list: listParem, page: Number(page) + 1 })
}

//pre trending button
export function preTrendingBtn(setSearchParems,page){
    setSearchParems({ page: Number(page) - 1  })
}

//next trending button
export function nextTrendingBtn(setSearchParems,page){
    setSearchParems({ page: Number(page) + 1  })
}

//Reload button
export function reloadPage(){
    window.location.reload()
}