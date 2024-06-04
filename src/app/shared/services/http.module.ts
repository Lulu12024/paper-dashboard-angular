
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


// services
import { HttpService } from "./http_services";
import {UtilsService} from "./utils.services";


@NgModule({
  declarations: [
    ],
  imports: [
    // CommonModule,
    // RouterModule,
    // FormsModule,
    // TranslateModule,
    // DragulaModule.forRoot(),
    // NgbModule,
    // GalleryModule
  ],
  exports: [
    
  ],
  providers: [
    HttpService,
    UtilsService
  ]
})
export class HttpModule { }

