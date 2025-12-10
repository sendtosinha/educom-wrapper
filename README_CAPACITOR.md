Educom Capacitor Wrapper Package
================================

This package contains the Capacitor configuration and helper files needed to build an Android wrapper that loads your live site:
https://stellular-sable-3992bf.netlify.app

Files included:
- package.json
- capacitor.config.ts
- .github/workflows/android-build.yml
- icons/ (contains your provided logo and generated icon sizes)
- screenshots/ (contains 4 mobile screenshots)

Next steps (non-technical):
1. Push this folder to a GitHub repository.
2. In repo settings > Secrets, add KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_ALIAS, KEY_PASSWORD if you want CI to sign APK.
3. GitHub Actions will build the APK when you push to main; download artifact from Actions -> run -> app-release.apk

If you want, I can also prepare the full native Android project (android/ folder) in the repo — tell me and I'll include it.
