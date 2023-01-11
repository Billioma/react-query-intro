import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    heading: `Cera Pro`,
    body: `Cera Pro`,
  },
  components: {
    Input: {
      variants: {
        primary: {
          field: {
            bgColor: "#fff",
            color: "#000",
            _placeholder: {
              color: "gray",
              padding: "5",
            },
          },
        },
        secondary: {
          field: {
            bgColor: "#F2F2F2",
            color: "#000",
            _placeholder: {
              color: "#BDBDBD",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Select: {
      variants: {
        primary: {
          field: {
            bgColor: "#F1EBF9",
            color: "#000",
            cursor: "pointer",
          },
        },
        secondary: {
          field: {
            rounded: "full",
            cursor: "pointer",
            bg: "#fafafa",
            border: "1px solid #E0E0E0",
            color: "#000",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Textarea: {
      variants: {
        primary: {
          bg: "#f2f2f2",
          color: "#000",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
        secondary: {
          bg: "#fff",
          color: "#000",
          border: "1px solid gray",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#C4C4C4",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          border: "none",
          bgColor: "purpleColor",
          color: "#fff",
          fontWeight: "300",
          _hover: {
            bgColor: "orangeColor",
            color: "#fff",
          },
          _focus: {
            bgColor: "",
            color: "#fff",
          },
          _active: {
            bgColor: "orangeColor",
            color: "#fff",
          },
        },
        secondary: {
          bgColor: "orangeColor",
          size: "md",
          border: "1px solid",
          color: "#fff",
          fontWeight: "300",
          _hover: {
            bgColor: "purpleColor",
            color: "#fff",
          },
          _focus: {
            bgColor: "",
            color: "#fff",
          },
          _active: {
            bgColor: "purpleColor",
            color: "#fff",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },

  colors: {
    purpleColor: "#7B47CC",
    semiPurple: "#F1EBF9",
    gradient: "linear-gradient(90deg, #F1EBF9 0%, #FDF8E7 79.13%)",
    semiOrange: "#FDF8E7",
    orangeColor: "#F3C948",
    color: "#000",
  },
});
