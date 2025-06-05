import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'theme_switcher';
  theme: string = 'light';
  themes: any = [
    { color: 'light', text: 'Light' },
    { color: 'light-contrast', text: 'Light Contrast' },
    { color: 'dark', text: 'Dark' },
    { color: 'dark-contrast', text: 'Dark Contrast' },
  ]

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  switch() {
    const body = document.body;
    body.className = this.theme;
    // if(this.theme == 'light') {
    //   body.classList.remove('dark');
    //   body.classList.add('light');
    // } else if(this.theme == 'dark') {
    //   body.classList.remove('light');
    //   body.classList.add('dark');
    // }
    this.cdr.detectChanges();
  }
}
