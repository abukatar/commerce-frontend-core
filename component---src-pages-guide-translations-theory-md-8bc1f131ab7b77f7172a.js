"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[2660],{66930:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return p}});var n=t(87462),i=t(63366),m=(t(15007),t(64983)),l=t(91515),r=["components"],d={},o={_frontmatter:d},s=l.Z;function p(e){var a=e.components,t=(0,i.Z)(e,r);return(0,m.mdx)(s,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"theme-strings"},"Theme strings"),(0,m.mdx)("p",null,"This topic describes how to add theme strings so that the i18n tool can collect and add the strings to the dictionary."),(0,m.mdx)("p",null,"Your custom theme may contain new strings that are not present in out-of-the-box themes.\nTo ensure your theme displays correctly with any language applied on a store view, verify the unique strings of your theme are added to the translation ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html"},"i18n tool")," when ",(0,m.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/localization.html"},"generating the dictionary"),".\nThen when a new ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/language-package"},"language package")," is created and used to translate a store view, all theme strings are also translated."),(0,m.mdx)("h2",{id:"strings-added-in-phtml-templates"},"Strings added in .phtml templates"),(0,m.mdx)("p",null,"To ensure that your new string is added to the dictionary and translated, use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"__('<your_string>')")," method when outputting a string in a ",(0,m.mdx)("a",{parentName:"p",href:"../templates/index.md"},".phtml template"),"."),(0,m.mdx)("p",null,"For example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"<?= __('Create Backup') ?>\n")),(0,m.mdx)("p",null,"If your string contains a variable, to add a placeholder for this variable in the dictionary, use syntax similar to the following:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"<?= __('Hello %1', $yourVariable) ?>\n")),(0,m.mdx)("p",null,"In this example, the ",(0,m.mdx)("em",{parentName:"p"},"'Hello %1'")," string is added to the dictionary when the i18n tool is run."),(0,m.mdx)("h2",{id:"strings-added-in-email-templates"},"Strings added in email templates"),(0,m.mdx)("p",null,"If your theme contains ",(0,m.mdx)("a",{parentName:"p",href:"../templates/email.md"},"custom email templates"),", their strings can be added to the dictionary as well.\nTo add the email template strings to the dictionary, use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"{{trans}}")," ",(0,m.mdx)("a",{parentName:"p",href:"../templates/email.md#localization"},"directive"),"."),(0,m.mdx)("p",null,"Custom email templates ",(0,m.mdx)("a",{parentName:"p",href:"../templates/email.md#admin-based-customizations"},"added using the Admin panel")," are not stored in the file system, and their strings are not added to the dictionary."),(0,m.mdx)("p",null,"To ensure that your new string is added to the dictionary and translated, use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"{{trans}}")," ",(0,m.mdx)("a",{parentName:"p",href:"../templates/email.md#localization"},"directive")," when outputting a string in an ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Customer/view/frontend/email/account_new.html"},"email template"),"."),(0,m.mdx)("p",null,"For example:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"When only a string is added in the email template:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'{{trans "Lorem Ipsum is simply dummy text of the printing"}}\n'))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"When only a string is added with a variable value in the email template:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'{{trans "%items items" items="numItems"}}\n')))),(0,m.mdx)("h2",{id:"strings-added-in-ui-component-templates"},"Strings added in UI component templates"),(0,m.mdx)("p",null,"To ensure that the text you add in ",(0,m.mdx)("inlineCode",{parentName:"p"},".html")," templates of UI components is added to the dictionary, mark the text using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"i18n")," custom binding. The following code samples illustrate how to use custom bindings:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"When a string is added in the scope of an HTML element, both of the following examples result in the same output:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<span data-bind=\"i18n: 'Sign In'\"></span>\n")),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<span translate=\"'Sign In'\"></span>\n"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"When a string is added with no binding to an HTML element, both of the following examples result in the same output:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"\x3c!-- ko i18n: 'You have no items in your shopping cart.' --\x3e\x3c!-- /ko --\x3e\n")),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<translate args=\"'You have no items in your shopping cart.'\"/>\n"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"When a string is added as an attribute of an HTML element:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},'<input type="text" data-bind="attr: {placeholder: $t(\'First Name\')}" />\n')))),(0,m.mdx)("h2",{id:"strings-added-in-ui-components-configuration-files"},"Strings added in UI components configuration files"),(0,m.mdx)("p",null,"To ensure that the text you add in UI components configuration ",(0,m.mdx)("inlineCode",{parentName:"p"},".xml")," files is added to the dictionary, use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"translate")," attribute. Set the attribute to true for the corresponding element: ",(0,m.mdx)("inlineCode",{parentName:"p"},"translate=true")),(0,m.mdx)("p",null,"In this example, the ",(0,m.mdx)("em",{parentName:"p"},"Delete")," string is added to the dictionary when the i18n tool is run:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<item name="label" xsi:type="string" translate="true">Delete</item>\n')),(0,m.mdx)("p",null,"Translated strings that originate from ",(0,m.mdx)("inlineCode",{parentName:"p"},".xml")," files will not render unless they are called with a ",(0,m.mdx)("inlineCode",{parentName:"p"},"__(<variable>)")," method in ",(0,m.mdx)("inlineCode",{parentName:"p"},".php")," files. In this example, you would use a call similar to the following to display the translated ",(0,m.mdx)("em",{parentName:"p"},"Delete")," string."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"__($this->config->getData('label'))\n")),(0,m.mdx)("h2",{id:"strings-added-in-underscore-templates"},"Strings added in Underscore templates"),(0,m.mdx)("p",null,"To ensure that the text you add in ",(0,m.mdx)("inlineCode",{parentName:"p"},".html")," Underscore templates is collected by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"i18n")," tool, use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"_.i18n('')")," Underscore function."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"When a string is added to the template:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<%= _.i18n('Hello') %>\n"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"If the string contains a variable, use the variable placeholder:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"<%= _.i18n('Hello %1').replace('%1', yourVariable) %>\n")),(0,m.mdx)("p",{parentName:"li"},"In this example, the ",(0,m.mdx)("em",{parentName:"p"},"'Hello %1'")," string is added to the dictionary when the i18n tool is run."))),(0,m.mdx)("h2",{id:"strings-added-in-js-files"},"Strings added in .js files"),(0,m.mdx)("p",null,"To ensure that the text you add in a ",(0,m.mdx)("inlineCode",{parentName:"p"},".js")," file is collected by the i18n tool and added to the dictionary:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Link the ",(0,m.mdx)("inlineCode",{parentName:"p"},"mage/translate")," library:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"define (['jquery', 'mage/translate'], function ($, $t) {...});\n"))),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("p",{parentName:"li"},"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"$.mage.__('')")," function when adding a string:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$.mage.__('<string>');\n")),(0,m.mdx)("p",{parentName:"li"},"or"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$t('<string>');\n")),(0,m.mdx)("p",{parentName:"li"},"If your string contains a variable, to add a placeholder for this variable to the string stored in the dictionary, use the following syntax:"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$.mage.__('Hello %1').replace('%1', yourVariable);\n")),(0,m.mdx)("p",{parentName:"li"},"or"),(0,m.mdx)("pre",{parentName:"li"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"$t('Hello %1').replace('%1', yourVariable);\n")))),(0,m.mdx)("p",null,"In this example, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"'Hello %1'")," string is added to the dictionary when the i18n tool is run."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-translations-theory-md-8bc1f131ab7b77f7172a.js.map