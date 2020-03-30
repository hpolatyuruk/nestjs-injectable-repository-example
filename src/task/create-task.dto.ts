export class CreateTaskDTO {
  constructor(
    public readonly _id: string,
    public readonly title: string,
    public readonly done: boolean,
  ) {}
}
