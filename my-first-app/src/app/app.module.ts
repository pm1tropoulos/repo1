import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path:'',component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'users/:id/:name', component: UserComponent},
  {path:'servers', component: ServersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    HomeComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
