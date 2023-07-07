import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { CategoryComponent } from "./category/category.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, MatIconModule, ToolbarComponent, CategoryComponent]
})
export class AppComponent {
  title = 'projecto';
}
