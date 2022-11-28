import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains: string[]): ValidatorFn {
    ///^[^@]{6,}@gmail\.(com|bg)$/
    const domainString = domains.join('|');
    const rgx = new RegExp(`^[^@]{6,}@gmail\.(${domainString})$`)
    return (control) => {
        return control.value === '' || rgx.test(control.value) ? null : {appEmailValidator: true}
    }
}