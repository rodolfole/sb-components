/// <reference types="react" />
import "./mylabel.css";
export declare type MyLabelProps = {
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Color de fondo personalizado de la fuente
     */
    backgroundColor?: string;
    /**
     * Colores básicos del bóton
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: "h1" | "h2" | "h3" | "normal";
};
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
