import { Factory } from './factory';
import { SafeNestedRecord } from './nodes/node';

export class JsonConverter {
	/**
	 * Helper function to convert a Cfdi XML contents to JSON string
	 *
	 * @param cfdi - XML cfdi contents
	 * @param space - Value if require custom space
	 * @returns Json String
	 * @throws Error
	 *
	 */
	public static convertToJson(cfdi: string, space: number | string = 2): string {
		return JSON.stringify(JsonConverter.convertToMap(cfdi), null, space);
	}

	/**
	 * Helper function to convert a Cfdi XML contents to JSON string
	 *
	 * @param cfdi - string
	 * @returns A Object Map data
	 */
	public static convertToMap<T extends SafeNestedRecord>(cfdi: string): T {
		const factory = new Factory();
		const converter = factory.createConverter();
		const dataNode = converter.convertXmlContent(cfdi);

		return dataNode.toRecord() as T;
	}
}
