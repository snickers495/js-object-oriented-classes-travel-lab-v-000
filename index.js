
 class Driver {
   constructor(name, startDate){
     this.name = name;
     this.startDate = startDate;
   }
   yearsExperienceFromBeginningOf(year) {
     return year - this.startDate;
   };
 }
