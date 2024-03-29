import { css } from '../../../src/lib/styled-components';
// @ts-ignore
import InterBoldWoff from './Inter-Bold.woff';
// @ts-ignore
import InterBoldWoff2 from './Inter-Bold.woff2';
// @ts-ignore
import InterBoldItalicWoff from './Inter-BoldItalic.woff';
// @ts-ignore
import InterBoldItalicWoff2 from './Inter-BoldItalic.woff2';
// @ts-ignore
import InterSemiBoldWoff from './Inter-SemiBold.woff';
// @ts-ignore
import InterSemiBoldWoff2 from './Inter-SemiBold.woff2';
// @ts-ignore
import InterSemiBoldItalicWoff from './Inter-SemiBoldItalic.woff';
// @ts-ignore
import InterSemiBoldItalicWoff2 from './Inter-SemiBoldItalic.woff2';
// @ts-ignore
import InterMediumWoff from './Inter-Medium.woff';
// @ts-ignore
import InterMediumWoff2 from './Inter-Medium.woff2';
// @ts-ignore
import InterMediumItalicWoff from './Inter-MediumItalic.woff';
// @ts-ignore
import InterMediumItalicWoff2 from './Inter-MediumItalic.woff2';
// @ts-ignore
import InterWoff from './Inter-Regular.woff';
// @ts-ignore
import InterWoff2 from './Inter-Regular.woff2';
// @ts-ignore
import InterItalicWoff from './Inter-Italic.woff';
// @ts-ignore
import InterItalicWoff2 from './Inter-Italic.woff2';
// @ts-ignore
import InterLightWoff from './Inter-Light-BETA.woff';
// @ts-ignore
import InterLightWoff2 from './Inter-Light-BETA.woff2';
// @ts-ignore
import InterLightItalicWoff from './Inter-LightItalic-BETA.woff';
// @ts-ignore
import InterLightItalicWoff2 from './Inter-LightItalic-BETA.woff2';

const Inter = css`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        src: url(${InterLightWoff2}) format('woff2'), url(${InterLightWoff}) format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 300;
        src: url(${InterLightItalicWoff2}) format('woff2'), url(${InterLightItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterWoff2}) format('woff2'), url(${InterWoff}) format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        src: url(${InterItalicWoff2}) format('woff2'), url(${InterItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterMediumWoff2}) format('woff2'), url(${InterMediumWoff}) format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 500;
        src: url(${InterMediumItalicWoff2}) format('woff2'), url(${InterMediumItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(${InterSemiBoldWoff2}) format('woff2'), url(${InterSemiBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 600;
        src: url(${InterSemiBoldItalicWoff2}) format('woff2'), url(${InterSemiBoldItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url(${InterBoldWoff2}) format('woff2'), url(${InterBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 700;
        src: url(${InterBoldItalicWoff2}) format('woff2'), url(${InterBoldItalicWoff}) format('woff');
    }
`;

export default Inter;
