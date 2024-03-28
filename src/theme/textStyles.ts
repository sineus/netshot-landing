import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "var(--font-sf-pro)",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0.2px",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  heading: {
    value: {
      fontFamily: "var(--font-sf-pro)",
    },
  },
});
