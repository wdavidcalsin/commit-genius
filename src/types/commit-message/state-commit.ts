export interface IServiceMessageCommit {
  infinitiveVerbCommit: string;
  objectCommit: string;
  descriptionCommit: string;
}

export interface IStateCommit {
  entryMessageCommit: IServiceMessageCommit;
  outputMessageCommit?: string;
  streaming: boolean;
}
