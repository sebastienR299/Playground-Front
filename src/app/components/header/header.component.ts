import {Component, ElementRef, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    public isOpen = true;

    public value = ""

    public toggleSidebar() {
        if(this.isOpen) {
            this.isOpen = !this.isOpen;
            this.document.body.style.setProperty('--sidebar-width', '0');
        } else {
            this.isOpen = !this.isOpen;
            this.document.body.style.setProperty('--sidebar-width', '12rem');
        }
    }


}
