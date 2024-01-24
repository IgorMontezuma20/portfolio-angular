import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledgeInterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledgeArray = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt :'Ícone do Angular'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt :'Ícone do React'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt :'Ícone do JavaScript'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt :'Ícone do Java'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt :'Ícone do NodeJS'
    },
  ])
}
