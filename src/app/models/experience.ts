export class Experience {
  companyName: string | undefined;
  positions: Position[] | undefined;

  constructor (companyName: string, positions: Position[]) {
    this.companyName = companyName;
    this.positions = positions;
  }
}

export class Position {
  title: string | undefined;
  date: string | undefined;
  description: string | undefined;

  constructor (title: string, date: string, description: string) {
    this.title = title;
    this.date = date;
    this.description = description;
  }
}
