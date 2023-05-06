// У змінній  min лежить число від 0 до 59.
// Потрібно визначити, в яку чтверть години потрапить це число(в першу, другу, третю або четверту)

const min = prompt ("Enter minutes from 0 to 60");
switch (Math.trunc((min - 1) / 15)){
   case 0 :
      console.log("First quarter");
      break;
   case 1 :
      console.log("Second quarter");
      break;
   case 2 :
      console.log("Third quarter");
      break;
   case 3 :
      console.log("Fourth quarter");
      break;
}
