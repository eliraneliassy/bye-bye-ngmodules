export function Unsubscriber(keys: string[]) {
    return (cmpType) => {
        const originalFactory = cmpType.ngComponentDef.factory;
        cmpType.ngComponentDef.factory = (...args) => {
            const cmp = originalFactory(...args);


            cmpType.ngComponentDef.onDestroy = () => {
                if (cmp.ngOnDestroy) {
                    cmp.ngOnDestroy();
                }

                keys.forEach(key => {
                    if (cmp[key]) {
                        cmp[key].unsubscribe();
                    }
                });
            };

            return cmp;
        };
        return cmpType;
    };
}
