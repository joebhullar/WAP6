import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../Models/Feedback';

@Injectable()
export class FeedbackService {
  private headers: HttpHeaders;
  private url:string = 'http://localhost:58052/api/Feedback/FeedbackList';
  private createFeedbackurl:string = 'http://localhost:58052/api/Feedback/CreateFeedback';
  constructor(private http:HttpClient) {   }
  public getFeedback():Observable<Feedback[]>
  {
     return this.http.get<Feedback[]>(this.url);
  
  }

  
  SaveFeedback(temp): Observable<Feedback[]> {
    alert('hi');
    alert(temp.value);
    console.log(temp.value);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    // tslint:disable-next-line:max-line-length
    alert(temp.value.feedbackGiven);
    alert(temp.value.feedbackBy);
    const body = {feedbackGiven: temp.value.feedbackGiven,feedbackBy: temp.value.feedbackBy,feedbackDate: temp.value.feedbackDate };
    return this.http.post<Feedback[]>(this.createFeedbackurl, body, {headers});
  }
}