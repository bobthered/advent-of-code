class Edge {
  horizontal: boolean;
  point1: Point;
  point2: Point;

  constructor(point1: Point, point2: Point) {
    this.horizontal = point1.y === point2.y;
    this.point1 = this.horizontal
      ? point1.x < point2.x
        ? point1
        : point2
      : point1.y < point2.y
      ? point1
      : point2;
    this.point2 = this.horizontal
      ? point1.x < point2.x
        ? point2
        : point1
      : point1.y < point2.y
      ? point2
      : point1;
  }

  isIntersecting(otherEdge: Edge) {
    if (this.horizontal === otherEdge.horizontal) return false;

    const horizontal = this.horizontal ? this : otherEdge;
    const vertical = this.horizontal ? otherEdge : this;

    return (
      vertical.point1.x > horizontal.point1.x &&
      vertical.point1.x < horizontal.point2.x &&
      horizontal.point1.y > vertical.point1.y &&
      horizontal.point1.y < vertical.point2.y
    );
  }
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  area(otherPoint: Point) {
    return (
      (Math.abs(this.x - otherPoint.x) + 1) *
      (Math.abs(this.y - otherPoint.y) + 1)
    );
  }
}

class Polygon {
  edges: Edge[];
  points: Point[];

  constructor(points: Point[]) {
    this.edges = [];
    this.points = points;
    points.forEach((point1, pointIndex) => {
      const point2 = points[(pointIndex + 1) % points.length];
      this.edges.push(new Edge(point1, point2));
    });
  }

  isIntersecting(edge: Edge) {
    return this.edges.some((e) => e.isIntersecting(edge));
  }
}

export const partTwo = (input = "") => {
  const points: Point[] = input.split("\n").map((line) => {
    const [x, y] = line.split(",").map(Number);
    return new Point(x, y);
  });
  const polygon = new Polygon(points);
  let result = -1;

  for (let point1Index = 0; point1Index < points.length - 1; point1Index++) {
    const point1 = points[point1Index];

    for (
      let point2Index = point1Index + 1;
      point2Index < points.length;
      point2Index++
    ) {
      const point2 = points[point2Index];

      const area = point1.area(point2);

      const x1 = Math.min(point1.x, point2.x) + 0.5;
      const x2 = Math.max(point1.x, point2.x) - 0.5;
      const y1 = Math.min(point1.y, point2.y) + 0.5;
      const y2 = Math.max(point1.y, point2.y) - 0.5;

      const rectangle = new Polygon([
        new Point(x1, y1),
        new Point(x2, y1),
        new Point(x2, y2),
        new Point(x1, y2),
      ]);

      if (!rectangle.edges.some((edge) => polygon.isIntersecting(edge))) {
        result = Math.max(result, area);
      }
    }
  }

  return result;
};
