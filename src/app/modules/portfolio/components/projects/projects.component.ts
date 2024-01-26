import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
public projectsArray = signal<IProjects[]>([
  {
    src: 'assets/img/projects/vfull.png',
    alt: '',
    title: "Project 1",
    width: "100px",
    height: "51px",
    description: "",
    links: [
      {
        name: 'Conheça o projeto',
        href: '#',
      }
    ]
  },
  {
    src: 'assets/img/projects/vfull.png',
    alt: '',
    title: "Project 1",
    width: "100px",
    height: "51px",
    description: "",
    links: [
      {
        name: 'Conheça o projeto',
        href: '#',
      }
    ]
  },
  {
    src: 'assets/img/projects/vfull.png',
    alt: '',
    title: "Project 1",
    width: "100px",
    height: "51px",
    description: "",
    links: [
      {
        name: 'Conheça o projeto',
        href: '#',
      }
    ]
  },
  {
    src: 'assets/img/projects/vfull.png',
    alt: '',
    title: "Project 1",
    width: "100px",
    height: "51px",
    description: "",
    links: [
      {
        name: 'Conheça o projeto',
        href: '#',
      }
    ]
  },
  {
    src: 'assets/img/projects/vfull.png',
    alt: '',
    title: "Project 1",
    width: "100px",
    height: "51px",
    description: "",
    links: [
      {
        name: 'Conheça o projeto',
        href: '#',
      }
    ]
  },

])
}
