class Clock{

  constructor(){
    this.alarms=[]
  }

  getAlarm(){
    return this.alarms
  }

  setAlarm(time){
    const obj = {
      time: time,
      snoozeReamining: 3,
    }
    this.alarms.push(obj)
  }
  
}