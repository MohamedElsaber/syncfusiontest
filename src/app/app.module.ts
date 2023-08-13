import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AccordionAllModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { SplitterModule } from '@syncfusion/ej2-angular-layouts';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ ButtonModule, RichTextEditorModule, TreeViewModule, SplitterModule, BrowserModule,CommonModule, TextBoxModule, ListViewAllModule, AccordionAllModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
