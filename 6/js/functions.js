const timeToMinutes = (time) => {
  const splitTime = time.split(':');
  return Number(splitTime[0] * 60) + Number(splitTime[1]);
}

const checkMeetingInWorkHours = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartInMinutes = timeToMinutes(workStart);
  const workEndInMinutes = timeToMinutes(workEnd);
  const meetingStartInMinutes = timeToMinutes(meetingStart);
  return meetingStartInMinutes >= workStartInMinutes && (meetingStartInMinutes + meetingDuration <= workEndInMinutes);
}

console.log(checkMeetingInWorkHours('08:00', '17:30', '14:00', 90)); // true
console.log(checkMeetingInWorkHours('8:0', '10:0', '8:0', 120));     // true
console.log(checkMeetingInWorkHours('08:00', '14:30', '14:00', 90)); // false
console.log(checkMeetingInWorkHours('14:00', '17:30', '08:0', 90));  // false
console.log(checkMeetingInWorkHours('8:00', '17:30', '08:00', 900)); // false