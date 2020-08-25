import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'listaproyectos', loadChildren: './pages/listaproyectos/listaproyectos.module#ListaproyectosPageModule' },
  { path: 'ejecucionproyectos', loadChildren: './pages/ejecucionproyectos/ejecucionproyectos.module#EjecucionproyectosPageModule' },
  { path: 'listaprogramas', loadChildren: './pages/listaprogramas/listaprogramas.module#ListaprogramasPageModule' },
  { path: 'ejecucionprogramas', loadChildren: './pages/ejecucionprogramas/ejecucionprogramas.module#EjecucionprogramasPageModule' },
  { path: 'listaextension', loadChildren: './pages/listaextension/listaextension.module#ListaextensionPageModule' },
  { path: 'ejecucionextension', loadChildren: './pages/ejecucionextension/ejecucionextension.module#EjecucionextensionPageModule' },
  { path: 'actividades', loadChildren: './pages/actividades/actividades.module#ActividadesPageModule' },
  { path: 'financiamiento', loadChildren: './pages/financiamiento/financiamiento.module#FinanciamientoPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'main', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'iniciativas', loadChildren: './pages/iniciativas/iniciativas.module#IniciativasPageModule' },
  { path: 'listainiciativas', loadChildren: './pages/listainiciativas/listainiciativas.module#ListainiciativasPageModule' },
  { path: 'listapoa', loadChildren: './pages/listapoa/listapoa.module#ListapoaPageModule' },
  { path: 'ejecucionpoa', loadChildren: './pages/ejecucionpoa/ejecucionpoa.module#EjecucionpoaPageModule' },
  { path: 'estado', loadChildren: './pages/estado/estado.module#EstadoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
