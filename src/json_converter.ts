import Factory from '#src/factory';
import { type SafeNestedRecord } from '#src/types';

export default class JsonConverter {
  public constructor(private readonly _factory: Factory = new Factory()) {}

  /**
   * Helper function to convert a Cfdi XML contents to JSON string
   */
  public convertToJson(cfdi: string, space: number | string = 2): string {
    return JSON.stringify(this.convertToRecord(cfdi), null, space);
  }

  /**
   * Helper function to convert a Cfdi XML contents to Object record
   */
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  public convertToRecord<T extends SafeNestedRecord>(cfdi: string): T {
    const converter = this._factory.createConverter();
    const dataNode = converter.convertXmlContent(cfdi);

    return dataNode.toRecord() as T;
  }
}
