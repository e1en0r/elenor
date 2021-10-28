declare module '*.css' {
  const exports: Record<string, string>;
  export = exports;
}

declare module '*.png' {
  const exports: string;
  export default exports;
}

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exports: any;
  export default exports;
}
