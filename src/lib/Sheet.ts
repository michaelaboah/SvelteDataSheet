export default class Sheet {
  public grid: number[];
  public isActive: boolean[][];
  private start: number[];
  private end: number[];
  private hoverEnd: number[];
  private clicked: boolean;

  public col: string;
  public row: string;

  constructor(grid: number[]) {
    this.grid = grid;
    this.col = `repeat(${grid[1]}, 1fr)`;
    this.row = `repeat(${grid[0]}, 1fr)`;
    this.isActive = Array(grid[0])
      .fill(0)
      .map((_) => Array(grid[1]).fill(false));
    this.start = [];
    this.end = [];
    this.hoverEnd = [];
    this.clicked = false;
  }

  public select(i: number, j: number) {
    if (this.clicked) {
      this.end = [i, j];
    } else {
      this.start = [i, j];
    }

    this.clicked = !this.clicked;
    this.checkActive([i, j]);
  }

  public hover(i: number, j: number) {
    if (!this.clicked) return;
    this.hoverEnd = [i, j];
    this.checkActive(this.hoverEnd);
  }

  private isInRange([i, j]: number[], [i2, j2]: number[]) {
    return (
      (i - this.start[0]) * (i - i2) <= 0 && (j - this.start[1]) * (j - j2) <= 0
    );
  }

  private checkActive(end: number[]) {
    this.isActive = this.isActive.map((a, i) =>
      a.map((_, j) => this.isInRange([i, j], end))
    );
  }
}
