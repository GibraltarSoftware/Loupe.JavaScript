/**
 * Extends the client platform details
 * Included directly to avoid versioning issues
 */
export interface ILocalPlatform {
  /* Custom properties */

  /**
   * The screen size, overwritten for each log message, obtained from the browser document object.
   */
  size: {
    width: number;
    height: number;
  };

  /* Platform properties */

  /**
   * The platform description.
   */
  description?: string;
  /**
   * The name of the browser's layout engine.
   *
   * The list of common layout engines include:
   * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
   */
  layout?: string;
  /**
   * The name of the product's manufacturer.
   *
   * The list of manufacturers include:
   * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
   * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
   * "Nokia", "Samsung" and "Sony"
   */
  manufacturer?: string;
  /**
   * The name of the browser/environment.
   *
   * The list of common browser names include:
   * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
   * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
   * "Opera Mini" and "Opera"
   *
   * Mobile versions of some browsers have "Mobile" appended to their name:
   * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
   */
  name?: string;
  /**
   * The alpha/beta release indicator.
   */
  prerelease?: string;
  /**
   * The name of the product hosting the browser.
   *
   * The list of common products include:
   *
   * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
   * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
   */
  product?: string;
  /**
   * The browser's user agent string.
   */
  ua?: string;
  /**
   * The version of the OS.
   */
  version?: string;
  /**
   * The name of the operating system.
   */
  os?: OperatingSystem;
  /**
   * Creates a new platform object.
   * @param [ua=navigator.userAgent] The user agent string or
   *  context object.
   */
  parse(ua?: object | string): ILocalPlatform;
  /**
   * Returns `platform.description` when the platform object is coerced to a string.
   */
  toString(): string;
}

// tslint:disable-next-line: interface-name
export interface OperatingSystem {
  /**
   * The CPU architecture the OS is built for.
   */
  architecture?: number;
  /**
   * The family of the OS.
   *
   * Common values include:
   * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
   * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
   * "SuSE", "Android", "iOS" and "Windows Phone"
   */
  family?: string;
  /**
   * The version of the OS.
   */
  version?: string;
  /**
   * Returns the OS string.
   */
  toString(): string;
}
