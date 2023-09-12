import i18next from "i18next";

export const toggleLanguage = (lng: string) => {
    i18next.changeLanguage(lng)
};