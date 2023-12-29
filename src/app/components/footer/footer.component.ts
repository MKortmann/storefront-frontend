import { Component } from '@angular/core'
import { PanelModule } from 'primeng/panel'
import { ButtonModule } from 'primeng/button'
import { AvatarModule } from 'primeng/avatar'
import { MenuModule } from 'primeng/menu'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PanelModule, AvatarModule, ButtonModule, MenuModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
