import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataSharing';

  Animals = ["Dogs"," Cats"];
  currentFruits = "Mango";
  currentData = ["Beetel","Grasshopper"];


  addAnimals(newAnimals: string){
    this.Animals.push(newAnimals);
  }

  addData(newData: string){
    this.currentData.push(newData);
   }


}
