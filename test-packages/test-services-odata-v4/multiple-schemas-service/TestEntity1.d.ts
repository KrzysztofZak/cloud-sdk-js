import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { TestComplexType1 } from './TestComplexType1';
import type { TestEntity1Api } from './TestEntity1Api';
import { TestEnumType1 } from './TestEnumType1';
/**
 * This class represents the entity "A_TestEntity1" of service "API_MULTIPLE_SCHEMAS_SRV".
 */
export declare class TestEntity1<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TestEntity1Type<T>
{
  readonly _entityApi: TestEntity1Api<T>;
  /**
   * Technical entity name for TestEntity1.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the TestEntity1 entity
   */
  static _keys: string[];
  /**
   * Key Property String.
   */
  keyPropertyString: DeserializedType<T, 'Edm.String'>;
  /**
   * Int 16 Property.
   * @nullable
   */
  int16Property?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Enum Property.
   * @nullable
   */
  enumProperty?: TestEnumType1 | null;
  /**
   * Complex Type Property.
   * @nullable
   */
  complexTypeProperty?: TestComplexType1<T> | null;
  constructor(_entityApi: TestEntity1Api<T>);
}
export interface TestEntity1Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  keyPropertyString: DeserializedType<T, 'Edm.String'>;
  int16Property?: DeserializedType<T, 'Edm.Int16'> | null;
  enumProperty?: TestEnumType1 | null;
  complexTypeProperty?: TestComplexType1<T> | null;
}
//# sourceMappingURL=TestEntity1.d.ts.map
