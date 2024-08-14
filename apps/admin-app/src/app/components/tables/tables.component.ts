import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { TableTechnologiesComponent } from './components/table-technologies/table-technologies.component';
import {
  TableRequestsContainerComponent
} from '../../containers/table-requests-container/table-requests-container.component';
import { TableTeamsContainerComponent } from '../../containers/table-teams-container/table-teams-container.component';
import {
  TableTechnologiesContainerComponent
} from '../../containers/table-technologies-container/table-technologies-container.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UpdateFormComponent } from '../update-form/update-form.component';


@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    TableTeamsComponent,
    TableTechnologiesComponent,
    TableRequestsContainerComponent,
    TableTeamsContainerComponent,
    TableTechnologiesContainerComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    UpdateFormComponent
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent {
  currentTab = 'requests';

  showTab(tabName: string) {
    this.currentTab = tabName;
  }
}
