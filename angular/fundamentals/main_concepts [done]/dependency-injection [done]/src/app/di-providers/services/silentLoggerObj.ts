export const SilentLogger = {
    logs: ['Silent logger says "Shhhh!". Provided via "useValue"'],
    log: silentLogFn
};

function silentLogFn(msg: any) {
    console.log('Silent log: ', msg);
}