//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'ca-ES',
  title: 'UF12',
  description: 'Descripció',
  base: '/UF12/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  head: [
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'Accés a base de dades',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: "1. Introducció", link: '/1-introduccio' },
        { text: "2. Repàs del llenguatge SQL", link: '/2-sql' },
        { text: "3. JDBC", link: '/3-jdbc' },
        { text: "4. Accés a base de dades des de NetBeans", link: '/4-acces_netbeans' },
        { text: "5. Accés a bases de dades mitjançant codi Java", link: '/5-acces_java' },
        { text: "6. Navegabilitat i concurrència", link: '/6-navegabilitat' },
        { text: "7. Consultes", link: '/7-consultes' },
        { text: "8. Modificació", link: '/8-modificacio' },
        { text: "9. Inserció", link: '/9-insercio' },
        { text: "10. Esborrat", link: '/10-esborrat' },
        { text: "Exemples", link: '/11-exemples' },
        { text: 'Exercicis', link: '/12-exercicis' },
      ]},/*
      { text: '📚 Continguts addicionals', items: [
      ]}*/
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
        { text: "1. Introducció", link: '/1-introduccio' },
        { text: "2. Repàs del llenguatge SQL", link: '/2-sql' },
        { text: "3. JDBC", link: '/3-jdbc' },
        { text: "4. Accés a base de dades des de NetBeans", link: '/4-acces_netbeans' },
        { text: "5. Accés a bases de dades mitjançant codi Java", link: '/5-acces_java' },
        { text: "6. Navegabilitat i concurrència", link: '/6-navegabilitat' },
        { text: "7. Consultes", link: '/7-consultes' },
        { text: "8. Modificació", link: '/8-modificacio' },
        { text: "9. Inserció", link: '/9-insercio' },
        { text: "10. Esborrat", link: '/10-esborrat' },
        { text: "Exemples", link: '/11-exemples' },
        { text: 'Exercicis', link: '/12-exercicis' },
      ]},
      { text: '',
        items: [
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]
      },        
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})
