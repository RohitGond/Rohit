import { Injectable } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { ImageComponent } from './image/image.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { TitleComponent } from './title/title.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentHelperService {

  constructor() { }
  determineComponent(componentType: string) {
    switch (componentType) {
      case 'formPanel':
        return FormPanelComponent;
      case 'textField':
        return TextFieldComponent;
      case 'passwordField':
        return PasswordFieldComponent;
      case 'button':
        return ButtonComponent;
      case 'image':
        return ImageComponent;
      
      case 'title':
        return TitleComponent;
      
    }
    return true;
  }
}
