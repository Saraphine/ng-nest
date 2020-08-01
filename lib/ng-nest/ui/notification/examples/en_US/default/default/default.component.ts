import { Component } from '@angular/core';
import { XCorner } from '@ng-nest/ui/core';
import { XNotificationService } from '@ng-nest/ui/notification';

@Component({
  selector: 'ex-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class ExDefaultComponent {
  constructor(private notification: XNotificationService) {}
  open(place: XCorner, title: string) {
    this.notification.info({
      title: title+ 'news',
      content: `The more you learn, the more you don't know.`,
      placement: place
    });
  }
}
