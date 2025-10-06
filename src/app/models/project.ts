export class Project {
  title: string | undefined;
  timeline: string | undefined;
  description: string | undefined;
  subtext: string | undefined;
  image: string | undefined;
  imageStyle: object | undefined;
  repository: string | undefined;

  constructor (title: string,
    timeline: string,
    description: string,
    subtext?: string,
    image?: string,
    imageStyle?: object,
    repository?: string) {
    this.title = title;
    this.timeline = timeline;
    this.description = description;
    this.subtext = subtext;
    this.image = image;
    this.imageStyle = imageStyle;
    this.repository = repository;
  }
}
