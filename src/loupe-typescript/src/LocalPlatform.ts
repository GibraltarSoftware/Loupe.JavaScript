/**
 * Extends the client platform details
 */
export interface ILocalPlatform extends Platform {
  /**
   * The screen size
   */
  size: {
    width: number;
    height: number;
  };
}
