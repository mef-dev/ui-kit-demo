import { Component, OnInit } from '@angular/core';
import { FilteredFieldContainerComponent, FilteredFieldItemComponent }  from '@natec/mef-dev-ui-kit';
import { MefDevFilteredFieldModule }  from '@natec/mef-dev-ui-kit';
import { FilteredFieldService, FiltredItemModel }  from '@natec/mef-dev-ui-kit';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MefDevTabsModule }  from '@natec/mef-dev-ui-kit';

enum DataKeys{
  MODEL='model',
  COUNTRY='country',
  SYSTEM='system'
}

@Component({
  selector: 'app-filtered-field',
  templateUrl: './filtered-field.component.html',
  styleUrls: ['./filtered-field.component.scss']
})
export class FilteredFieldComponent implements OnInit {
  public DataKeys: typeof DataKeys = DataKeys;

  public data =[
    {model: "BMW",   country: "Germany", system:"FrontWheel" },
    {model: "BMW",   country: "Germany", system:"RearWheel" },
    {model: "Volvo", country: "Sweden", system:"FrontWheel" },
    {model: "Volvo", country: "Sweden", system:"RearWheel" },
    {model: "Volvo", country: "Sweden", system:"RearWheel" },
    {model: "Volvo", country: "Sweden", system:"FrontWheel" },
    ]

  public filteredData=[...this.data]

  constructor(private filteredFieldService:FilteredFieldService) { }
	serviceCategoryType: string = '';
  

  f_CategoryTypeChange(key:DataKeys,value: string){
		this.serviceCategoryType = value;
		this.filteredFieldService.sendNewFilterItem(
			new FiltredItemModel(
			  key, 
			  value, 
			  '', 
			  standartValue => {
          this.filteredData=[...this.data];
				  this.serviceCategoryType = standartValue;
			  }));

        this.filteredData=this.data.filter(car=> value=="" || car[key]===value)
      }

  ngOnInit(): void {
  }
}
