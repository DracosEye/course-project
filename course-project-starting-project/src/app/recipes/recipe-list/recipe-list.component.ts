import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component ({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css'
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Chicken Pot Pie', 'Lots of work but tasty', 'https://mojo.generalmills.com/api/public/content/tKec_wnrtk-lTBFsG4Vi5A_gmi_hi_res_jpeg.jpeg?v=79683df6&t=b5673970ed9e41549a020b29d456506d'),
        new Recipe('Spaghetti or something', "It looks fancy?", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SYr0K4IW_FP1unAmCxOAWzK082FIrDHChE0v1qMBROX9DLdEc6Y7q0ZcZALMiO_BVs0&usqp=CAU'),
        new Recipe('Butternut Squash Soup', 'No butter or nuts but squash!', 'https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?s=612x612&w=0&k=20&c=NK_z9zwAsRZZLeFWgcO-b4gsHnYg4kVFdvK6IYDOMXY=')
    ];
    @Output() changeRecipe = new EventEmitter<Recipe>();

    constructor() {

    }

    ngOnInit() {

    }

    selectItem(selRecipe: Recipe) {
        this.changeRecipe.emit(selRecipe);
    }
}