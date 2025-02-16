# Family Tree Application Template

This is a "Family Tree Application".

## Prerequisite

To build and run the project following cli is necessary

- [Node](https://nodejs.org/en)
- [Expo Go](https://expo.dev/go)
- [expo-cli](https://github.com/expo/expo-cli)

## Folder Structure

- /src
  - app &gt; `Main folder`
  - assets &gt; `Resources; fonts, images, svg`
  - components &gt; `Reusable Components`
  - constants &gt; `Constant values`
  - hooks &gt; `Reusable hooks`
  - services &gt; `Mock / Api call, Localization, Notification`
  - types &gt; `Generic types`
  - utils &gt; `Reusable function`
  - validations &gt; `Form validations`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
EXPO_UNSTABLE_ATLAS=
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```

## Setup Android/iOS/Web app

Clone the project & go to the project directory then install dependencies using

```bash
npm install
or
yarn install
```

## Run Locally

```bash
npm run start > `for Android / IOS`
npx expo start --web > `for Web`
or
yarn start > `for Android / IOS`
yarn expo start --web < `for web`
```

## Script

#### Expo, EAS

```bash
"yarn:clear": "yarn start --reset-cache",

"ci": "yarn tsc && yarn lint",

"installPackage": "npx expo install package-name",

"expoDoctor": "npx expo-doctor",

"expoDoctor:help": "npx expo-doctor --help",

"start": "npx expo start -c",

"start:devClient": "npx expo start --clear --dev-client",

"start:port:devClient": "npx expo start --port 61005 --clear --dev-client",

"prebuild": "npx expo prebuild",

"pkg:check": "npx expo install --check",

"pkg:fix": "npx expo install --fix",

"prebuild:android:with:emulator": "npx expo run:android",

"prebuild:ios:with:simulator": "npx expo run:ios",

"prebuild": "yarn expo prebuild",

"eas:build:configure": "eas build:configure",

"env:to:eas": "eas secret:push --scope project --env-file ./.env",

"local:build": "eas build --local --profile <development|preview|production> --platform <android|ios> --non-interactive --clear-cache",

"dev:build": "eas build --profile development --platform android",

"local:android:build": "yarn expo run:android --variant debug",

"web:build": "npx expo export -p web",

"locally:test:hosted:prod" "npx serve dist --single",

"test": "jest",

"test:watch": "npm run test -- --watch",

"test:ci": "npm run test -- --coverage",

"test:badges": "npm run test:ci && jest-coverage-badges --input coverage/coverage-summary.json --output __badges__"
```

#### Supabase

```bash
"supa:init": "npx supabase init",

"supa:start": "npx supabase start",

"link:supa:database": "npx supabase link --project-ref ewrxcusjjavnccrwhvin",

"gen:supa:types": "npx supabase gen types typescript --linked > src/types/supabase.ts",

# "gen:supa:types": "npx supabase gen types --lang=typescript --local > utils/database.types.ts"

"supa:reset": "npx supabase <db> reset",
```

#### Deeplink

```bash
"deeplink:test": "npx uri-scheme open 'familytree://(protected)/profile/' --<android|ios>"
```

## Dependencies

```
"@expo-google-fonts/hanken-grotesk": "^0.2.3",
"@expo/vector-icons": "^14.0.3",
"@react-native-async-storage/async-storage": "1.23.1",
"@react-native-community/netinfo": "11.3.1",
"@react-navigation/drawer": "^6.7.2",
"@react-navigation/native": "^6.0.2",
"@reduxjs/toolkit": "^2.2.7",
"@supabase/supabase-js": "^2.45.4",
"axios": "^1.7.7",
"expo": "~51.0.28",
"expo-constants": "~16.0.2",
"expo-dev-client": "~4.0.26",
"expo-font": "~12.0.9",
"expo-linking": "~6.3.1",
"expo-router": "~3.5.23",
"expo-splash-screen": "~0.27.5",
"expo-status-bar": "~1.12.1",
"expo-system-ui": "~3.0.7",
"expo-web-browser": "~13.0.3",
"formik": "^2.4.6",
"nativewind": "^4.0.1",
"react": "18.2.0",
"react-dom": "18.2.0",
"react-native": "0.74.5",
"react-native-gesture-handler": "~2.16.1",
"react-native-reanimated": "~3.10.1",
"react-native-safe-area-context": "4.10.5",
"react-native-screens": "3.31.1",
"react-native-svg": "15.2.0",
"react-native-web": "~0.19.10",
"react-redux": "^9.1.2",
"tailwindcss": "^3.4.10",
"yup": "^1.4.0"
```

## devDependencies

```
"@babel/core": "^7.20.0",
"@commitlint/cli": "^19.5.0",
"@commitlint/config-conventional": "^19.5.0",
"@types/jest": "^29.5.12",
"@types/react": "~18.2.45",
"@types/react-test-renderer": "^18.0.7",
"axios-auth-refresh": "^3.3.6",
"axios-mock-adapter": "^2.0.0",
"eslint": "^8.57.0",
"eslint-config-expo": "^7.1.2",
"eslint-config-prettier": "^9.1.0",
"eslint-plugin-prettier": "^5.2.1",
"expo-atlas": "^0.3.0",
"husky": "^9.1.6",
"jest": "^29.2.1",
"jest-expo": "~51.0.3",
"lint-staged": "^15.2.10",
"prettier": "^3.3.3",
"react-test-renderer": "18.2.0",
"serve": "^14.2.4",
"typescript": "~5.3.3"
```

## Tech Stack

- [react-native](https://reactnative.dev/)
- [expo](https://docs.expo.dev)
- [eas](https://expo.dev/eas)

# ToDos

1. Install the plugin(Prettier - Code formatter) on vs code.
2. While searching "Format on save" on Preference -> Settings, "Format on Save" is displayed. Click on the checkbox to apply prettier on save.

## Authors

- [@ReganTimsina](https://github.com/Raeygzz/familyTree)
