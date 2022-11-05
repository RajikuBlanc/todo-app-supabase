declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 環境変数名と型 */
    readonly NEXT_PUBLIC_SUPABASE_URL: string;
    readonly SUPABASE_SECRET_KEY: string;
  }
}
