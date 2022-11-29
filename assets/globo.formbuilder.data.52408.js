Globo.FormBuilder.forms[52408] = {"header":{"active":false,"title":"Contact us","description":"Leave your message and we'll get back to you shortly."},"elements":[{"default":"groupV1","description":"","elements":[{"id":"unique_text","type":"name","label":"Name","placeholder":"","required":true,"columnWidth":100,"parentId":300235}],"id":"group-300235","label":"Basic info","type":"groupV1","columnWidth":50,"gid":300235},{"default":"groupV1","description":"","elements":[{"id":"unique_text_1","type":"email","label":"Email","placeholder":"","required":true,"columnWidth":100,"parentId":300237}],"id":"group-300237","label":"Basic info","type":"groupV1","columnWidth":50,"gid":300237},{"default":"groupV1","description":"","elements":[{"id":"unique_text_2","type":"number","label":"Phone Number (Numbers Only)","placeholder":"","required":true,"columnWidth":100,"parentId":300239,"minCharacter":10,"maxCharacter":11}],"id":"group-300239","label":"Basic info","type":"groupV1","columnWidth":100,"gid":300239},{"default":"groupV1","description":"","elements":[{"id":"unique_textarea_default","type":"textarea","label":"Message","placeholder":"","required":true,"columnWidth":100,"parentId":300243}],"id":"group-300243","label":"Basic info","type":"groupV1","columnWidth":100,"gid":300243},{"default":"groupV1","description":"","elements":[],"id":"group-300241","label":"Basic info","type":"groupV1","columnWidth":33.33,"gid":300241}],"add-elements":null,"footer":{"description":"","previousText":"Previous","nextText":"Next","submitText":"Send","submitFullWidth":false,"submitAlignment":"left"},"mail":{"admin":{"email":"info@vitalsolutions.com","enableDynamicEmail":false,"dynamicEmailId":"","subject":"{unique_text} sent a message to vitaloxide.com.","content":"<table style=\"width: 100%;\">\r\n<tbody>\r\n<tr>\r\n<td class=\"logo\" style=\"border-bottom: 4px solid #333333; padding: 7px 0;\" colspan=\"2\" align=\"center\">{{unique_text}} sent a message to Vital Oxide.\r\n<pre class=\"highlight\">&nbsp;<\/pre>\r\n<pre class=\"highlight\"><code><\/code><\/pre>\r\n<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\"space_footer\" style=\"padding: 0;\" colspan=\"2\">&nbsp;<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong><span style=\"color: #626262; background-color: #fcfcfc;\">Name:<\/span><\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">{{unique_text}}<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong>Email:<\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">{{unique_text_1}}<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong>Phone Number:<\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">{{unique_text_2}}<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong>Message:<\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">&nbsp;{{unique_textarea_default}}<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\"space_footer\" style=\"padding: 0;\" colspan=\"2\">&nbsp;<\/td>\r\n<\/tr>\r\n<tr>\r\n<td style=\"border-top: 4px solid #333333; text-align: center;\" colspan=\"2\">&nbsp;<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>","islimitWidth":false,"maxWidth":"1200","useCustomSMTP":false,"smtp":"","port":"465","encryption":"ssl","username":"","password":"","enableAlias":false,"alias":"","enableFromName":false,"fromName":"","enableReplyTo":false,"replyTo":""},"customer":{"enable":true,"emailType":"elementEmail","emailId":"unique_text_1","subject":"Message Received by Vital Oxide","content":"<p>Your message was received. We will get back to you shortly. Thank you.<\/p>\r\n<p><strong>Your Message:<\/strong><\/p>\r\n<p>{{unique_textarea_default}}<\/p>\r\n<p>&nbsp;<\/p>","islimitWidth":false,"maxWidth":"1200"}},"appearance":{"layout":"default","width":1200,"style":"classic","mainColor":"#EB1256","headingColor":"#000","labelColor":"#000","descriptionColor":"#6c757d","optionColor":"#000","background":"none","backgroundColor":"#FFF","backgroundImage":"","backgroundImageAlignment":"middle","floatingIcon":"<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"envelope\" class=\"svg-inline--fa fa-envelope fa-w-16\" role=\"img\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z\"><\/path><\/svg>","floatingText":"","displayOnAllPage":false,"position":"bottom right"},"reCaptcha":{"enable":false},"errorMessage":{"required":"Required","invalid":"Invalid","invalidName":"Invalid name","invalidEmail":"Invalid email","invalidURL":"Invalid url","invalidPhone":"Invalid phone","invalidNumber":"Invalid number","invalidPassword":"Invalid password","confirmPasswordNotMatch":"Confirmed password doesn't match","customerAlreadyExists":"Customer already exists","fileSizeLimit":"File size limit","fileNotAllowed":"File not allowed","requiredCaptcha":"Required captcha","otherError":"Something went wrong, please try again"},"afterSubmit":{"action":"hideForm","message":"Thank you for your message. We will get back to you shortly.","redirectUrl":""},"integration":{"shopify":{"createAccount":false,"ifExist":"returnError","sendEmailInvite":false,"acceptsMarketing":false,"integrationElements":{}},"mailChimp":{"loading":"","enable":false,"list":false,"integrationElements":{}},"klaviyo":{"loading":"","enable":false,"list":false,"integrationElements":{}},"zapier":{"enable":false,"webhookUrl":""}}};
Globo.FormBuilder.forms[52408].v1_id = 4040;
Globo.FormBuilder.forms[4040] = {"header":{"active":false,"title":"Contact us","description":"Leave your message and we'll get back to you shortly."},"elements":[{"default":"groupV1","description":"","elements":[{"id":"unique_text","type":"name","label":"Name","placeholder":"","required":true,"columnWidth":100,"parentId":300235}],"id":"group-300235","label":"Basic info","type":"groupV1","columnWidth":50,"gid":300235},{"default":"groupV1","description":"","elements":[{"id":"unique_text_1","type":"email","label":"Email","placeholder":"","required":true,"columnWidth":100,"parentId":300237}],"id":"group-300237","label":"Basic info","type":"groupV1","columnWidth":50,"gid":300237},{"default":"groupV1","description":"","elements":[{"id":"unique_text_2","type":"number","label":"Phone Number (Numbers Only)","placeholder":"","required":true,"columnWidth":100,"parentId":300239,"minCharacter":10,"maxCharacter":11}],"id":"group-300239","label":"Basic info","type":"groupV1","columnWidth":100,"gid":300239},{"default":"groupV1","description":"","elements":[{"id":"unique_textarea_default","type":"textarea","label":"Message","placeholder":"","required":true,"columnWidth":100,"parentId":300243}],"id":"group-300243","label":"Basic info","type":"groupV1","columnWidth":100,"gid":300243},{"default":"groupV1","description":"","elements":[],"id":"group-300241","label":"Basic info","type":"groupV1","columnWidth":33.33,"gid":300241}],"add-elements":null,"footer":{"description":"","previousText":"Previous","nextText":"Next","submitText":"Send","submitFullWidth":false,"submitAlignment":"left"},"mail":{"admin":{"email":"info@vitalsolutions.com","enableDynamicEmail":false,"dynamicEmailId":"","subject":"{unique_text} sent a message to vitaloxide.com.","content":"<table style=\"width: 100%;\">\r\n<tbody>\r\n<tr>\r\n<td class=\"logo\" style=\"border-bottom: 4px solid #333333; padding: 7px 0;\" colspan=\"2\" align=\"center\">{{unique_text}} sent a message to Vital Oxide.\r\n<pre class=\"highlight\">&nbsp;<\/pre>\r\n<pre class=\"highlight\"><code><\/code><\/pre>\r\n<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\"space_footer\" style=\"padding: 0;\" colspan=\"2\">&nbsp;<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong><span style=\"color: #626262; background-color: #fcfcfc;\">Name:<\/span><\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">{{unique_text}}<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong>Email:<\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">{{unique_text_1}}<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong>Phone Number:<\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">{{unique_text_2}}<\/td>\r\n<\/tr>\r\n<tr style=\"background: #fcfcfc;\">\r\n<td style=\"width: 40%; padding: 0;\"><strong>Message:<\/strong><\/td>\r\n<td style=\"width: 60%; padding: 0;\">&nbsp;{{unique_textarea_default}}<\/td>\r\n<\/tr>\r\n<tr>\r\n<td class=\"space_footer\" style=\"padding: 0;\" colspan=\"2\">&nbsp;<\/td>\r\n<\/tr>\r\n<tr>\r\n<td style=\"border-top: 4px solid #333333; text-align: center;\" colspan=\"2\">&nbsp;<\/td>\r\n<\/tr>\r\n<\/tbody>\r\n<\/table>","islimitWidth":false,"maxWidth":"1200","useCustomSMTP":false,"smtp":"","port":"465","encryption":"ssl","username":"","password":"","enableAlias":false,"alias":"","enableFromName":false,"fromName":"","enableReplyTo":false,"replyTo":""},"customer":{"enable":true,"emailType":"elementEmail","emailId":"unique_text_1","subject":"Message Received by Vital Oxide","content":"<p>Your message was received. We will get back to you shortly. Thank you.<\/p>\r\n<p><strong>Your Message:<\/strong><\/p>\r\n<p>{{unique_textarea_default}}<\/p>\r\n<p>&nbsp;<\/p>","islimitWidth":false,"maxWidth":"1200"}},"appearance":{"layout":"default","width":1200,"style":"classic","mainColor":"#EB1256","headingColor":"#000","labelColor":"#000","descriptionColor":"#6c757d","optionColor":"#000","background":"none","backgroundColor":"#FFF","backgroundImage":"","backgroundImageAlignment":"middle","floatingIcon":"<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"envelope\" class=\"svg-inline--fa fa-envelope fa-w-16\" role=\"img\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z\"><\/path><\/svg>","floatingText":"","displayOnAllPage":false,"position":"bottom right"},"reCaptcha":{"enable":false},"errorMessage":{"required":"Required","invalid":"Invalid","invalidName":"Invalid name","invalidEmail":"Invalid email","invalidURL":"Invalid url","invalidPhone":"Invalid phone","invalidNumber":"Invalid number","invalidPassword":"Invalid password","confirmPasswordNotMatch":"Confirmed password doesn't match","customerAlreadyExists":"Customer already exists","fileSizeLimit":"File size limit","fileNotAllowed":"File not allowed","requiredCaptcha":"Required captcha","otherError":"Something went wrong, please try again"},"afterSubmit":{"action":"hideForm","message":"Thank you for your message. We will get back to you shortly.","redirectUrl":""},"integration":{"shopify":{"createAccount":false,"ifExist":"returnError","sendEmailInvite":false,"acceptsMarketing":false,"integrationElements":{}},"mailChimp":{"loading":"","enable":false,"list":false,"integrationElements":{}},"klaviyo":{"loading":"","enable":false,"list":false,"integrationElements":{}},"zapier":{"enable":false,"webhookUrl":""}}};
Globo.FormBuilder.forms[4040].v2_id = 52408;
