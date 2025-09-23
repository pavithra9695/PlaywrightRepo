function calculateGrade (studentscore)

{ 
switch (true)
    {
    case (studentscore >= 90) :
     grade = 'A'
     console.log("grade is A") 
    break;
    case (studentscore >= 80) : 
    grade ='B'
    console.log("grade is b") 
    break;
    case (studentscore >=70) :
    grade ='c';
    console.log("grade is c")
    break;
    case (studentscore >=60 ):
    grade = 'D'   ;
    console.log("grade is d")
    break;
    default :
    grade = 'f'
    console.log("grade is f")
    break;
}
}

calculateGrade (60)
   


