import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DialogService } from './dialog/services/dialog.service';
import { DialogFactoryService } from './dialog/services/dialog-factory.service';
import { DialogData } from './dialog/models/dialog-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dialog-example';

  dialog: DialogService;
  @ViewChild('firstDialogTemplate')
  firstDialogTemplate: TemplateRef<any>;

  @ViewChild('secondDialogTemplate')
  secondDialogTemplate: TemplateRef<any>;

  @ViewChild('loaderDialogTemplate')
  loaderDialogTemplate: TemplateRef<any>;

  constructor(private dialogFactoryService: DialogFactoryService) {}
}
