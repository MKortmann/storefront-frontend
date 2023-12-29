import { Component } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { AvatarModule } from 'primeng/avatar'
import { ImageModule } from 'primeng/image'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, ImageModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private location: Location,
  ) {}
  goBack(): void {
    this.location.back()
  }
  goForward(): void {
    this.location.forward()
  }
}
