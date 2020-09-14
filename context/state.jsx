export const state = {
    pageTitle: "ANIMU",
    navbar: false,
    isLoading: true,
    errorMessage: null,
    snackbar: false,
    snackbar_value: {
        message: null,
        time: 9999999
    },
    // Mode
    mode: "anime",
    modeIndex: 0,
    // Trending Section
    trendingAnime: null,
    trendingManga: null,
    // Schedule Section
    scheduleAnime: null,
    scheduleManga: null,
    // Top Section
    topAnime: null,
    topManga: null
}