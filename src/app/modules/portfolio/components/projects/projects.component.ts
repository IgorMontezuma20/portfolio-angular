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
    {
      src: 'assets/img/projects/paises.png',
      alt: 'Projeto Lista Países Next.JS',
      title: 'Lista Países Next.JS',
      width: '100px',
      height: '100px',
      description:
        '<p>Projeto desenvolvido com o Next 13 com o objetivo de listar os paíeses e apresentar seus respectivos detalhes. Para obter os dados dos paíes foi utilizada a api Rest Countries.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://lista-de-paises-nextjs.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/pokedex.png',
      alt: 'Projeto Pokedex',
      title: 'Pokedex',
      width: '100px',
      height: '100px',
      description:
        '<p>Projeto de uma Pokedex desenvolvido com Angular. O projeto dá ao usuário a opçãod e pesquisar seu pokémon favorito e apresenta as características do mesmo.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://pokedex-angular-murex.vercel.app/',
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
