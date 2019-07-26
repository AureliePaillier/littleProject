import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../components/jobs/models/job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  add(job: Job): Observable<Job> {
    return this.http.post<Job>('/jobs', job);
  }

}
