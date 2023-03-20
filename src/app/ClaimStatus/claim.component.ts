import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
})
export class ClaimComponent implements OnInit {
  dataemp: any = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.dataemp = [
      {
        patientDetails: {
          firstName: 'John',
          lastName: 'Smit',
        },

        claimNumber: {
          claimNumber: 'CL34246334',
          DataSubmitted: '2007-04-26T00:00:00',
          ClaimStatus: 'ADDITIONAL_INFO_REQUIRED',
        },
      },

      {
        patientDetails: {
          firstName: 'John',
          lastName: 'Smit',
        },

        claimNumber: {
          claimNumber: 'CL34246334',
          DataSubmitted: '2007-04-26T00:00:00',
          ClaimStatus: 'COMPLETED',
        },
      },

      {
        patientDetails: {
          firstName: 'John',
          lastName: 'Smit',
        },

        claimNumber: {
          claimNumber: 'CL34246334',
          DataSubmitted: '2007-04-26T00:00:00',
          ClaimStatus: 'NOT_RECIVED',
        },
      },
    ];
  }
}
