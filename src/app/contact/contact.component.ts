import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RightBarComponent } from "../right-bar/right-bar.component";
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ArrowComponent } from '../arrow/arrow.component';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RightBarComponent, FormsModule, ArrowComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  language: string = 'en';
  navigateTo: string = 'mywork'
  http = inject(HttpClient);
  check = false;
  mailTest = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  }
  post = {
    endPoint: 'https://jan-bruchwalski.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  @Output() showPage = new EventEmitter();
  @Output() showDialog = new EventEmitter();

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  /**
 * emits the showPage-Event to navigate to mywork-component
 */
  emitShowPage() {
    this.showPage.emit(this.navigateTo);
  }

  /**
   * emits the showDialog-Event to open the dialog (legal notice or privacy policy)
   * @param id id for legal notice or privacy policy
   */
  emitShowDialog(id: string) {
    this.showDialog.emit(id);
  }

  /**
   * Sumbits the form
   * @param ngForm 
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      this.emitShowDialog("userfeedback");
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.emitShowDialog("userfeedback");
    }
  }
}


