import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { RequestService } from '../../../../services/request.service';


@Component({
  selector: 'app-conference-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: UntypedFormGroup
  submit!: boolean

  constructor(
    public fb: UntypedFormBuilder,
    private requestService: RequestService
  ) {
    this.contactForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  get form() {
    return this.contactForm.controls
  }

  submitForm() {
    this.submit = true
    if (this.contactForm.valid) {
      this.requestService.sendRequest(this.contactForm.value).subscribe(response => {
        console.log('Request sent successfully:', response);
      }, error => {
        console.error('Error sending request:', error);
      });
    }
  }
}
