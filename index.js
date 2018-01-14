
 class Driver {
   constructor(name, startDate){
     this.name = name;
     this.startDate = Date.parse(startDate);
   }
   yearsExperienceFromBeginningOf(year) {
     return year - this.startDate;
   };
 }
