// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]
function superbowlWin(wins) {
  let result = null;
  for (const record of wins) {
    if (record.result === "W") {
      return(record.year)
    }
  }
}
