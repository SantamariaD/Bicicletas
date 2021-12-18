import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
<<<<<<< HEAD
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer } from './state';
import { ViewsModule } from './views/views.module';
import { environment } from 'src/environments/environment';
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
=======
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictActionImmutability: false,
        strictStateImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, 
      autoPause: true, 
    }),
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
<<<<<<< HEAD
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    ViewsModule,
    AppRoutingModule,
    ComponentsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
>>>>>>> 218cf6c4a0065874dc27ffc0435183968135fa3b
