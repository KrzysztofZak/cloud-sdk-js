import { StructureKind } from 'ts-morph';
import { foodService } from '../../test/test-util/data-model';
import { functionImportSourceFile } from './file';

describe('file', () => {
  it('functionImportSourceFile', () => {
    const actual = functionImportSourceFile(foodService);

    const imports = (actual.statements as any).filter(
      element => element.kind === StructureKind.ImportDeclaration
    );

    expect(imports.map(i => i.moduleSpecifier)).toEqual([
      '@sap-cloud-sdk/odata-v2',
      './service'
    ]);

    const variables = (actual.statements as any).filter(
      element => element.kind === StructureKind.VariableStatement
    );

    expect(variables.length).toBe(1);
  });
});
