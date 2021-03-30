export interface Total {
    name: String,
    totalCost: number,
    totalCurrentValue: number,
    totalReturn: number,
    percent: number
}

export interface TotalArray extends Array<Total> {

}