import { Routes } from '@angular/router';
import { AtfComponent } from './atf/atf.component';
import { WhymeComponent } from './whyme/whyme.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: AtfComponent },
    { path: 'whyme', component: WhymeComponent },
    { path: 'contact', component: ContactComponent },
];
