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
        '<p>Sistema de Help Desk construído em Next.JS (Versão 14). O sistema conta com as funcionalidades de cadastrar usuários, chamados e cliente, podendo listar e filtrar os mesmos. A aplicação utilizou as funcionalidades adicionadas no Next.Js 14.</p>',
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
    {
      src: 'assets/img/projects/daily.png',
      alt: 'Projeto Daily Games',
      title: 'Daily Games',
      width: '100px',
      height: '100px',
      description:
        '<p>Aplicação construída com Next.JS com o objetivo de buscar jogos que estão em alta e apresentar as informações dos mesmos. Os usuários podem procurar o jogo de seu endereço e também ver seus detalhes com: ano de lançamento, plataforma e categoria.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://daily-games-deploy.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/paisesangular.png',
      alt: 'Projeto Lista Países Angular',
      title: 'Lista Países Angular',
      width: '100px',
      height: '100px',
      description:
        '<p>Projeto desenvolvido com o Angular com o objetivo de listar os paíeses e apresentar seus respectivos detalhes. Para obter os dados dos paíes foi utilizada a api Rest Countries.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://lista-paises-angular-7grq1wlkr-igormontezuma20.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/todo.png',
      alt: 'Projeto Lista de tarefas Angular',
      title: 'Lista de tarefas Angular',
      width: '100px',
      height: '100px',
      description:
        '<p>Projeto de uma lista de tarefas desenvolvida com Angular 17, que conta com as funcionalidades de: Criar uma tarefa, editar seu nome, alterar seu estado e remover a mesma. Neste projeto pude revisar conceitos como comunicação entre componentes e praticar as novas diretivas implementadas, assim como a responsividade da aplicação.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://todo-angular-amber-kappa.vercel.app/',
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
