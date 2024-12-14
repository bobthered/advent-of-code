type Options = {
  height: number;
  seconds: number;
  width: number;
};
type Robot = {
  fx: number;
  fy: number;
  px: number;
  py: number;
  quadrant: string;
  vx: number;
  vy: number;
};

const getQuandrant = (fx: number, fy: number, options: Options) => {
  let quadrantX: string = "";
  let quadrantY: string = "";
  if (fx < Math.floor(options.width / 2)) quadrantX = "0";
  if (fx > Math.floor(options.width / 2)) quadrantX = "1";
  if (fy < Math.floor(options.height / 2)) quadrantY = "0";
  if (fy > Math.floor(options.height / 2)) quadrantY = "1";
  const quadrant = `${quadrantX}|${quadrantY}`;
  return quadrant;
};

const initRobots = (input: string, options: Options) => {
  const robots: Robot[] = input
    .split("\r\n")
    .map((string) => {
      const [_, px, py, vx, vy] = (
        string.match(/p=(\d+),(\d+)\sv=(-?\d+),(-?\d+)/) || []
      ).map(Number);

      let fx = (px + vx * options.seconds) % options.width;
      let fy = (py + vy * options.seconds) % options.height;

      if (fx < 0) fx += options.width;
      if (fy < 0) fy += options.height;

      const quadrant = getQuandrant(fx, fy, options);

      return {
        fx,
        fy,
        px,
        py,
        quadrant,
        vx,
        vy,
      };
    })
    .filter((robot) => {
      return ["0|0", "0|1", "1|0", "1|1"].includes(robot.quadrant);
    });
  return robots;
};

export const partOne = (input = "", userOptions: Partial<Options> = {}) => {
  const defaultOptions: Options = {
    height: 103,
    seconds: 100,
    width: 101,
  };
  const options: Options = Object.assign(defaultOptions, userOptions);
  const robots = initRobots(input, options);
  const quadrants = robots.reduce(
    (map, robot) => {
      if (robot.quadrant !== "|")
        map.set(robot.quadrant, (map.get(robot.quadrant) || 0) + 1);
      return map;
    },
    new Map([
      ["0|0", 0],
      ["1|0", 0],
      ["0|1", 0],
      ["1|1", 0],
    ])
  );
  const safetyFactor = [...quadrants].reduce(
    (total, [_, amount]) => total * amount,
    1
  );
  return safetyFactor;
};

export const partTwo = (input = "") => {
  return 0;
};