/**
 * Details of an exception
 */
export class Exception {
  /**
   * Creates a new excecption
   * @param cause - Optional. The descriptive cause of the exception
   * @param column - Optional. The column number on which the exception occurred
   * @param line  - Optional. The line number on which the exception occurred
   * @param message - The descriptive message of the exception
   * @param stacktrace - An array of stack trace lines
   * @param url - The url in which the exception occurred
   */
  public constructor(
    public cause: string | null,
    column: number | null,
    line: number | null,
    message: string,
    stacktrace: any[],
    url: string,
  ) {}
}
