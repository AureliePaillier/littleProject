import { Component, OnInit } from '@angular/core';
import { contractData, ContractType } from '../models/contract-type.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from '../models/job.model';
import { JobsService } from '../../../services/jobs.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  contractTypeData: ContractType[] = contractData;
  form: FormGroup;
  
  constructor(
    private jobsServices: JobsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(new Job());
  }

  onSave(): void {
    console.log(this.form.value);
    this.jobsServices.add(this.form.value).subscribe(
      (job: Job) => console.log(job),
      err => console.log(err)
    );

    this.form.reset();
  }

}
 