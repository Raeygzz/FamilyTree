# Family Tree Application Template

This is a Family Tree Application.

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
# <Add variables>
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
npx expo start --web
or
yarn expo start --web
```

## Script

#### Expo, EAS

```bash
"ci": "yarn tsc && yarn lint",

"installPackage": "npx expo install package-name",

"expoDoctor": "npx expo-doctor",

"expoDoctor:help": "npx expo-doctor --help",

"start": "npx expo start -c",

"prebuild": "npx expo prebuild",

"upgrade:dependencies": "npx expo install --fix",

"prebuild:android:with:emulator": "npx expo run:android",

"prebuild:ios:with:simulator": "npx expo run:ios",

"pkg:check": "npx expo install --check",

"pkg:fix": "npx expo install --fix",

"prebuild": "yarn expo prebuild",

"eas:build:configure": "eas build:configure",

"env:to:eas": "eas secret:push --scope project --env-file ./.env",

"local:build": "eas build --local",

"dev:build": "eas build --profile development --platform android",

"local:abuild": "yarn expo run:android --variant debug",
```

#### Supabase

```bash
"supa:init": "npx supabase init",

"supa:start": "npx supabase start",

"link:supa:database": "npx supabase link --project-ref ewrxcusjjavnccrwhvin",

"gen:supa:types": "npx supabase gen types typescript --linked > src/types/supabase.ts",

# "gen:supa:types": "npx supabase gen types --lang=typescript --local > utils/database.types.ts"
```

## Dependencies

```
"@expo/vector-icons": "^14.0.2",
"@react-navigation/native": "^6.0.2",
"expo": "~51.0.28",
"expo-constants": "~16.0.2",
"expo-font": "~12.0.9",
"expo-linking": "~6.3.1",
"expo-router": "~3.5.23",
"expo-splash-screen": "~0.27.5",
"expo-status-bar": "~1.12.1",
"expo-system-ui": "~3.0.7",
"expo-web-browser": "~13.0.3",
"react": "18.2.0",
"react-dom": "18.2.0",
"react-native": "0.74.5",
"react-native-gesture-handler": "~2.16.1",
"react-native-reanimated": "~3.10.1",
"react-native-safe-area-context": "4.10.5",
"react-native-screens": "3.31.1",
"react-native-web": "~0.19.10",
"expo-dev-client": "~4.0.26"
```

## devDependencies

```
"@babel/core": "^7.20.0",
"@types/jest": "^29.5.12",
"@types/react": "~18.2.45",
"@types/react-test-renderer": "^18.0.7",
"jest": "^29.2.1",
"jest-expo": "~51.0.3",
"react-test-renderer": "18.2.0",
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
