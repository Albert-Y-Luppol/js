import {AbstractControl, ValidatorFn} from "@angular/forms";

export function yearValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const year = control.value;
    if(!year) return null;
    if(year > 1900 && year <= new Date().getFullYear()) return null;
    return {year: {value: year}};
  };
}
