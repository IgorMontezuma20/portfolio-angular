import { IProjects } from './../../interface/IProjects';
import { Component, inject, signal } from '@angular/core';
import{ MatDialogModule } from '@angular/material/dialog';


import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public projectsArray = signal<IProjects[]>([
    {
      src: 'assets/img/projects/help.png',
      alt: 'Projeto Help Control',
      title: 'Help Control',
      width: '100px',
      height: '100px',
      description:
        '<p>Sistema de Help Desk construído em Next.JS (Versão 14). O sistema conta com as funcionalidades de cadastrar usuários, chamados e cliente, podendo listar e filtrar os mesmos. A aplicação utilizou as funcionalidades adicionadas no Nexat.Js 14.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://help-control.vercel.app/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
