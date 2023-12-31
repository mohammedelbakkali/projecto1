import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { DialogInfoCompteComponent } from '../dialog-info-compte/dialog-info-compte.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'faq-form',
  templateUrl: 'faq-form.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [MatInputModule,MatButtonModule],
})
export class FaqForm {
  constructor() {}
}
@Component({
  selector: 'faq-list',
  templateUrl: 'faq-list.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [MdbAccordionModule,MatExpansionModule],
})
export class FaqList {
  panelOpenState = false;
  constructor() {}
}
@Component({
  selector: 'oauth',
  templateUrl: 'oauth.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [MatButtonModule],
})
export class OAuth {
  constructor() {}
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [OAuth,FaqList,FaqForm,MdbFormsModule, FormsModule,ReactiveFormsModule,CommonModule,MatExpansionModule,MatInputModule,MatIconModule,ReactiveFormsModule,MatRadioModule,MatSelectModule,MatButtonModule,DialogInfoCompteComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  panelOpenState = false;
  selectedOption: string = 'personel';
  
  @Input()
  myForm!: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Form submission logic
      console.log(this.myForm.value);
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  scrollToTarget() {
    const targetElement = document.getElementById('scrollTarget');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}


