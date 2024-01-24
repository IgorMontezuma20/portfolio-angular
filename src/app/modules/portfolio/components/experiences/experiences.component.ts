import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public experiencesArray = signal<IExperiences[]>([
    {
      summary: {
        title: "Desenvolvedor Android Nativo",
        description: "Foursys Tecnologia e Sistemas | Abr 2022 - Maio 2023",
      },
      activities: "<p>Atuei como desenvolvedor Android nativo, tive a oportunidade de atuar em grandes projetos de consultoria de empresas como: Bravve e Banco Next.</p>"
    },
    {
      summary: {
        title: "Analista de Suporte Computacional",
        description: "Infotec Tecnologia da Informação | Set 2023 - Atual",
      },
      activities: "<p>Atuo como suporte técnico para soluções tecnológicas. Tenho como atividade: gerar e conferir arquivos fiscais de clientes, auxiliar na solução de problemas no sistema e auxiliar na utilização do mesmo.</p>"
    },
  ])
}
