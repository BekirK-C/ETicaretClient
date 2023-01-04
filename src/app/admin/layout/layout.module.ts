import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    LayoutComponent  
  ],
  imports: [
    CommonModule,
    ComponentsModule //Oluşturulan module başka bir module'ü kendi içinde barındırıyorsa o module'ü import etmesi gerekir.
  ],
  exports:[
    LayoutComponent //export ederek dışarıdan erişilebilir olduğunu bildiriyorum.
  ]
})
export class LayoutModule { }
