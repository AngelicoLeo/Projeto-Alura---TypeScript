System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, key, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log('----------');
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`o retorno do método ${key} é ${JSON.stringify(retorno)}`);
                console.log(`o método ${key} demorou ${t2 - t1} ms`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
