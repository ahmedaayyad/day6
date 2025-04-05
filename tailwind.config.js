/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'custom-bg': '#f7f3f2',
        'custom-border': '#D3D3D3',
        'table-bg': 'rgba(255, 255, 255, 0.6)',
        'occupied-border': 'rgba(255, 95, 95, 1)',
        'accepted-border': 'rgba(17, 151, 23, 1)',
        'tables-bg': '#FFE6E6',
        'frame-bg': 'rgba(0, 0, 0, 0.05)',
        'text-black-60': 'rgba(0, 0, 0, 0.6)',
        'text-black-100': 'rgba(0, 0, 0, 1)',
        'semantic-red': 'rgba(225, 14, 14, 1)',
        'modal-text': '#333',
        'subtitle': '#666',
        'modal-border': '#ddd',
      },
      width: {
        '203': '203.6px',
        '355': '355px',
        '360': '360px',
        '90': '90px',
      },
      height: {
        '136': '136px',
        '150': '150px',
        '450': '450px',
        '116': '116px',
        '14': '56px',
        '52': '52px',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      fontSize: {
        'title-2': ['24px', { lineHeight: '32px', letterSpacing: '-0.48px' }],
        'title-3': ['22px', { lineHeight: '24px', letterSpacing: '-0.22px' }],
        'headline': ['20px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
        'body': ['16px', { lineHeight: '24px', letterSpacing: '-0.16px' }],
        'caption': ['13px', { lineHeight: '16px', letterSpacing: '0px' }],
      },
      boxShadow: {
        'modal': '0 4px 10px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '4.5': '18px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-sm': {
          'backdrop-filter': 'blur(2px) brightness(100%)',
          '-webkit-backdrop-filter': 'blur(2px) brightness(100%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
