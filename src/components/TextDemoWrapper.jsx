export const textVariants = {
  display: {
    fontSize: "clamp(8em, 12vw, 12em)",
    fontWeight: 800,
    lineHeight: 1,
  },

  hero: {
    fontSize: "clamp(4em, 8vw, 8em)",
    fontWeight: 700,
    lineHeight: 1.1,
  },

  title: {
    fontSize: "clamp(2em, 4vw, 4em)",
    fontWeight: 700,
    lineHeight: 1.2,
  },

  body: {
    fontSize: "clamp(1.25em, 2vw, 1.5em)",
    fontWeight: 400,
    lineHeight: 1.5,
  },
};

function TextDemoWrapper({
  children,
  variant = "hero",
  color = "#FFFFFF",
  align = "center",
  maxWidth = "1200px",
}) {
  const style = textVariants[variant];

  return (
    <div
      style={{
        width: "100%",
        maxWidth,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: align,

        color,

        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default TextDemoWrapper;
