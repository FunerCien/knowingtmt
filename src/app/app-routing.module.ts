import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './pages/serfs/serfs.module#SerfsModule' },
      { path: 'profiles', loadChildren: './pages/profiles/profiles.module#ProfilesModule' }
    ], { preloadingStrategy: PreloadAllModules })
  ]
})
export class AppRoutingModule { }
