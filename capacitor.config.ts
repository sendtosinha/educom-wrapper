import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.edugeeks.app',
  appName: 'EduGeeks',
  webDir: 'www',
  server: {
    url: 'https://stellular-sable-3992bf.netlify.app',
    cleartext: false
  }
};

export default config;
