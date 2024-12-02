export const partOne = (input = "") => {
  const reports = input.split("\n").map((line) => {
    const report = line.split(/\s+/g).map((string) => +string);
    return report;
  });

  let safeReports = [];

  for (let reportIndex = 0; reportIndex < reports.length; reportIndex++) {
    const report = reports[reportIndex];
    const direction = report[1] - report[0] < 0 ? "decreasing" : "increasing";
    let safe = true;

    for (let levelIndex = 0; levelIndex < report.length - 1; levelIndex++) {
      const number1 = report[levelIndex];
      const number2 = report[levelIndex + 1];
      const difference = number2 - number1;

      if (difference < 0 && direction === "increasing") {
        safe = false;
        break;
      }
      if (difference > 0 && direction === "decreasing") {
        safe = false;
        break;
      }
      if (Math.abs(difference) < 1) {
        safe = false;
        break;
      }
      if (Math.abs(difference) > 3) {
        safe = false;
        break;
      }
    }

    if (safe === true) safeReports.push(report);
  }

  return safeReports.length;
};

export const partTwo = (input = "") => {};
