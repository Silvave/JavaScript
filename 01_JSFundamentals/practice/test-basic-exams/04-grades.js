
function solution([studentsCount, ...arrGrades]) {
    let topStudents = 0;
    let veryGoodStudents = 0;
    let averageStudents = 0;
    let poorStudents = 0;
    let sumAllGrades = 0;

    for (let i = 0; i < studentsCount; i++)
    {
        let studentGrade = Number(arrGrades[i]);

        if (studentGrade >= 5)
        {
            topStudents++;
        }
        else if (studentGrade >= 4)
        {
            veryGoodStudents++;
        }
        else if (studentGrade >= 3)
        {
            averageStudents++;
        }
        else
        {
            poorStudents++;
        }

        sumAllGrades += studentGrade;
    }

    console.log(`Top students: ${((topStudents / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((veryGoodStudents / studentsCount)*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((averageStudents / studentsCount)*100).toFixed(2)}%`);
    console.log(`Fail: ${((poorStudents / studentsCount)*100).toFixed(2)}%`);
    console.log(`Average: ${(sumAllGrades / studentsCount).toFixed(2)}`);
}

solution([
    10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
]);

solution([
    6,
    2,
    3,
    4,
    5,
    6,
    2.2
]);