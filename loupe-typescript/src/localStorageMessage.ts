import { LogMessageSeverity } from './LogMessageSeverity';
import { MethodSourceInfo } from './MethodSourceInfo';

/**
 * Details of a message that is stored in browser Local Storage
 */
export class LocalStorageMessage {
  /**
   * Creates a new instance
   * @param severity - The severity of the log message
   * @param category - The category  of the log message
   * @param caption - The caption of the log message
   * @param description - The description of the log message
   * @param parameters - The parameters of the log message
   * @param exception - Any associated exception
   * @param details - Any details block
   * @param methodSourceInfo - The source information
   * @param timestamp - Unique time stamp of the log message
   * @param sequence - Sequence number of the log message
   * @param agentSessionId - Agent session ID
   * @param sessionId - Global session ID
   */
  constructor(
    public severity: LogMessageSeverity,
    public category: string,
    public caption: string,
    public description: string,
    public parameters: any[] | null = null,
    public exception: any | null = null,
    public details: string | null = null,
    public methodSourceInfo: MethodSourceInfo | null = null,
    public timestamp: any,
    public sequence: number,
    public agentSessionId: string,
    public sessionId: string,
  ) {}
}
