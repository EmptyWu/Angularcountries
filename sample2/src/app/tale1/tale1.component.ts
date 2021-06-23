import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {AppService} from '../app.service';
import { Table2Component } from '../table2/table2.component';


export interface PeriodicElement {
  flag:string;
  name: string;
  alpha2Code:string;
  alpha3Code:string;
  nativeName:string;
  altSpellings:string;
  callingCodes:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  //{ name: 'Hydrogen'},
 // {name: 'Helium'}
 {
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
},{
  "flag": "https://restcountries.eu/data/afg.svg",
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "nativeName": "افغانستان",
  "altSpellings": 
    "AF",
  "callingCodes": 
    "93"
  
},
{
  "flag": "https://restcountries.eu/data/ala.svg",
  "name": "Åland Islands",
  "alpha2Code": "AX",
  "alpha3Code": "ALA",
  "nativeName": "Åland",
  "altSpellings": 
    "AX",
  "callingCodes": 
    "358"
  
},
{
  "flag": "https://restcountries.eu/data/alb.svg",
  "name": "Albania",
  "alpha2Code": "AL",
  "alpha3Code": "ALB",
  "nativeName": "Shqipëria",
  "altSpellings": 
    "AL",
   
  "callingCodes": 
    "355"
  
}

];

@Component({
  selector: 'app-tale1',
  templateUrl: './tale1.component.html',
  styleUrls: ['./tale1.component.css']
})
export class Tale1Component implements AfterViewInit {
  countries:  Array<object> = [];
  displayedColumns: string[] = [ 'flag','name','alpha2Code','alpha3Code','nativeName','altSpellings','callingCodes'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;
   @ViewChild(MatSort)  sort!: MatSort;

  
 
   constructor(
    private apiService:AppService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    ) {}

  ngOnInit() {
    //this.dataSource.data=ELEMENT_DATA;
     
        this.getCountries();
       //this.paginator.pageSize=25;
       //this.paginator.length=ELEMENT_DATA.length;
      
       
       
      }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }

  public getCountries () {
    ELEMENT_DATA.length=0; //清空
    this.apiService.getAllCountries()
    .subscribe((data: Array<PeriodicElement>) => {
      this.paginator.length= data.length;
      this.countries = data;
      for (let i = 0; i < this.countries.length; i++) {
        ELEMENT_DATA.push({
          flag:this.countries[i]['flag'],
          name:this.countries[i]['name'],
          alpha2Code:this.countries[i]['alpha2Code'],
          alpha3Code:this.countries[i]['alpha3Code'],
          nativeName:this.countries[i]['nativeName'],
          altSpellings:this.countries[i]['altSpellings'],
          callingCodes:this.countries[i]['callingCodes']
        });
      }
      //this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);   
      this.dataSource.data=ELEMENT_DATA;  
    });
  }

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim();
    
  }

  
  openDialog(name1): void {
   /* const dialogRef = this.dialog.open(Table2Component);
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate( [{ path: 'country/'+name1, component: Table2Component }] );
    });*/
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '780px',
      data: {name: name1}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
export interface DialogData {
   name: string;
}
@Component({
  selector: 'table2',
  templateUrl: 'table2.component.html'
})
export class DialogOverviewExampleDialog implements OnInit {
  private country:  Array<object> = [];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,    
    private apiService:AppService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    
    this.getCountry(this.data.name);
  }
  
  getCountry(name): void {
    //const name = this.route.snapshot.paramMap.get('name');
    this.apiService.getCountryByName(name).subscribe((data: Array<object>) => {
      console.log(data[0])
      this.country = data;
    });
  }
  //--------------------------------------------- 
  // O B J E C T  - M E T H O D S - C O U N T R Y 
  //---------------------------------------------
  // List of Values
  //++++++ String ++++++ \\     //++++++ Value ++++++ \\      //++++++ ArrayObject ++++++ \\        //++++++ StringifyArrayObject ++++++ \\       //++++++ SimplyStringifyArrayObject ++++++ \\
  // - name                     // - population               // - topLevelDomain                   // - currencies                               // - translations
  // - region                   // - area                     // - callingCodes                     // - languages
  // - subregion                // - gini                     // - altSpellings                     // - regionalBlocks
  // - alpha2Code                                             // - latlng 
  // - alpha3Code                                             // - timezones
  // - capital                                                // - borders
  // - demonym
  // - nativeName
  // - numericCode
  // - flag
  // - cioc
  

  getSingleValue(value) {
    return this.country[0][value]
  }
  
  getSingleStringValue(value): string {
    return this.country[0][value]
  }

  getArrayObjectValue(value): Array<Object> {
    let arrayObject = []
    for (let i = 0; i < this.country[0][value].length; i++) {
      arrayObject.push(this.country[0][value][i])
    }
    return arrayObject
  }

  getStringifyArrayObjectValue(value): Array<Object> {
    return JSON.stringify(this.country[0][value]).replace('[{', '').replace('}]', '').split(',')
  }

  getStringifyObjectValue(value): Array<Object> {
    return JSON.stringify(this.country[0][value]).replace('{', '').replace('}', '').split(',')
  }

}
