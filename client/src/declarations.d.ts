// src/declarations.d.ts
declare module "@react-oauth/google" {
    export interface CredentialResponse {
      credential?: string;
      select_by?: string;
    }
    export function GoogleOAuthProvider(props: any): JSX.Element;
    export function GoogleLogin(props: any): JSX.Element;
  }
  