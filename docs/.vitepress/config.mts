import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Severe Cold",
  description: "javascript python",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuesuirenqianli' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/javascript/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'Description', link: '/javascript/' },
            { text: 'Data type', link: '/javascript/data-type' },
          ]
        }
      ],
      '/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Description', link: '/python/' },
            { text: 'Data type', link: '/python/data-type' },
          ]
        }
      ],
    },

    nav: [
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'Python', link: '/python/' },
        ]
      }
    ]
  }
})
