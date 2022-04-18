const config = {
  name: "Thimble",
  slug: "thimble",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/app_icon.png",
  updates: {
    enabled: false,
  },
  assetBundlePatterns: ["**/*"],
};

module.exports = () => {
  if (process.env.APP_ENV === "prod") {
    return {
      ...config,
      extra: {
        baseURL: "https://www.thimbleapp.co/v1/",
        shareURL: "https://www.thimbleapp.co/p/",
      },
    };
  } else if (process.env.APP_ENV === "sim") {
    return {
      ...config,
      extra: {
        baseURL: "http://127.0.0.1:8000/v1/",
        shareURL: "http://127.0.0.1:8000/p/",
      },
    };
  } else {
    return {
      ...config,
      extra: {
        baseURL: "http://192.168.1.11:8000/v1/",
        shareURL: "http://192.168.1.11:8000/p/",
      },
    };
  }
};
