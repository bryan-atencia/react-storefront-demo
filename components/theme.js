import createTheme from 'react-storefront/theme/createTheme'
import ExpandIcon from '@material-ui/icons/Add'
import CollapseIcon from '@material-ui/icons/Remove'

const breakPointTheme = createTheme()

// Site Palette Colors

const palette = {
  primary: {
    main: '#000', // Black
    light: '#FFF' // White
  },
  secondary: {
    main: '#5B6770', // Dark Gray
    light: '#F5F5F5' // Light Gray
  },
  error: {
    main: '#B93E21' // Bright Red
  },
  holiday: {
    main: '#990118' // Dark Red
  },
  background: {
    white: '#FFF', // White
    main: '#F5F5F5', // Light Gray
    medium: '#ccc', // Medium Gray
    darkGray: '#5B6770', // Dark Gray
    default: 'white' // White - Used by MuiCssBaseline
  },
  spacing: {
    container: 15,
    row: 15
  },
  disabled: {
    lightGray: '#F5F5F5', // Light Gray
    darkGray: '#5B6770' // Dark Gray
  },
  button: {
    hoverBackgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  overlayBanner: {
    background: 'rgba(0, 0, 0, .7)',
    hoverBackground: 'rgba(91, 103, 112, .9)'
  }
}

// Max Width of Site Content
const maxWidth = '1180px'

// Font Definitions and Fallbacks
// Futura (Bold)
const futuraBold = 'futuraBold,Arial,sans-serif'

// Futura (Medium)
const futuraMedium = 'futuraMedium,Arial,sans-serif'

// Futura PT (Bold)
const futuraPTBold = 'futuraPTBold,Arial,sans-serif'

// Futura PT (Book)
const futuraPTBook = 'futuraPTBook,Arial,sans-serif'

// Futura PT (Demi)
const futuraPTDemi = 'futuraPTDemi,Arial,sans-serif'

// Futura PT (Medium)
const futuraPTMedium = 'futuraPTMedium,Arial,sans-serif'

// Georgia
const georgia = 'Georgia,Arial,sans-serif'

const fonts = {
  futuraPTBold,
  futuraMedium,
  futuraBold,
  futuraPTDemi,
  futuraPTMedium,
  futuraPTBook,
  georgia
}

// General Header Styling
const header = {
  fontFamily: futuraBold,
  textTransform: 'uppercase',
  color: palette.primary.main
}

// H1 Styling
const h1 = {
  fontFamily: futuraPTMedium,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 36,
  textTransform: 'capitalize',

  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 28
  }
}

// H1 Alternate Styling - Home Page and Special Landing Pages
const h1Alt = {
  fontFamily: futuraBold,
  textShadow: '-1px 2px 0 #000000',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.16,
  letterSpacing: '1.2px',
  color: palette.primary.main,
  textTransform: 'uppercase',
  fontSize: 50,

  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 35
  }
}

// H2 Styling
const h2 = {
  fontFamily: futuraPTBold,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 30,
  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 24
  }
}

// H2 Alternate Styling - Home Page and Special Landing Pages
const h2Alt = {
  fontFamily: futuraBold,
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 36,
  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 25
  }
}

// H2 Alternate Light Styling - Home Page and Special Landing Pages
const h2AltLight = {
  fontFamily: futuraMedium,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 36,
  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 25
  }
}

// H3 Styling
const h3 = {
  fontFamily: futuraPTMedium,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 28,

  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 20
  }
}

// H4 Styling
const h4 = {
  fontFamily: futuraPTDemi,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 24,

  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 18
  }
}

// H5 Styling
const h5 = {
  fontFamily: futuraPTBook,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: palette.primary.main,
  fontSize: 24,

  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 18
  }
}

// H6 Styling
const h6 = {
  fontFamily: futuraPTMedium,
  fontSize: 18,
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.22,
  letterSpacing: 'normal',
  color: palette.primary.main,

  [breakPointTheme.breakpoints.down('sm')]: {
    fontSize: 16
  }
}

// Body Styling - Regular Variant
const body1 = {
  fontFamily: futuraPTBook,
  fontSize: 16,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.25,
  letterSpacing: 'normal',
  color: palette.primary.main
}

// Body Styling - Smaller Variant
const body2 = {
  fontFamily: futuraPTBook,
  fontSize: 14,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.25,
  letterSpacing: 'normal',
  color: palette.primary.main
}

// Button Text Styling
const button = {
  fontFamily: futuraPTDemi,
  fontSize: 18,
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  textTransform: 'uppercase'
}

