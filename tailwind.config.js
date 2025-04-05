// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-white-100': 'rgba(255, 255, 255, 1)',
        'bg-white-60': 'rgba(255, 255, 255, 0.6)',
        'text-black-100': 'rgba(0, 0, 0, 1)',
        'text-black-60': 'rgba(0, 0, 0, 0.6)',
        'text-white-100': 'rgba(255, 255, 255, 1)',
        'semantic-red-100': 'rgba(225, 14, 14, 1)',
        'border-black-20': 'rgba(0, 0, 0, 0.2)',
        'bg-black-5': 'rgba(0, 0, 0, 0.05)',
        'status-occupied': 'rgba(255, 95, 95, 1)',
        'status-accepted': 'rgba(17, 151, 23, 1)',
        'table-bg': '#f7f3f2',
        'tables-bg': '#FFE6E6',
        'border-gray': '#D3D3D3',
        'text-dark-gray': '#333',
        'text-mid-gray': '#666',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'Helvetica'],
      },
      fontSize: {
        'title-2': ['24px', { lineHeight: '32px', letterSpacing: '-0.48px' }],
        'title-3': ['22px', { lineHeight: '24px', letterSpacing: '-0.22px' }],
        'body-normal': ['16px', { lineHeight: '24px', letterSpacing: '-0.16px' }],
        'headline': ['20px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
        'caption-normal': ['13px', { lineHeight: '16px', letterSpacing: '0px' }],
        'button-large': ['16px', { lineHeight: '24px', letterSpacing: '-0.16px' }],
      },
      spacing: {
        'spacing-41': '16px',
        'spacing-22': '8px',
        '203.6': '203.6px',
      },
      height: {
        '136': '136px',
        '150': '150px',
        '450': '450px',
        '56': '56px',
        '116': '116px',
        '52': '52px',
      },
      width: {
        '203.6': '203.6px',
        '355': '355px',
        '360': '360px',
        '90': '90px',
        '48': '48px',
      },
      borderRadius: {
        '16': '16px',
        '24': '24px',
        '26': '26px',
        '32': '32px',
      },
      boxShadow: {
        'table': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 10px rgba(0, 0, 0, 0.1)',
        'button': '0px 0px 84px #00000080',
      },
    },
  },
  plugins: [],
}
