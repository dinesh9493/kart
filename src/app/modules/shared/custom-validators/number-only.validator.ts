import { AbstractControl } from "@angular/forms";

export function NumberOnly(e: AbstractControl) {
    let regx = /^[0-9]*$/;
    let result = regx.test(e.value);
    if(result == false) {
        return { notAnNumber: true };
    }
    return null;
}