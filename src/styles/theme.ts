export default {
  grid: {
    container: '100rem',
    gutter: '3.2rem',
    content: '42rem'
  },
  border: {
    radius: '0.5rem'
  },
  font: {
    family:
      'system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '3.6rem',
      xxlarge: '4.4rem',
      xxxlarge: '7.2rem',
      huge: '10.0rem'
    }
  },
  colors: {
    lightBg: '#111216',
    white: '#FFFFFF',
    black: '#000000'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20
  }
} as const
