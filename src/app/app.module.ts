import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';

//Para que funcione o LOCALE_ID funcione corretamente, tem que realizar a importação do registerLocaleData e do ptBR
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-br'
    // },
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory:(settingsService:any) => settingsService.getLocale()
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
