(self.webpackChunkatiq_israk=self.webpackChunkatiq_israk||[]).push([[7],{450:function(e,t,a){"use strict";a.d(t,{p:function(){return m}});var r=a(7294),n=a(1562),o=a(3494),l=a(7606),i=a(9086),c=a(3628),u=a.n(c),d=o.default.article.withConfig({displayName:"BlogCard__PostWrapper",componentId:"sc-ja3jw0-0"})(["overflow:auto;margin-bottom:70px;padding:30px 30px;border-top:5px solid ",";border-radius:10px;box-shadow:",";background-color:",";&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.1);}span{font-size:13px;color:gray;}"],(function(e){return e.theme.dark?e.theme.accentColor:e.theme.primaryColor}),(function(e){return e.theme.shadowSmall}),(function(e){return e.theme.secondaryColor})),m=function(e){var t=e.date,a=e.readtime;return r.createElement("span",{style:{fontSize:13,color:"gray"}},r.createElement("span",{"aria-label":"publish date "+t},r.createElement(l.G,{color:"gray",icon:"calendar-alt"}),"  ",t),"   ",r.createElement("span",{"aria-label":a+" minutes read"},r.createElement(l.G,{color:"gray",icon:"clock"}),"  ",a,"min read"))};t.Z=function(e){var t=e.date,a=e.readtime,o=e.title,l=e.excerpt,c=e.slug,s=e.tags;return r.createElement(n.ZP,{to:c,"aria-label":o+" - read time "+a+" minutes"},r.createElement(d,null,r.createElement(m,{date:t,readtime:a}),r.createElement("h2",null,o),r.createElement("p",null,l),r.createElement("div",{style:{marginTop:20}},s.map((function(e){return r.createElement(i.CY,{key:e,"aria-label":e+" tag",to:"/blog/tags/"+u()(e)+"/"},e)})))))}},1510:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),n=a(1562),o=a(9086),l=a(8114),i=a(1597),c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u=function(){var e=(0,i.useStaticQuery)("3435786681"),t=e.allMarkdownRemark.edges[c(0,e.allMarkdownRemark.totalCount-1)];if("undefined"!=typeof window)for(;t.node.fields.slug===window.location.pathname;){t=e.allMarkdownRemark.edges[c(0,e.allMarkdownRemark.totalCount-1)];break}return{randomSlug:t.node.fields.slug,randomTitle:t.node.frontmatter.title}},d=function(e){var t=e.children,a=e.sharerSection,i=u(),c=i.randomSlug,d=i.randomTitle;return r.createElement(l.Z,{content:t,aside:r.createElement(r.Fragment,null,r.createElement("section",null,r.createElement("h4",null,"Random post"),r.createElement(n.ZP,{style:{fontSize:"16px"},to:c},d),r.createElement("br",null),r.createElement("br",null)),r.createElement("section",null,r.createElement("h4",null,"Tags"),r.createElement(o.ZP,null),r.createElement("br",null)),a&&a)})}},9086:function(e,t,a){"use strict";a.d(t,{CY:function(){return c}});var r=a(7294),n=a(3494),o=a(1597),l=a(3628),i=a.n(l),c=(0,n.default)(o.Link).withConfig({displayName:"Tags__TagBreadcrumb",componentId:"sc-1ppylt7-0"})(["float:left;border:1px solid ",";border-radius:50px;padding:8px 13px;line-height:10px;margin:5px;font-size:12px;&:hover{background:",";color:",";}"],(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?"#d9e0ff":"#f06529"}));t.ZP=function(){var e=(0,o.useStaticQuery)("550521386");return r.createElement("section",{style:{overflow:"auto"}},e.allMarkdownRemark.group.map((function(e){return r.createElement(c,{key:e.fieldValue,to:"/blog/tags/"+i()(e.fieldValue)+"/","aria-label":e.totalCount+" posts tagged with "+e.fieldValue},e.fieldValue,", ",e.totalCount)})))}},8114:function(e,t,a){"use strict";var r=a(7294),n=a(3494).default.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"sc-ujewmm-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet}));t.Z=function(e){var t=e.content,a=e.aside;return r.createElement(n,null,r.createElement("section",{className:"layout__content"},t&&t),r.createElement("section",{className:"layout__aside"},r.createElement("aside",{className:"sticky__aside"},a&&a)))}},3628:function(e){e.exports=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},5502:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(1597),o=a(8159),l=a(740),i=a(450),c=a(1510);t.default=function(){var e=(0,n.useStaticQuery)("1048528189");return r.createElement(o.Z,null,r.createElement(l.Z,{title:"Blog | Atiq Israk"}),r.createElement(c.Z,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.createElement(i.Z,{key:t.id,slug:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,tags:t.frontmatter.tags,readtime:t.timeToRead,excerpt:t.excerpt})}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-8bf95db0079ff440d790.js.map