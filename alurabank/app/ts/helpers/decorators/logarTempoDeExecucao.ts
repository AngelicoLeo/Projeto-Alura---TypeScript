export function logarTempoDeExecucao(){

        return function(target: any, key: string, descriptor: PropertyDescriptor)
        {
            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: any[]){    
                console.log('----------');
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`o retorno do método ${key} é ${JSON.stringify(retorno)}`);
                console.log(`o método ${key} demorou ${t2-t1} ms`);
                return retorno;
            }
            return descriptor;
        }
}