"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[7875],{87217:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return u}});var o,a=n(87462),r=n(63366),i=(n(15007),n(64983)),d=n(91515),m=["components"],l={},s=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:l},c=d.Z;function u(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.mdx)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"theme-development-workflow"},"Theme development workflow"),(0,i.mdx)("h2",{id:"enable-development-mode"},"Enable development mode"),(0,i.mdx)("p",null,"In the installation directory, run:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"bin/magento deploy:mode:set developer\n")),(0,i.mdx)("p",null,"See:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html"},"About application modes")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/config-cli.html"},"Get started with command-line configuration"))),(0,i.mdx)(s,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"To check the current mode of your instance, in the root directory, run: ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento deploy:mode:show"),"."),(0,i.mdx)("h3",{id:"create-basic-theme-files"},"Create basic theme files"),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<magento_root>/app/design/frontend/<Your_Vendor>/<your_theme>")," directory, create the following files:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"theme.xml")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"registration.php")),(0,i.mdx)("li",{parentName:"ul"},"(optionally) ",(0,i.mdx)("inlineCode",{parentName:"li"},"composer.json"))),(0,i.mdx)("p",null,"For details, see ",(0,i.mdx)("a",{parentName:"p",href:"create-storefront.md"},"Create a new storefront theme")),(0,i.mdx)("h3",{id:"apply-the-theme"},"Apply the theme"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"In the Admin Panel, go to ",(0,i.mdx)("strong",{parentName:"li"},"CONTENT")," > ",(0,i.mdx)("strong",{parentName:"li"},"Design")," > ",(0,i.mdx)("strong",{parentName:"li"},"Configuration")),(0,i.mdx)("li",{parentName:"ol"},"Find the record corresponding to your store view and click ",(0,i.mdx)("strong",{parentName:"li"},"Edit"),"."),(0,i.mdx)("li",{parentName:"ol"},"In the ",(0,i.mdx)("strong",{parentName:"li"},"Applied Theme")," drop-down, select your newly created theme."),(0,i.mdx)("li",{parentName:"ol"},"Click ",(0,i.mdx)("strong",{parentName:"li"},"Save Configuration"),".")),(0,i.mdx)("p",null,"For details, see ",(0,i.mdx)("a",{parentName:"p",href:"apply-storefront.md"},"Apply and configure a storefront theme")),(0,i.mdx)("h3",{id:"choose-less-compilation-mode"},"Choose LESS compilation mode"),(0,i.mdx)("h4",{id:"grunt-recommended"},"Grunt (recommended)"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../tools/grunt.md"},"Setup Grunt")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../css/debug.md#add-themes-to-grunt-configuration"},"Add the theme to Grunt configuration")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../css/debug.md#track-changes-using-grunt"},"Track changes"))),(0,i.mdx)("h4",{id:"client-side-compilation"},"Client-side compilation"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"../css/preprocess.md#client-side-less-compilation"},"CSS preprocessing#client-side compilation mode")),(0,i.mdx)("h4",{id:"server-side-compilation-default"},"Server-side compilation (default)"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"../css/preprocess.md#server-side-less-compilation"},"CSS preprocessing server-side compilation mode")),(0,i.mdx)("h4",{id:"custom-preprocessor"},"Custom preprocessor"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"../css/custom-preprocessor/index.md"},"Using custom CSS preprocessor")),(0,i.mdx)("h3",{id:"create-your-styles"},"Create your styles"),(0,i.mdx)("p",null,"See:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../css/quickstart/index.md"},"Quick start guide to working with styles")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../css/index.md"},"All about styles in themes"))),(0,i.mdx)("h3",{id:"debug"},"Debug"),(0,i.mdx)("p",null,"See:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"debug.md"},"Locate the CSS/Less file you need to change")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../css/debug.md#css-source-maps"},"CSS source maps")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../css/debug.md#track-changes-using-grunt"},"Track changes using Grunt"))),(0,i.mdx)("h3",{id:"clean-cache-andor-static-files"},"Clean cache and/or static files"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Certain changes in styles require cleaning previously pre-processed and published static view files. Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"grunt clean <theme>")," or manually clear the ",(0,i.mdx)("inlineCode",{parentName:"p"},"pub/static")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"var/view_preprocessed")," directories. Do this after any changes in server-side compilation mode. For the client-side or Grunt compilation, see ",(0,i.mdx)("a",{parentName:"p",href:"../caching.md#clean-static-files"},"Clean static files")," for details.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Changes in layout and templates requires cleaning cache. See ",(0,i.mdx)("a",{parentName:"p",href:"../caching.md#clean-cache"},"Clean cache")," for details."))),(0,i.mdx)("h3",{id:"make-sure-that-the-same-styles-are-delivered-to-production-optional"},"Make sure that the same styles are delivered to production (optional)"),(0,i.mdx)("p",null,"When you finish developing and your styles are ready to go to production, you can configure your Grunt/Gulp less compiler to minify compiled code, disable source maps generation and then copy the compiled files to ",(0,i.mdx)("inlineCode",{parentName:"p"},"/app/design/frontend/<Vendor>/<theme>/web/css")," directory next to source files. They will be used in static content deploy instead of running backend compilation (and static content deployment process will run faster)."),(0,i.mdx)("h3",{id:"switch-to-production-mode"},"Switch to production mode"),(0,i.mdx)("p",null,"In the installation directory, run:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"bin/magento deploy:mode:set production\n")),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/setup/application-modes.html#production-mode"},"application modes")," for details."),(0,i.mdx)("h3",{id:"deploy-static-content"},"Deploy static content"),(0,i.mdx)("p",null,"To publish your static files to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"pub/static")," directory when your instance is set to production mode, ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/static-view/static-view-file-deployment.html"},"run the static content deployment tool"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-themes-workflow-md-d0de152dd6b69434beb3.js.map