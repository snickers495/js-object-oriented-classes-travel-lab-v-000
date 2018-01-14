
 class Driver {
   constructor(name, startDate){
     this.name = name;
     this.startDate = new Date(startDate);
   }
   yearsExperienceFromBeginningOf(year) {
     return year - this.startDate.getFullYear();
   };
 }
 class Route {
   constructor(beginningLocation, endingLocation){
     this.beginningLocation_horizontal = beginningLocation.horizontal;
     this.beginningLocation_horizontal = beginningLocation.horizontal;
     this.endingLocation_horizontal = endingLocation.horizontal;
     this.beginningLocation_horizontal = beginningLocation.horizontal;
   }
   blocksTravelled(){

   }
 }
