"use strict";(self.webpackChunkatiq_israk=self.webpackChunkatiq_israk||[]).push([[759],{7408:function(e,t,a){var n=a(7294),r=a(7606);t.Z=function(e){var t=e.baseSlugUrl,a=e.title,l="https://facebook.com/sharer/sharer.php?u="+t,i='http://twitter.com/share?text="'+a+'" - &url='+t,o="http://www.reddit.com/submit?url="+t+"&title="+a;return n.createElement("div",{className:"blog__social-share"},n.createElement("a",{"aria-label":"share on facebook",rel:"noopener norefferer",target:"__blank",href:l},n.createElement(r.G,{style:{fontSize:24},icon:["fab","facebook"]})),n.createElement("a",{"aria-label":"share on twitter",rel:"noopener norefferer",target:"__blank",href:i},n.createElement(r.G,{style:{fontSize:24},icon:["fab","twitter"]})),n.createElement("a",{"aria-label":"share on reddit",rel:"noopener norefferer",target:"__blank",href:o},n.createElement(r.G,{style:{fontSize:24},icon:["fab","reddit"]})))}},8114:function(e,t,a){var n=a(7294),r=a(3494).default.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"sc-ujewmm-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet}));t.Z=function(e){var t=e.content,a=e.aside;return n.createElement(r,null,n.createElement("section",{className:"layout__content"},t&&t),n.createElement("section",{className:"layout__aside"},n.createElement("aside",{className:"sticky__aside"},a&&a)))}},6844:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=a(8159),l=a(740),i=a(6814),o=a(2708),c=a(4220),m=a(1436),s=a(7408),u=a(8114),f=a(3494),d=f.default.h4.withConfig({displayName:"case-studystyle__InfoTitle",componentId:"sc-1hed9ni-0"})(["color:",";display:flex;width:100%;justify-content:center;align-items:center;text-align:center;font-weight:600;font-size:16px;margin:15px 0;::after{content:'';border-top:1px solid;margin:0 20px 0 10px;flex:1 0 20px;}"],(function(e){return e.theme.primaryColor})),p=f.default.section.withConfig({displayName:"case-studystyle__CaseStudyWrapper",componentId:"sc-1hed9ni-1"})(["margin-top:100px;margin-bottom:100px;li{margin:5px 0;}.case__title{margin-bottom:50px;h1{margin:0;line-height:70px;}.case__links{margin:0;}}.case__info{margin-bottom:70px;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;@media ","{grid-template-columns:0.6fr 1fr;}@media ","{grid-template-columns:1fr;}}.case__iframe-container{width:100%;margin:10px 0;}h1{font-size:1.8rem;margin-bottom:50px;}h2,h3,h4,h5,h6{margin:20px 0;color:",";}"],(function(e){return e.theme.media.fablet}),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.primaryColor})),g=function(e){var t=e.data,a="https://atiqisrak.github.io"+t.markdownRemark.fields.slug,f=t.markdownRemark.frontmatter,g=f.info.links&&n.createElement("div",null,n.createElement(d,null,"Links & Resources"),n.createElement("ul",null,f.info.links.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e[1]},e[0]))}))));return n.createElement(r.Z,null,n.createElement(l.Z,{slug:t.markdownRemark.fields.slug,title:f.title}),n.createElement(p,null,n.createElement(i.Z,{className:"case__title",justify:"space-between",align:"center"},n.createElement("h1",null,f.title),n.createElement(m.f5,{className:"case__links"},n.createElement(c.Z,{target:"__blank",as:"a",href:f.demo},"Live Demo"),n.createElement(c.h,{label:"github",icon:["fab","github"],href:f.src}))),n.createElement("section",{className:"case__info"},n.createElement("div",null,n.createElement("aside",null,n.createElement(d,null,"Idea"),n.createElement("p",null,f.info.idea)),n.createElement("aside",null,n.createElement(d,null,"Core Technologies"),n.createElement("ul",null,f.info.tech.map((function(e,t){return n.createElement("li",{key:t},e)})))),g),n.createElement("div",{className:"case__iframe-container"},n.createElement(o.Z,{src:f.iframe}))),n.createElement(u.Z,{content:n.createElement("article",{className:"markdown-content",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),aside:n.createElement("div",null,n.createElement("h4",null,"Share on"),n.createElement(s.Z,{baseSlugUrl:a,title:f.title}))})))}}}]);
//# sourceMappingURL=component---src-templates-case-study-js-f7cb0604c060f36a8008.js.map