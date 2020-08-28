export interface BackgroundModel {

  filename: string;
  thumbnailFilename: string;
  filetype: BackgroundType;

}

export enum BackgroundType {
  IMAGE,
  VIDEO
}
