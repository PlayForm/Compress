export default (path: string) => (path?.endsWith("/") ? path : `${path}/`);
