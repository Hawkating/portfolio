import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ArrowComponent } from "./arrow/arrow.component";
import { AtfComponent } from "./atf/atf.component";
import { WhymeComponent } from "./whyme/whyme.component";
import { SocialsComponent } from './socials/socials.component';
import { SkillsComponent } from './skills/skills.component';
import { MyworkComponent } from "./mywork/mywork.component";
import { ProjectcardComponent } from "./projectcard/projectcard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ArrowComponent, AtfComponent, WhymeComponent, SocialsComponent, SkillsComponent, MyworkComponent, ProjectcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jan Bruchwalski';
}
