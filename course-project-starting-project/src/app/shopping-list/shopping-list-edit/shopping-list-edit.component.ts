import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component ({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrl: './shopping-list-edit.component.css'
})

export class ShoppingListEditComponent {
    
    @ViewChild('nameInput', {static: false}) itemName: ElementRef; 
    @ViewChild('amountInput', {static: false}) itemAmount: ElementRef;
    @Output() itemAdded = new EventEmitter<Ingredient>();

    onItemAdded() {
        this.itemAdded.emit(new Ingredient(this.itemName.nativeElement.value, this.itemAmount.nativeElement.value));
    }
}