const buttons = {
  // Black Button, White Text (No Hover Effect)
  darkButton: {
    background: palette.primary.main,
    color: palette.primary.light,
    '& span': {
      color: palette.primary.light
    },
    border: `1.7px solid ${palette.primary.main}`,
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.main
    }
  },
  // Black Button, White Text (Hover: White Button, Black Text)
  darkButtonHover: {
    background: palette.primary.main,
    color: palette.primary.light,
    '& span': {
      color: palette.primary.light
    },
    border: `1.7px solid ${palette.primary.main}`,
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.light,
      color: palette.primary.main,
      '& span': {
        color: palette.primary.main
      }
    }
  },
  // White Button, Black Text (No Hover Effect)
  lightButton: {
    background: palette.primary.light,
    color: palette.primary.main,
    '& span': {
      color: palette.primary.main
    },
    border: `1.7px solid ${palette.primary.main}`,
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.light
    }
  },
  // White Button, Black Text (Hover: Black Button, White Text)
  lightButtonHover: {
    background: palette.primary.light,
    color: palette.primary.main,
    '& span': {
      color: palette.primary.main
    },
    border: `1.7px solid ${palette.primary.main}`,
    margin: '15px auto',
    width: 196,
    height: 55,
    '&:hover': {
      background: palette.primary.main,
      color: palette.primary.light,
      '& span': {
        color: palette.primary.light
      }
    }
  }
}

const links = {
  // Body copy - in text link
  bodyLink: {
    fontFamily: futuraPTBold,
    fontSize: 16,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: palette.primary.main,
    '&:hover': {
      color: palette.secondary.main,
      borderBottom: `1px solid ${palette.disabled.darkGray}`
    }
  },

  // Text link button on Page - Larger CTA Link
  ctaLink: {
    fontFamily: futuraPTMedium,
    fontSize: 18,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: palette.primary.main,
    borderBottom: `1px solid ${palette.primary.main}`,
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: 'fit-content',
    '&:hover': {
      color: palette.disabled.darkGray,
      borderBottom: `1px solid ${palette.disabled.darkGray}`
    }
  },

  // Text link button on hover of shop tag - Smaller CTA Link
  ctaLinkSmall: {
    fontFamily: futuraPTMedium,
    fontSize: 15,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: palette.primary.main,
    borderBottom: `1px solid ${palette.primary.main}`,
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: 'fit-content',
    '&:hover': {
      color: palette.disabled.darkGray,
      borderBottom: `1px solid ${palette.disabled.darkGray}`
    }
  }
}

// Add To Cart CTA for PDP and Quick Shop
const addToCartCTA = {
  addToCartWrapper: {
    background: palette.primary.main,
    width: '100%',
    display: 'flex',
    '&:hover': {
      background: palette.primary.main
    },
    '&:hover button': {
      background: palette.primary.main
    }
  },
  addToCartButton: {
    fontWeight: 'bold',
    width: '100%',
    margin: 5,
    padding: 0,
    border: '1px solid white',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& h6': {
      color: 'white'
    }
  },
  disabledAddToCart: {
    fontWeight: 'bold',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    '& h6': {
      color: 'white'
    }
  },
  selectSizeButton: {
    background: palette.error.main,
    color: 'white',
    border: `1px solid ${palette.error.main}`,
    width: '100%',
    padding: 0,
    '& h6': {
      color: 'white'
    },
    '&:hover': {
      background: palette.error.main
    }
  }
}

const divider = {
  // Default divider line - black
  line: `1px solid rgba(0, 0, 0, 0.4)`,

  // Light divider line - light gray
  lightLine: `1px solid ${palette.secondary.light}`,

  //Medium divider line - medium gray
  mediumLine: `1px solid ${palette.background.medium}`
}

const arrows = {
  defaultArrowIcon: {
    width: 36,
    height: 36,
    fill: palette.primary.main,
    [breakPointTheme.breakpoints.down('sm')]: {
      width: 30,
      height: 30,
    }
  }
}

// Typography Variants - Make use of these when using the typography component
const typography = {
  useNextVariants: true,
  fontFamily: futuraPTBook,
  holiday: {
    fontFamily: georgia,
    color: palette.holiday.main,
    fontStyle: 'italic'
  },

  // Body Text
  body1: body1,
  body2: body2,

  // Button Text - No color by default - Use button themes to give button element and text correct colors
  button: button,

  // Header Text
  header: header,

  // Default Headers
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,

  // Alternate Headers
  h1Alt: h1Alt,
  h2Alt: h2Alt,
  h2AltLight: h2AltLight,

  subtitle1: {
    fontFamily: futuraPTBook,
    color: palette.primary.main,
    lineHeight: '1.3em',
    fontSize: 16
  },
  subtitle2: {
    fontFamily: futuraPTBook,
    color: palette.primary.main,
    fontSize: 13
  },
  caption: {
    color: palette.primary.main
  }
}

