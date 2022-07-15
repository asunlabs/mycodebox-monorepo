// form data validation
export function Validate(checkAmounts) {
    if (parseInt(checkAmounts.value)) {
        return true;
    }
    else {
        return false;
    }
}
