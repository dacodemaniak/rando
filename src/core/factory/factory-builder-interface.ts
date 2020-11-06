export interface FactoryBuilderInterface<T> {
    build(...args: any[]): T
}