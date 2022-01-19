function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }
    let students = [];
    for (i = 0; i < numbersOfStudents; i++) {
        studentSeat = studentSeat + 1;
        students.push(studentSeat);
    }

    return students;
}

let classRoom = createClassRoom(10);