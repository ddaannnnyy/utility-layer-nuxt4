export const isDev = () => import.meta.dev;

export function returnDevWarning(msg: string, type?: 'info' | 'warn' | 'error') {
    if (!isDev()) return;
    switch (type) {
        case 'info':
            console.info(msg);
            return;
        case 'warn':
            console.warn(msg);
            return;
        case 'error':
            console.error(msg);
            return;
        default:
            console.log(msg);
            return;
    }
}