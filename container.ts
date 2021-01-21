export class Container {


    bindTags = {};
    bind<T>(tag: string | symbol) {
        return {
            to: (bindTarget: any) => {
                this.bindTags[tag] = bindTarget;
            }
        };
    }
    get<T>(tag: string | symbol): T {
        const target = this.bindTags[tag];
        const providers = [];
        for (let i = 0; i < target.length; i++) {
        const paramtypes = Reflect.getMetadata('custom:paramtypes#' + i, target);
        const provider = this.bindTags[paramtypes.value];
        providers.push(provider);
        }
        return new target(...providers.map(provider => new provider()));
    }

}



