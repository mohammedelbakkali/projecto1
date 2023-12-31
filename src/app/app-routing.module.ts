import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RegisterComponent } from './register/register.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ShowpageComponent } from './showpage/showpage.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';

import { PageRecentOfdashComponent } from './dashboard/page-recent-ofdash/page-recent-ofdash.component';
import { InstanceOfprojectComponent } from './dashboard/instance-ofproject/instance-ofproject.component';
import { SideBar2Component } from './shared/side-bar2/side-bar2.component';
import { ChartsOfprojectsComponent } from './dashboard/contentOfProject/charts-ofprojects/charts-ofprojects.component';
import { InformationGeneralComponent } from './dashboard/contentOfProject/information-general/information-general.component';
import { ActivitesComponent } from './dashboard/gestions/activites/activites.component';
import { RHComponent } from './dashboard/gestions/activites/rh/rh.component';
import { TasksComponent } from './dashboard/gestions/activites/tasks/tasks.component';
import { FinanciereComponent } from './dashboard/gestions/activites/financiere/financiere.component';
import { RisquesComponent } from './dashboard/gestions/activites/risques/risques.component';
import { ActiviteComponent } from './dashboard/gestions/activites/activite/activite.component';

import { ForumComponent } from './forum/forum.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ListTaskComponent } from './dashboard/gestions/activites/tasks/list-task/list-task.component';
import { DetailsTaskComponent } from './dashboard/gestions/activites/tasks/details-task/details-task.component';
import { TabsViewComponent } from './tabs-view/tabs-view.component';
import { KanbanComponent } from './charts/kanban/kanban.component';

import { GanttComponent } from './gantt/gantt.component';
import { TreeComponent } from './tree/tree.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmationResetPasswordComponent } from './confirmation-reset-password/confirmation-reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

         
import { ObjectifResultComponent } from './area-objectifs/objectif-result/objectif-result.component';
import { AreaObjectifsComponent } from './area-objectifs/area-objectifs.component';
import { NavComponent } from './shared/nav/nav.component';
import { DhComponent } from './dashboard/dh/dh.component';
import { DragDropComponent } from './charts/drag-drop/drag-drop.component';




const routes: Routes = [
     {
        path:"",
        component:LayoutComponent,
        children:[
           {
             path:"",
             component:LandingPageComponent,
             data: { breadcrumb: 'Home' }
           }, {
            path:"show",
            component:ShowpageComponent
          }
        ]
               
     },
     {
        path:"project",
        loadChildren : ()=>import("./project/project.module").then((mod)=>mod.ProjectModule)
      },
      {
        
        path:"dash",
        
        component:DashboardComponent,
        data: { breadcrumb: 'Dashboard' } ,
        children:[
          {
            path:"",
            component:DhComponent,
           
          },
          {
          path:"charts",
          component:ChartsOfprojectsComponent
        },{
          path:"projects",
          component:ProjectsComponent,
          data: { breadcrumb: 'projects' } ,
          
        },
        {
          path:"projects/:id",
          component:InstanceOfprojectComponent,
          data: { breadcrumb: 'projects' },
          children:[{
           path:"",
           component:InformationGeneralComponent,
           data: { breadcrumb: 'Informations Générale' },
           
        },{
           path:"gestion-activite",
           component:ActivitesComponent,
           data: { breadcrumb: 'Gestion Activite' },
           children:[
            {
              path:"",
              component:ActiviteComponent
  
            },
            {
              path:"rh",
              component:RHComponent,
              data: { breadcrumb: 'Gestion RH' },
           },{
             path:"tasks",
             component:TasksComponent,
             data: { breadcrumb: 'Gestion Task' },
             children:[
               {
                 path:"list-tasks",
                 component:ListTaskComponent,
              
               }, {
                
                path:":id",
                component:DetailsTaskComponent
            }
             ]
           },{
             path:"financiere",
             component:FinanciereComponent
           },{
             path:"risques",
             component:RisquesComponent
           }
           ]
        }
      
      ]
  
       },
        
       
      ]
      },
      //Login and Register Pages
      {
        path:"log",
        component:LoginRegisterComponent
      },
      { path:"reg",
         component:RegisterComponent
      },
     
      {
        path:'category/:cat',
        component:CategoryPageComponent
      },{

        path:"side",
        component:SideBar2Component

      
      },{

        path:'drag',
        component:DragDropComponent

      },
      {
       path:'cal',
        component:CalendarComponent
      },{
        path: 'areaObjectif',
        component:AreaObjectifsComponent
      },

      {
      path:'gant',
      component:GanttComponent
      },
{
       path:'tree',
        component:TreeComponent      
      },
      {
        path:'password-reset',
         component:ForgotPasswordComponent
       },

       {
        path:'confirmation-code',
         component:ConfirmationResetPasswordComponent
       },

       {
        path:'change-password',
         component:ChangePasswordComponent
       },

     {
       path:"tabs",
       component:KanbanComponent
     },

     {
      path:"nav",
      component:NavComponent
    },
   

      {
        path:"**",
        component:PageNotFoundComponent
      }
    
     
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
