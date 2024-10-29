const AppConstants = Object.freeze({
  Config: {
    Api: {
      apiURL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      maxConnectionTimeout: 20000, // twenty-second
    },
    Pagination: {
      pageSize: 10,
      pageNumber: 1,
    },
    Component: {
      actionDebounceTime: 1500, // 1.5 seconds
      otp: {
        otpLength: 6,
        otpResendTimeout: 60, // 1 minutes
      },
    },
    Validation: {
      passwordLength: 8,
      MOBILE_NUMBER_DIGIT: 10,
    },
    IMAGE_FILE_TYPE: ["image/png", "image/jpeg", "image/jpg"],
  },
  StorageKey: {
    appSession: "app-session",
    appLanguage: "app_language",
    onboardingState: "onboarding-state",
    rememberUser: "remember-user",
    userSession: "user-session",

    biometricInfo: "biometric-info",
    biometricEnabled: "biometric-enabled",
    biometricAppSession: "biometric-app-session",
    biometricUserSession: "biometric-user-session",
    biometricFirstScreenDismissed: "biometric-first-screen-dismissed",
  },
  ApiKeys: {
    user: {
      insertUser: "/Users",
    },
  },
});

export { AppConstants };
