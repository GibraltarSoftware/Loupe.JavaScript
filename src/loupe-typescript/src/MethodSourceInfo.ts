/**
 * Details of the file, class, line and column
 */
export class MethodSourceInfo {
  /**
   * Creates a new instance
   * @param file - The name of the file
   * @param method - The name of the method
   * @param line - Optional. The line number
   * @param column - Optional. The column number
   */
  constructor(
    public file: string,
    public method: string,
    public line?: number,
    public column?: number,
  ) {}
}
