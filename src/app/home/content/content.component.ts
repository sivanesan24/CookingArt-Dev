import { Component, ElementRef, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  @ViewChild('Home') public Home: ElementRef;
  @ViewChild('French_Dishes') public French_Dishes: ElementRef;
  @ViewChild('Italian_Dishes') public Italian_Dishes: ElementRef;
  @ViewChild('Indian_Dishes') public Indian_Dishes: ElementRef;
  @ViewChild('Chinese_Dishes') public Chinese_Dishes: ElementRef;

  public eventSubscription: Subscription;


  constructor(private apiService: ApiService) {
    this.eventSubscription = this.apiService.getEvent().subscribe((res) => {
      if (res == 0) {
        this.Home.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
      if (res == 1) {
        this.French_Dishes.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
      if (res == 2) {
        this.Italian_Dishes.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
      if (res == 3) {
        this.Indian_Dishes.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
      if (res == 4) {
        this.Chinese_Dishes.nativeElement.scrollIntoView({ behavior: "smooth" });
      }
    })
  }


  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
      this.eventSubscription.unsubscribe();
  }

}
