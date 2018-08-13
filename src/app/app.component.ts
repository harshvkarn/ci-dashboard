import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  id: any;
  title = 'CI-Dashboard';
  restItems: any;
  restItemsUrl = 'http://worldclockapi.com/api/json/est/now';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
    this.id = setInterval(() => {
      this.getRestItems(); 
    }, 1000);
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  

  // Read all REST Items
   getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          // console.log(this.restItems);
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
        return "btn btn-round btn-warning";
    else if(status=="canceled")
        return "btn btn-round btn-cancel";
    else if(status=="failed")
        return "btn btn-round btn-danger";
    else if(status=="running")
        return "btn btn-round btn-primary";
   }

   // Fa Icon a/c to the status
   iconClass(status) {
    if(status=="success")
           return "fa fa-check-circle";
    if(status=="canceled")
           return "fa fa-ban";
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
