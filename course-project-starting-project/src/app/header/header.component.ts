import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {
    collapsed = true;
    @Output() changeView = new EventEmitter<string>();

    selectVis(partSelected: string) {
        this.changeView.emit(partSelected);
        
    }
}