import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificateService } from './certificate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'certificate-module';

  constructor(private certificateService: CertificateService) {
    this.getCertificateDetails();
  }

  registerCertificate(registerForm: NgForm) {
    this.certificateService.registerCertificate(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getCertificateDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getCertificateDetails() {
    this.certificateService.getCertificates().subscribe(
      (resp) => {
        console.log(resp);
        this.certificateDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  certificateDetails = null as any;

  deleteCertificate(certificate: any) {
    this.certificateService.deleteCertificate(certificate.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getCertificateDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  certificateToUpdate = {
    id: null as any,
    name: "",
    issuedBy: "",
    issuedDate: ""
  };

  editCertificate(certificate: any) {
    this.certificateToUpdate = { ...certificate };
  }

  updateCertificate() {
    this.certificateService.updateCertificate(this.certificateToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getCertificateDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}