export class Project {
  title: string | undefined;
  description: string | undefined;
  subtext: string | undefined;
  image: string | undefined;
  imageStyle: object | undefined;
  repository: string | undefined;

  constructor (title: string, description: string, subtext?: string, image?: string, imageStyle?: object, repository?: string) {
    this.title = title;
    this.description = description;
    this.subtext = subtext;
    this.image = image;
    this.imageStyle = imageStyle;
    this.repository = repository;
  }
}
