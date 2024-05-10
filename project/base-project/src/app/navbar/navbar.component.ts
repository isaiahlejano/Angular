import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: '<h1> Test </h1>',
    styleUrl: ''
})

class NavbarComponent {
    title = 'test';
}
