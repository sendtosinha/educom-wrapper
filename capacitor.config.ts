import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourcompany.educom',
  appName: 'Educom',
  webDir: 'www',
  server: {
    url: 'https://stellular-sable-3992bf.netlify.app',
    cleartext: false
  }
};

export default config;
