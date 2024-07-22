import { MutableRefObject } from "react";

export const getHtmlWithStyles = (htmlElement: MutableRefObject<HTMLDivElement | null>): string | undefined => {
    const element = htmlElement.current;
    if(element) {
        const html = element.innerHTML;
        const styles = Array.from(document.styleSheets)
            .map((styleSheet) => {
                try {
                    return Array.from(styleSheet.cssRules)
                        .map((rule) => rule.cssText)
                        .join('');
                } catch (error) {
                    console.error('Error accessing stylesheet:', error);
                    return '';
                }
            })
            .join('');
    
        return `
            <html>
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <style>
                        @font-face {
                            font-family: 'Rubik';
                            src: url('/fonts/Rubik-VariableFont_wght.ttf') format('truetype');
                            font-weight: normal;
                            font-style: normal;
                        }
                        @font-face {
                            font-family: 'Poppins';
                            src: url('/fonts/Poppins-Regular.ttf') format('truetype');
                            font-weight: normal;
                            font-style: normal;
                        }
                        ${styles}
                    </style>
                </head>
                <body>
                    ${html}
                </body>
            </html>
        `
    }else {
        console.error("No se ha podido generar el html")
    }
};