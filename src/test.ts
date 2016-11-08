export class AppModule { 
  constructor(private isDone: boolean = false){
    if(this.isDone){
      console.log("Called");
    }
    else{ console.log("Other") } 
  }
}
new AppModule();
