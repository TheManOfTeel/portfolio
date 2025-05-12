export class Skill {
  type: string | undefined;
  skills: string[] | undefined;

  constructor (type: string, skills: string[]) {
    this.type = type;
    this.skills = skills;
  }
}
