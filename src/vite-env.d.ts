/// <reference types="vite/client" />
declare module "*.css";
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "virtual:pwa-register";
