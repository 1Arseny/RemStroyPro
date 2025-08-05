import type {Metadata} from "next";
import {Roboto_Flex} from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
    subsets: ["latin", "cyrillic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "РемСтройПро | Ремонт и строительство",
    description:
        "Ремонт и строительство под ключ: квартиры, дома, складские помещения. Онлайн-калькулятор, прозрачные цены, скидка 15% на первый замер!",
    keywords: [
        "ремонт квартир",
        "строительство домов",
        "ремонт под ключ",
        "строительство складов",
        "онлайн калькулятор ремонта",
    ],
    authors: [{ name: "РемСтройПрофи", url: "https://remstroiipro.ru" }],
    metadataBase: new URL("https://remstroiipro.ru"), // Замените на реальный домен

    // Open Graph
    openGraph: {
        title: "РемСтройПро",
        description:
            "Ремонт и строительство под ключ: квартиры, дома, складские помещения. Онлайн-калькулятор, прозрачные цены, скидка 15% на первый замер!",
        url: "https://remstroiipro.ru",
        siteName: "РемСтройПро",
        images: [
            {
                url: "https://remstroiipro.ru/og-image.png", // Путь к OG-изображению в public/
                width: 1200,
                height: 900,
                alt: "Ремонт квартир и строительство от РемСтройПро",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },

    // Дополнительные SEO теги
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    formatDetection: {
        telephone: true, // Включение обнаружения телефонных номеров
    },
    verification: {
        google: "KIcUFiXcnsCeWQmFNvD5b5HyrTyclTIhH_ar4WumjVw", // Код верификации Google
        yandex: "5f955619b1e94acb", // Код верификации Yandex
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={robotoFlex.className}>
        <body id="__next">{children}</body>
        </html>
    );
}