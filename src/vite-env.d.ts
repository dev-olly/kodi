/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly Formspree_form_id: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
