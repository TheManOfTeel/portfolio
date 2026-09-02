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
  location: string | undefined;
  date: string | undefined;
  tasks: string[] | undefined;

  constructor (title: string, location: string, date: string, tasks: string[]) {
    this.title = title;
    this.location = location;
    this.date = date;
    this.tasks = tasks;
  }
}
