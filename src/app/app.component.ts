import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bitcoin: any;
  title = 'CI-Dashboard';
  restItems: any;
  restItemsUrl = 'http://localhost:3001/rest/v1/api/v4/dashboard';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const bitcoin$ = this.http.get('https://blockchain.info/ticker');
    this.getRestItems();
  }

  // Read all REST Items
   getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

  // Button Class Name a/c to the status
  buttonClass(status) {
    if(status=="success")
           return "btn btn-round btn-success";
    else if(status=="pending")
        return "btn btn-round btn-basic";
    else if(status=="failed")
        return "btn btn-round btn-danger";
    else if(status=="running")
        return "btn btn-round btn-primary";
   }

   // Fa Icon a/c to the status
   iconClass(status) {
    if(status=="success")
           return "fa fa-check-circle";
    else if(status=="pending")
        return "fa fa-clock-o";
    else if(status=="failed")
        return "fa fa-exclamation-triangle";
    else if(status=="running")
        return "fa fa-circle-o-notch fa-spin"
    console.log('test');
    
   }

   clickit(url) {
     window.open(
       url,
       '_blank'
     )
   }
}
