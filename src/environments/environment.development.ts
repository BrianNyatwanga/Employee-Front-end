
type Config = {
    production: boolean;
    apiBaseUrl: string;
  }
  
 export const config: Config = {
    production: false,
    apiBaseUrl: 'http://localhost:8080/'
  };