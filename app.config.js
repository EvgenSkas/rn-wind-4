const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
    if (IS_DEV) {
        return 'com.evgenskas.stickersmash.dev';
    }

    if (IS_PREVIEW) {
        return 'com.evgenskas.stickersmash.preview';
    }

    return 'com.evgenskas.stickersmash';
};

const getAppName = () => {
    console.log('appName')
    if (IS_DEV) {
        return 'StickerSmash (Dev)';
    }

    if (IS_PREVIEW) {
        return 'StickerSmash (Preview)';
    }

    return 'StickerSmash: Emoji Stickers';
};

export default {
    name: getAppName(),
    slug: "rn-wind-4",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    ios: {
        supportsTablet: true,
        bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff"
        },
        package: getUniqueIdentifier(),
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png"
    },
    experiments: {
        typedRoutes: true
    },
    extra: {
        router: {
            origin: false
        },
        eas: {
            projectId: "fd94b0db-7cf5-4f65-8cee-adf983db7263"
        }
    },
    owner: "evgenskas"
};
