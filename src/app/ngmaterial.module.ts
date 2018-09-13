import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatSidenavModule],
  exports: [MatButtonModule, MatMenuModule, MatSidenavModule]
})
export class MaterialAppModule { }

