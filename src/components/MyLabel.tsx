import "./mylabel.css";

export type MyLabelProps = {
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;

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

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  fontColor,
  label = "No Label",
  size = "normal",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
