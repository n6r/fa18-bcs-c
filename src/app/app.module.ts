import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomePage } from './pages/home/home.page';
import { TabsPage } from './tabs/tabs.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatRippleModule,
  MatDividerModule,
  MatExpansionModule,
  MatSelectModule,
  MatTableModule,
  MatOptionModule,
  MatFormFieldModule
} from '@angular/material';
import { DataService } from './services/data.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReversePipe } from './pipes/reverse';
import { SubjectDetailsComponent } from './pages/subject-details/subject-details.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { LectureModelComponent } from './pages/lecture-model/lecture-model.component';
import { AboutComponent } from './pages/about/about.component';
import { LibraryComponent } from './pages/library/library.component';
import { ParseTimetablePipe } from './pipes/parseTimetable';
import { LoadRefsPipe } from './pipes/loadRefs';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HomePage,
    TabsPage,
    ReversePipe,
    ParseTimetablePipe,
    SubjectDetailsComponent,
    TimetableComponent,
    LoaderComponent,
    LectureModelComponent,
    AboutComponent,
    LibraryComponent,
    LoadRefsPipe
  ],
  entryComponents: [
    LectureModelComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatExpansionModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
