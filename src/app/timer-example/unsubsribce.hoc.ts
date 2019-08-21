export function Unsubscription(keys: string[]) {
    return (cmpType) => {
        let cmpInstance;
        const originalFactory = cmpType.ngComponentDef.factory;

        cmpType.ngComponentDef.factory = (...args) => {
            cmpInstance = originalFactory(...args);

            cmpType.ngComponentDef.ngOnDestroy = () => {
                cmpInstance.ngOnDestory();
            };

            keys.forEach(key => {
                if (cmpInstance[key]) {
                    cmpInstance[key].unsubscribe();
                }
            });

            return cmpInstance;
        };
        return cmpType;
    };
}
