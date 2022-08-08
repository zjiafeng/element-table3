function sortString(arr: any[], pro: string | number) {
    return arr.sort((a, b) => {
        if (a[pro] && b[pro]) {
            return a[pro].localeCompare(b[pro])
        }
    })
}

/**
 * array排序
 * @param arr
 * @param pro
 * @returns {*[]}
 */
export function sortMax(arr: any[], pro: string | number): any[] {
    let numberList: any = []
    let otherList: any = []
    arr.forEach(element => {
        if (Number(element[pro])) { // 判断是否为数字
            numberList.push(element)
        } else {
            otherList.push(element)
        }
    })
    return [...(numberList.sort((a: any, b: any) => { return a[pro] - b[pro] })), ...sortString(otherList, pro)]
}