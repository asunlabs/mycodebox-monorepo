// form data validation
export function Validate(checkAmounts: HTMLInputElement):boolean {
    if (parseInt(checkAmounts.value)) {
        return true
    } else {
        return false
    }
}