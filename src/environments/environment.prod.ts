import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
};
