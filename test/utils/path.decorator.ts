import 'reflect-metadata';

export function Path(path: string): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata('path', path, target);
    };
}