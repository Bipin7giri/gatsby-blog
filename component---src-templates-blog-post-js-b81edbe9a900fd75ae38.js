"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{8771:function(e,t,a){a(7294),a(1883)},8678:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{let{location:t,title:a,children:r}=e;const i="/gatsby-blog/"===t.pathname;let c;return c=i?l.createElement("h1",{className:"main-heading"},l.createElement(n.Link,{to:"/"},a)):l.createElement(n.Link,{className:"header-link-home",to:"/"},a),l.createElement("div",{className:"global-wrapper","data-is-root-path":i},l.createElement("header",{className:"global-header"},c),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{var t,a,r;let{description:i,title:c,children:o}=e;const{site:s}=(0,n.useStaticQuery)("2841359383"),m=i||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,d?c+" | "+d:c),l.createElement("meta",{name:"description",content:m}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:m}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:m}),o)}},4982:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var l=a(7294),n=a(1883),r=(a(8771),a(8678)),i=a(9357);const c=e=>{let{data:{markdownRemark:t}}=e;return l.createElement(i.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=e=>{var t;let{data:{previous:a,next:i,site:c,markdownRemark:o},location:s}=e;const m=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Title";return l.createElement(r.Z,{location:s,title:m},l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"},o.frontmatter.title),l.createElement("p",null,o.frontmatter.date)),l.createElement("section",{dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"}),l.createElement("hr",null)),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,a&&l.createElement(n.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),l.createElement("li",null,i&&l.createElement(n.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))}},5035:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/gatsby-blog/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/gatsby-blog/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/gatsby-blog/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/gatsby-blog/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/gatsby-blog/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/gatsby-blog/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/gatsby-blog/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b81edbe9a900fd75ae38.js.map