import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomvalidationService } from '../shared/customvalidation.service';

@Directive({
  selector: '[appValidateUserName]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateUserNameDirective), multi: true }]  

})
export class ValidateUserNameDirective implements Validator{

  constructor(private customValidator: CustomvalidationService) { }  
  
  validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {  
    return this.customValidator.userNameValidator(control);  
  } 

}
