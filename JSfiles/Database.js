class Course{
  constructor(nm, tm, dt, rms){
	  this.name = nm
	  this.time = tm
	  this.date = dt
	  this.rooms= rms
  }
  toString(){
	  return "Name : " + this.name + " Time : " + this.time + " Date : " + this.date + " Rooms : " + this.rooms
  }
}

class Student{
	constructor(i, nm, g, crss){
		this.id = i
		this.name = nm
		this.gpa = g
		this.courses = crss
	}
  toString(){
	  return "Id : " + this.id + " Name : " + this.name + " Gpa : " + this.gpa + " Courses : " + this.courses
  }
}

class Point{
	constructor(xx,yy){
		this.x = xx
		this.y = yy
	}
  toString(){
	  return "X: " + this.x + " Y: " + this.y
  }
}

class Point3D extends Point {
	constructor(xx,yy,zz){
		super(xx,yy)
		this.z = zz
	}
	toString(){
	  return "X: " + this.x + " Y: " + this.y + " Z: " + this.z
  }
}

class Distance {
  constructor(km=0){
      this.km=Math.round(km)
  }
  get miles() {
    return Math.round(this.km * 0.62)
  }
  set miles(value) {
 this.km=Math.round(value / 0.62)
  }
  toString() {
    return this.km + " km"
  }
  static fromMiles(value){
    let d = new Distance()
    d.miles = value
    return d
  }
}

class CW4 extends Menu {
	constructor() {
		super();
		this.course1 = new Course("Adv. Prog." , "09:00-12:50" , "24.09.2018" , "B121");
		this.stundent = new Student ("1221221005" , "Burak" , "2.0" , "5");
		this.point=new Point("3" , "4");
		this.point3d=new Point3D("5" , "12" , "13");
		this.distance=new Distance("6000","");
	}
}
