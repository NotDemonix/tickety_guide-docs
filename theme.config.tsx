import NextImage from 'next/image';
export default {
    logo: <NextImage
        alt="Tickety"
        width={210}
        height={50}
        src="/logo_text.webp"
    />,
    darkMode: false,
    nextThemes: {defaultTheme: 'dark'},
    feedback: {
        content: null,
    },
    editLink: {
        component: null,
    },
    footer: {
        component: null,
    },
    navigation: true,
}
