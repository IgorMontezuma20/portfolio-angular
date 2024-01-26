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
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Project 1',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça o projeto',
          href: '#',
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
