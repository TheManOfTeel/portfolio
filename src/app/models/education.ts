export class Education {
  institution: string | undefined;
  certification: string | undefined;
  location: string | undefined;

  constructor (institution: string, certification: string, location: string) {
    this.institution = institution;
    this.certification = certification;
    this.location = location;
  }
}
