export default function({ rootOptions }) {
  rootOptions.head = function() {
    return {
      meta: [
        {
          name: `description`,
          content: this.$siteConfig.description
        },
        {
          property: `og:title`,
          content: this.$siteConfig.title
        },
        {
          property: `og:description`,
          content: this.$siteConfig.description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: this.$siteConfig.author
        },
        {
          name: `twitter:title`,
          content: this.$siteConfig.title
        },
        {
          name: `twitter:description`,
          content: this.$siteConfig.description
        },
        {
          name: `keywords`,
          content: this.$siteConfig.keywords
        }
      ]
    };
  };
}
