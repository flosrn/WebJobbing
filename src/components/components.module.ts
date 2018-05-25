import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from './register-form/register-form.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({  
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,
    SettingsComponent,
        
    ],
    imports: [
        IonicModule
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        ProfileViewComponent,
    SettingsComponent,
    ],
})

export class ComponentsModule {
    
}