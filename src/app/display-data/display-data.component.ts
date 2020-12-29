import { Component, Input, OnInit } from '@angular/core';
import { JsonDataServiceService } from '../shared/json-data-service.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  data:any;
  name = '';
  p:any;
  @Input() filterTerm: string;
  constructor(private _service: JsonDataServiceService) { }

  ngOnInit(): void {
    this._service.getData().subscribe((res=>{
      this.data=res;
    }))
  }

}
