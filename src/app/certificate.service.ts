import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  API = "http://localhost:8080";  // API base URL

  constructor(private http: HttpClient) { }

  // Method to register a new certificate
  public registerCertificate(certificateData: any) {
    return this.http.post(`${this.API}/certificateservice`, certificateData);  // Correct string interpolation with backticks
  }

  // Method to get all certificates
  public getCertificates() {
    return this.http.get(`${this.API}/certificateservice`);  // Correct string interpolation
  }

  // Method to delete a certificate by its ID
  public deleteCertificate(certificateId: any) {
    return this.http.delete(`${this.API}/certificateservice/${certificateId}`);  // Correct string interpolation
  }

  // Method to update a certificate
  public updateCertificate(certificate: any) {
    return this.http.put(`${this.API}/certificateservice/${certificate.id}`, certificate);  // Correct string interpolation
  }
}
