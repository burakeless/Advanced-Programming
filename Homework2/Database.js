class Student {
    constructor(number, name, gpa) {
        this.number = number
        this.name = name
        this.gpa = gpa
        this.courses = []
    }
    toString(){
        return this.name + "  " + this.number + "  " + this.gpa + "  " + this.courses.length + " courses"
    }
}

class Course{
    constructor(code, time, date){
        this.code = code
        this.time = time
        this.date = date
        this.rooms= []
    }
    toString(){
        return this.code + "  " + this.time + "  " + this.date + "  " + this.rooms
    }
}

class Database {
    constructor() {
        this.studentDB = new Map()
        this.courseDB = new Map()
        this.readStudent()
        this.readCourse()
    }

    addStudent(text) {
        let txtPart = text.split('\n')
        for (let line of txtPart) {
            let x = this.parseStudent(line)
            this.studentDB.set(x.number, x)
        }
    }

    addCourse(text) {
        let txtPart = text.split('\n')
        for (let line of txtPart) {
            let x = this.parseCourse(line)
            this.courseDB.set(x.code, x)
        }
    }

    parseStudent(line) {
        let l = line.split("\t")
        let student = new Student(l[0], l[1], l[2])
        let i
        for (i = 3; i < l.length; i++) {
            student.courses.push(l[i])
        }
        return student
    }

    parseCourse(line) {
        let l = line.split("\t");
        let course = new Course(l[0], l[1], l[2])
        let i;
        for (i = 3; i < l.length; i++) {
            course.rooms.push(l[i])
        }
        return course;
    }

    readStudent() {
        fetch("https://maeyler.github.io/JS/data/Students.txt")
            .then(res => res.text())
            .then(res => [this.addStudent(res)])
    }

    readCourse() {
        fetch("https://maeyler.github.io/JS/data/Courses.txt")
            .then(res => res.text())
            .then(res => [this.addCourse(res)])
    }

    randomStudent() {
        let keys = new Array()
        for (var [key, value] of this.studentDB) {
            keys.push(key)
        }
        let randomId = parseInt(Math.random() * keys.length)
        let random = keys[randomId]

        console.log(this.studentDB.get(random))
        return this.studentDB.get(random)
    }

    findMaxGpa() {
        let m = this.studentDB
        var maxGpa;
        let max = 0.0;
        for (var [key, value] of m) {
            let gpa = parseFloat(value.gpa)
            if (max < gpa) {
                maxGpa = value
                max = gpa
            }
        }
        return maxGpa
    }

    findMinGpa() {
        let m = this.studentDB
        var minGpa;
        let min = 4.00
        for (var [key, value] of m) {
            let gpa = parseFloat(value.gpa)
            if (min > gpa) {
                minGpa = value
                min = gpa
            }
        }
        return minGpa
    }

    findingCourse(course) {
        let msg = '';
        for(var[key, value] of this.studentDB){

            let a = this.studentDB.get(key)
            for(let ders of a.courses){
                if(course == ders){
                    msg += a.name+"\n"
                }
            }
        }
        return msg;
    }

    findingRooms(room) {
        let msg = '';
        for(var[key, value] of this.courseDB){

            let a = this.courseDB.get(key)
            for(let derslik of a.rooms){
                if(room == derslik){
                    msg += a.code+"\n"
                }
            }
        }
        return msg;
    }

    findGivenGpaCount(gpa){
        let counter = 0
        let m1 = this.studentDB
        let gpa1 = parseFloat(gpa)
        for (var[key, value] of m1){
            let valueOther = parseFloat(value.gpa)
            if (valueOther > gpa1)
                counter++
        }
        out.innerHTML = counter
    }

}