const overrides = {
  RSFPages: {
    root: {
      backgroundColor: 'white',
      '& p:focus': {
        outline: 'none'
      }
    }
  },
  RSFLoadMask: {
    fullscreen: {
      height: `calc(100vh - 181px)`
    }
  },
  RSFToolbarButton: {
    wrap: {
      fontSize: '13px',
      color: palette.primary.main,
      position: 'relative',
      margin: 0,
      padding: 0
    }
  },
  MuiIconButton: {
    root: {
      width: 40,
      height: 40,
      padding: 8,
      boxSizing: 'content-box',
      display: 'inline'
    }
  },
  RSFMenu: {
    list: {
      backgroundColor: palette.background.main
    },
    expander: {
      maxHeight: 50,
      '&:hover': {
        backgroundColor: palette.background.white
      },
      '@media(hover: none)': {
        'div &:hover': {
          backgroundColor: palette.background.white
        }
      }
    },
    expanded: {
      backgroundColor: palette.background.white
    },
    listItemIcon: {
      display: 'block'
    }
  },
  MuiTabs: {
    indicator: {
      backgroundColor: palette.primary.main
    },
    scrollButtons: {
      width: 20,
      height: 48,
      [breakPointTheme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    scrollable: {
      overflowX: 'auto',
      '@supports (-ms-ime-align: auto)': {
        overflowX: 'hidden'
      },
      '@supports (-moz-appearance:none)': {
        overflowX: 'hidden'
      }
    }
  },
  MuiListItem: {
    root: {
      paddingTop: '16px',
      paddingBottom: '16px',
      fontFamily: typography.header.fontFamily,
      fontWeight: 500,
      color: palette.primary.main,
      backgroundColor: 'white',
      '& svg': {
        color: palette.primary.main
      }
    }
  },
  MuiTab: {
    root: {
      fontFamily: typography.header.fontFamily,
      fontSize: '18px',
      '@media (min-width:960px)': {
        fontSize: '16px'
      }
    },
    wrapper: {
      color: palette.primary.main
    },
    label: {
      ...typography.h3,
      textTransform: 'capitalize',
      [breakPointTheme.breakpoints.down('sm')]: {
        fontSize: 15
      }
    }
  },
  MuiDialog: {
    paper: {
      padding: 10,
      minWidth: 300,
      borderRadius: 0
    }
  },
  MuiDialogContent: {
    root: {
      padding: 20
    }
  },
  MuiDialogContentText: {
    root: {
      lineHeight: 1.2
    }
  },
  RSFExpandableSection: {
    withCollapseIcon: {
      right: -15
    }
  },
  MuiButton: {
    root: {
      borderRadius: 0,
      border: `1px solid ${palette.primary.main}`,
      '&$disabled': {
        border: `1px solid ${palette.disabled.lightGray}`,
        backgroundColor: palette.disabled.lightGray,
        color: palette.disabled.darkGray
      }
    },
    contained: {
      backgroundColor: 'white',
      boxShadow: 'none',
      color: palette.primary.main,
      '&$disabled': {
        backgroundColor: '#eee',
        border: '1px solid #999'
      }
    },
    label: {
      '$disabled &:first-child': {
        borderColor: 'transparent'
      }
    },
    containedSecondary: {
      backgroundColor: palette.primary.main,
      color: 'white'
    }
  },
  MuiPrivateTabIndicator: {
    root: {
      height: '4px'
    }
  },
  RSFRating: {
    root: {
      '& svg': {
        fill: palette.secondary.main
      }
    }
  },
  RSFAmpExpandableSection: {
    title: {
      color: 'white',
      fontFamily: futuraBold,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    accordion: {
      borderBottom: 'none'
    }
  },
  RSFContainer: {
    root: {
      maxWidth: maxWidth
    }
  },
  ExpandIcon,
  CollapseIcon
}

const zIndex = {
  chatButton: 999,
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  matching: 1425,
  search: 1450,
  tooltip: 1500,
  chatWindow: 1600
}

const screenReaderText = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  width: 1,
  overflow: 'hidden',
  position: 'absolute'
}

const theme = createTheme({
  typography,
  buttons,
  links,
  divider,
  arrows,
  palette,
  fonts,
  addToCartCTA,
  overrides,
  zIndex: zIndex,
  maxWidth,
  screenReaderText
})

export default theme

export const breakpointValues = breakPointTheme.breakpoints.values
