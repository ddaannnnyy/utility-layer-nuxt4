export function returnDevWarning(msg: string, type?: 'info' | 'warn' | 'error') {
    switch (type) {
        case 'info':
            if (import.meta.dev) {
                console.info(msg);
            }
            return;
        case 'warn':
            if (import.meta.dev) {
                console.warn(msg);
            }
            return;
        case 'error':
            if (import.meta.dev) {
                console.error(msg);
            }
            return;
        default:
            if (import.meta.dev) {
                console.log(msg);
            }
            return;
    }
}