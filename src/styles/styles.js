export default {
  'html, body': {
    width: '100%',
    minHeight: '100vh',
    fontFamily: 'ProximaNova',
    fontSize: '14px',
    color: '#4c4c4c',
    fontWeight: 400,
    background: '#f9f9f9',
    lineHeight: '1.42857',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
    'font-smoothing': 'antialiased',
  },

  'a, a:hover': {
    textDecoration: 'none',
  },

  'button, button:active, button:focus': {
    outline: 'none !important',
  },

  '*': {
    '-webkit-box-sizing': 'border-box',
    '-moz-box-sizing': 'border-box',
    '-ms-box-sizing': 'border-box',
    '-o-box-sizing': 'border-box',
    'box-sizing': 'border-box',
  },

  '.clear:after': {
    display: 'block',
    clear: 'both',
    content: '""',
  },
};
