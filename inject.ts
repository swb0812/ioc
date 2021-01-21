export function inject(serviceIdentifier: string | symbol) {
    return function(target: any, propertyKey: string, parameterIndex: number) {
      const metadata = {
        key: 'inject.tag',
        value: serviceIdentifier
      };
      Reflect.defineMetadata(`custom:paramtypes#${parameterIndex}`, metadata, target);
    };
  }