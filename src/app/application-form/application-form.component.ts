import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JobApplication} from '../shared/job-application.model';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  currentStep = 1;

  constructor() {
  }

  ngOnInit() {
    this.applicationForm = new FormGroup(
      {
        connect: new FormGroup({
          email: new FormControl(null, [Validators.required, Validators.email]),
          phoneNumber: new FormControl(null, [Validators.required, this.isDutchPhoneNumber.bind(this)]),
        }),
        personalInformation: new FormGroup({
          firstName: new FormControl(null, Validators.required),
          middleName: new FormControl(null),
          lastName: new FormControl(null, [Validators.required]),
          dateOfBirth: new FormControl(null, Validators.required)
        }),
        place: new FormGroup({
          zipCode: new FormControl(null, [Validators.required, this.isDutchZipCode.bind(this)]),
          houseNumber: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(1000000)]),
        }),
        applicationInformation: new FormGroup({
          experienceLevel: new FormControl('junior', [Validators.required]),
          motivation: new FormControl(null),
          CV: new FormControl(null, [this.allowedFileExtention.bind(this)])
        })
      });
  }


  isDutchZipCode(control: FormControl) {
    const regexDutchZipCode = new RegExp(/^\d{4} ?[a-z]{2}$/i);
    if (!regexDutchZipCode.test(control.value)) {
      return {isNotDutchZipCode: true};
    }
    return null;
  }

  allowedFileExtention(control: FormControl) {
    const allowedExtensions = ['doc', 'docx', 'pdf', 'rtf', 'txt'];
    if (control.value !== null) {
      console.log(control.value);
      const extensionFile = control.value.split('.').pop().toLocaleLowerCase();
      if (allowedExtensions.indexOf(extensionFile) === -1) {
        return {notAllowedExtensionFile: true};
      }
      return null;
    }
    return null;
  }

  isDutchPhoneNumber(control: FormControl) {
    const dutchRegexPhoneNumber = new RegExp(/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/g);
    if (!dutchRegexPhoneNumber.test(control.value)) {
      return {isNotDutchPhoneNumber: true};
    }
    return null;
  }

  toNext() {
    console.log(this.applicationForm);
    console.log(this.applicationForm.get('connect').valid);
    this.currentStep++;
  }

  onSubmit() {
    this.currentStep++;
    const jobApplication = new JobApplication(
      'jrfrontendAmazon1',
      this.applicationForm.get('connect.email').value,
      this.applicationForm.get('connect.phoneNumber').value,
      this.applicationForm.get('personalInformation.firstName').value,
      this.applicationForm.get('personalInformation.middleName').value,
      this.applicationForm.get('personalInformation.lastName').value,
      this.applicationForm.get('personalInformation.dataOfBirth').value,
      this.applicationForm.get('place.zipCode').value,
      this.applicationForm.get('place.houseNumber').value,
      this.applicationForm.get('applicationInformation.experienceLevel').value,
      this.applicationForm.get('applicationInformation.motivation').value,
      this.applicationForm.get('applicationInformation.CVname').value,
    );
  }

  invalidInputValue(nameInput: string) {
    if (this.applicationForm.get(nameInput)) {
      return !this.applicationForm.get(nameInput).valid && this.applicationForm.get(nameInput).touched;
    }
    return false;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.applicationForm.patchValue({applicationInformation: {CV: file ? file.name : ' '}});

      // ToDo send file to server
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   this.applicationForm.patchValue({
      //     applicationInformation: {
      //       CV: reader.result
      //     }
      //   });

      // need to run CD since file load runs outside of zone
      // this.cd.markForCheck();
      // };
    }
  }

}
