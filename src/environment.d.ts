declare global {
  namespace NodeJS {
    interface ProcessEnv {
      __DEV__: string;
      __VERSION__: string;
      __BASE__: string;
      __NAME__: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
