import { Type } from "@angular/core";

export const extensions = ['html', 'scss', 'ts'];

export type ExampleConfig = [Type<any>, string, string];
export type ExampleData = [Type<any>, ...string[]][];