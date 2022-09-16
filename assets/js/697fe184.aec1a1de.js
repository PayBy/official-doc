"use strict";(self.webpackChunkdeveloper_official_site=self.webpackChunkdeveloper_official_site||[]).push([[3324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));n(8209);const i={sidebar_position:3,toc_max_heading_level:6},o="In-App SDK - Android",p={unversionedId:"Online Payment Integration/Checkout/inapp-sdk-android",id:"Online Payment Integration/Checkout/inapp-sdk-android",title:"In-App SDK - Android",description:"Payers will have the almost the same operation process for using In-APP and Paypage. The difference is that if the mobile client integrates the sdk, users will get a smoother experience when paying on the native page than a web page.",source:"@site/docs/Online Payment Integration/Checkout/inapp-sdk-android.md",sourceDirName:"Online Payment Integration/Checkout",slug:"/Online Payment Integration/Checkout/inapp-sdk-android",permalink:"/docs/Online Payment Integration/Checkout/inapp-sdk-android",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"iFrame paypage",permalink:"/docs/Online Payment Integration/Checkout/iframe-paypage"},next:{title:"In-App SDK - iOS",permalink:"/docs/Online Payment Integration/Checkout/inapp-sdk-ios"}},s={},l=[{value:"User experience",id:"user-experience",level:3},{value:"System interaction diagram",id:"system-interaction-diagram",level:3},{value:"SDK",id:"sdk",level:3},{value:"Term Definition",id:"term-definition",level:3},{value:"Add Dependencies",id:"add-dependencies",level:3},{value:"Step 1: Add Repositories",id:"step-1-add-repositories",level:4},{value:"Step 2: Add Library",id:"step-2-add-library",level:4},{value:"Step 3: Add Placeholder",id:"step-3-add-placeholder",level:4},{value:"Declare Permissions",id:"declare-permissions",level:3},{value:"Parameter Preparation",id:"parameter-preparation",level:3},{value:"How To Use",id:"how-to-use",level:3},{value:"Step 1: Generate IAPDeviceId",id:"step-1-generate-iapdeviceid",level:4},{value:"Step 2: Place An Order",id:"step-2-place-an-order",level:4},{value:"Step 3: Set The Payment Listener",id:"step-3-set-the-payment-listener",level:4},{value:"Step 4: Pay",id:"step-4-pay",level:4},{value:"Step 5: Get The Payment Result",id:"step-5-get-the-payment-result",level:4},{value:"Payment Result Code Description",id:"payment-result-code-description",level:4},{value:"Proguard-rules",id:"proguard-rules",level:3},{value:"Sample",id:"sample",level:3}],d={toc:l};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"in-app-sdk---android"},"In-App SDK - Android"),(0,r.kt)("p",null,"Payers will have the almost the same operation process for using ",(0,r.kt)("strong",{parentName:"p"},"In-APP")," and ",(0,r.kt)("strong",{parentName:"p"},"Paypage"),". The difference is that if the mobile client integrates the sdk, users will get a smoother experience when paying on the native page than a web page."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"user-experience"},"User experience"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When customers are ready to complete their payment, your mobile application creates a new order creation request."),(0,r.kt)("li",{parentName:"ol"},"The PayBy returns a URL that that redirects customers to a checkout."),(0,r.kt)("li",{parentName:"ol"},"Customers enter their payment details on the checkout and complete the transaction."),(0,r.kt)("li",{parentName:"ol"},"If the payment is completed, customers will be redirected to the merchant's success page.",(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"card-ue",src:n(93157).Z,width:"1481",height:"1000"})),(0,r.kt)("h3",{id:"system-interaction-diagram"},"System interaction diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"inappflow",src:n(9214).Z,width:"1125",height:"1957"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"sdk"},"SDK"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PayBy/PayBy-inApp-Android"},"Link")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"term-definition"},"Term Definition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IAPDeviceId: every device has its own unique deviceId"),(0,r.kt)("li",{parentName:"ul"},"IAPPartnerId: every merchant is assigned a partnerId while applying for the payment service"),(0,r.kt)("li",{parentName:"ul"},"IAPAppId: every app of a merchant is assigned an appId while applying for the payment service"),(0,r.kt)("li",{parentName:"ul"},"OrderToken: it contains order information"),(0,r.kt)("li",{parentName:"ul"},'IAPSign: first, generate a singString by arranging IAPDeviceId\u3001IAPPartnerId\u3001IAPAppId and OrderToken in order. The rules are as follows: String signString ="iapAppId="+iapAppId+ "&iapDeviceId=" + iapDeviceId+ "&iapPartnerId=" + iapPartnerId+"&token=" + token. Second,sign the signString with privateKey\uff0c and the encryption rules can be seen in the demo.')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"add-dependencies"},"Add Dependencies"),(0,r.kt)("p",null,"Use gradle to add dependencies,and also add manifestPlaceholders for downloading APK."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"step-1-add-repositories"},"Step 1: Add Repositories"),(0,r.kt)("p",null,"Add the Maven repositories address in ",(0,r.kt)("strong",{parentName:"p"},"build.gradle")," at the root directory ",(0,r.kt)("strong",{parentName:"p"},"project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"buildscript{\n    repositories {\n        google()\n        jcenter()\n        maven {\n            credentials {\n                username 'dev'\n                password 'dev@123'\n            }\n            url(\"http://nexus.payby.com/repository/android-release/\")\n        }  \n    }\n}\nallprojects {\n    repositories {\n        google()\n        jcenter()\n        maven {\n            credentials {\n                username 'dev'\n                password 'dev@123'\n            }\n            url(\"http://nexus.payby.com/repository/android-release/\")\n        }  \n    }\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"step-2-add-library"},"Step 2: Add Library"),(0,r.kt)("p",null,"if your project is AndroidX,please add the following code in the ",(0,r.kt)("strong",{parentName:"p"},"gradle.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"android.useAndroidX=true\nandroid.enableJetifier=true\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("strong",{parentName:"p"},"AndroidX")," library dependencies in ",(0,r.kt)("strong",{parentName:"p"},"build.gradle")," below the level of ",(0,r.kt)("strong",{parentName:"p"},"app module")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dependencies{\n    ...\n    def iap_version="2.0.6-RELEASE"\n    implementation "com.payby.android.module.iap:lib-iap-view:${iap_version}"\n}\n')),(0,r.kt)("p",null,"or ",(0,r.kt)("strong",{parentName:"p"},"Android Support")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dependencies{\n    ...\n    def iap_version="2.0.6-RELEASE"\n    implementation "com.payby.android.module.iap:lib-iap-view:${iap_version}"\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"step-3-add-placeholder"},"Step 3: Add Placeholder"),(0,r.kt)("p",null,'Add the manifestPlaceholders key-value pair. The key is "PACKAGENAME" and the value is the current application package name. When Android downloads files, you need to read and write through the FileProvider, and you need to assign the path of Fileprovider according to the ',(0,r.kt)("strong",{parentName:"p"},"applicationId"),". It also needs to support Java8 compilation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'android{\n    defaultConfig {\n        applicationId "com.payby.android.payment.iap.sample"\n        ...\n        manifestPlaceholders=[\n                PACKAGENAME:"com.payby.android.payment.iap.sample"\n        ]\n    }\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," if ",(0,r.kt)("strong",{parentName:"p"},"FileProvider")," has been used for your project, you need to add attribute ",(0,r.kt)("strong",{parentName:"p"},"android:authorities=${PACKAGENAME}")," at the node, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.payby.android.payment.iap.sample">\n    ...\n    <application>\n        ...\n        <provider\n            android:name="androidx.core.content.FileProvider"\n            android:authorities="${PACKAGENAME}"\n            android:exported="false"\n            android:grantUriPermissions="true">\n            <meta-data\n                android:name="android.support.FILE_PROVIDER_PATHS"\n                android:resource="@xml/file_paths" />\n        </provider>\n        ...\n    </application>\n</manifest>\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"declare-permissions"},"Declare Permissions"),(0,r.kt)("p",null,"Declare the necessary permissions in manifest, including:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"INTERNET: it allows an application to download files."),(0,r.kt)("li",{parentName:"ol"},"Read/Write SD card: it allows an application to read from / write to external storage."),(0,r.kt)("li",{parentName:"ol"},"Install Package: it allows an application to install packages.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.payby.android.payment.iap.sample">\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>\n    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>\n    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>\n    <application\n       ...\n    </application>\n\n</manifest>\n')),(0,r.kt)("p",null,"if your project targetVersion is 30, you also need declare the following permission in the manifest. "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"parameter-preparation"},"Parameter Preparation"),(0,r.kt)("p",null,"The payment parameter descriptions and methods to get are as follows. The following parameters can be used to construct a ",(0,r.kt)("strong",{parentName:"p"},"PayTask")," object, which describes a payment task, by calling ",(0,r.kt)("strong",{parentName:"p"},"pay (PayTask task, Environment env)")," method in ",(0,r.kt)("strong",{parentName:"p"},"PbManager")," to complete payment."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Descriptioin"),(0,r.kt)("th",{parentName:"tr",align:null},"How to get"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iapDeviceId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identification of device"),(0,r.kt)("td",{parentName:"tr",align:null},"It is from the api in IAP SDK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iapPartnerId"),(0,r.kt)("td",{parentName:"tr",align:null},"partnerId"),(0,r.kt)("td",{parentName:"tr",align:null},"It is assigned when a merchant applies for the payment service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"orderToken"),(0,r.kt)("td",{parentName:"tr",align:null},"After placing an order, you can get it from the response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iapAppId"),(0,r.kt)("td",{parentName:"tr",align:null},"appId"),(0,r.kt)("td",{parentName:"tr",align:null},"It is assigned when a merchant applies for the payment service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iapSign"),(0,r.kt)("td",{parentName:"tr",align:null},"Signature information after signing iapDeviceId, iapPartnerId, token, iapAppId"),(0,r.kt)("td",{parentName:"tr",align:null},"It is generated by signing the signature string according to the signing rules. For the signing string signing sequence and rules, see ",(0,r.kt)("em",{parentName:"td"},"Term Definition"))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"how-to-use"},"How To Use"),(0,r.kt)("h4",{id:"step-1-generate-iapdeviceid"},"Step 1: Generate IAPDeviceId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// If your payment page is Activity, just pass in this, but if it is Fragment, you should pass in getActivity()\nPbManager manager = PbManager.getInstance(this);\nString mIapDeviceId= manager.getIAPDeviceID();\n")),(0,r.kt)("p",null,"Note: When placing an order and paying for the order, the IapDeviceId must not be different."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"step-2-place-an-order"},"Step 2: Place An Order"),(0,r.kt)("p",null,"You should place an order by the server yourself. After that you can get information about token and iapSign from the response."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"step-3-set-the-payment-listener"},"Step 3: Set The Payment Listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// register the payment callback listener\nmanager.onPayResultListener = this;\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"step-4-pay"},"Step 4: Pay"),(0,r.kt)("p",null,"Construct a ",(0,r.kt)("strong",{parentName:"p"},"PayTask")," object according to the parameters prepared before. It should be noted that the order of the parameters must be as follows: the first parameter is ",(0,r.kt)("strong",{parentName:"p"},"token"),", which represents the order token; the second parameter is ",(0,r.kt)("strong",{parentName:"p"},"iapDeviceId"),", which is used to distinguish the unique identifier of different devices ; The third parameter ",(0,r.kt)("strong",{parentName:"p"},"iapPartnerId")," is used to distinguish the id of different merchants; the fourth parameter is ",(0,r.kt)("strong",{parentName:"p"},"iapSign"),", which represents the signature information, which is the signature information generated after the token, iapDeviceId, iapPartnerId, iapAppId are signed by the private key; the fifth parameter It is ",(0,r.kt)("strong",{parentName:"p"},"iapAppId"),", used to distinguish the id of different apps of the merchant.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Then initiate the payment by calling its pay method through the initialized PbManager object. The first parameter is the PayTask type, the second parameter is an Enum type, the value includes Environment.DEV\u3001Environment.UAT and Environment.PRO."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Environment.DEV"),":the environment for developing and testing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Environent.UAT"),":the environment for customer debuging"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Environment.PRO"),":the environment for product online")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//dev environment\nPayTask task = PayTask.with(mToken, mIapDeviceId, mPartnerId, mSign, mIapAppId);\nmanager.pay(task, Environment.DEV);    \n//uat environment\nPayTask task = PayTask.with(mToken, mIapDeviceId, mPartnerId, mSign, mIapAppId);\nmanager.pay(task, Environment.UAT);    \n//product environment online\nPayTask task = PayTask.with(mToken, mIapDeviceId, mPartnerId, mSign, mIapAppId);\nmanager.pay(task, Environment.PRO);    \n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"step-5-get-the-payment-result"},"Step 5: Get The Payment Result"),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("strong",{parentName:"p"},"OnPayResultListener")," interface and rewrite its ",(0,r.kt)("strong",{parentName:"p"},"onGetPayState(String result)")," method to get the payment result."),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"payment-result-code-description"},"Payment Result Code Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SUCCESS"),": the payee has received the payment successfully, and the entire payment process for the order is completed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FAIL"),": payment failed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PAID"),": the payer paid successfully. Wait for the payee to receive the payment, at the same time, you can also query and track the payment status of the order by order NO."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PAYING"),": processing. Wait for the payment process to complete and return the final payment result.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"proguard-rules"},"Proguard-rules"),(0,r.kt)("p",null,"-keep class com.payby.android.iap.domain.value*",(0,r.kt)("em",{parentName:"p"},"{ "),"; }"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"Taking the integration of AndroidX dependency library as an example, the complete payment process sample code is as follows. It should be noted that in the actual development process, you need to make your order payment interface to implement the ",(0,r.kt)("strong",{parentName:"p"},"OnPayResultListener")," interface, the order payment interface can be an Activity or a Fragment. Here MainActivity will be used as an example to simulate the payment process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'public class MainActivity extends AppCompatActivity implements OnPayResultListener {\n  EditText et_sign, et_token, et_id, et_deviceId,et_app_id;\n  Button pay;\n  private PbManager manager;\n  private String mToken;  //tokenUrl   \n  private String mPartnerId;  //partnerId\n  private String mSign;\n  private String mIapDeviceId;\n  private String mIapAppId;\n\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.activity_main);\n    pay = findViewById(R.id.pay);\n    et_sign = findViewById(R.id.et_sign);\n    et_token = findViewById(R.id.et_token);\n    et_id = findViewById(R.id.et_id);\n    et_deviceId = findViewById(R.id.et_deviceId);\n    et_app_id = findViewById(R.id.et_app_id);\n  \n   // Step 1: get PbManager and generate IapDeviceId\n    manager = PbManager.getInstance(this);\n\n   //Step 2: generate the iapDeviceId\n    String iapDeviceID = manager.getIAPDeviceID();\n    et_deviceId.setText(iapDeviceID);\n\n   // Step 3: set the payment result listener\n    manager.onPayResultListener = this;\n    pay.setOnClickListener(new View.OnClickListener() {\n      @Override\n      public void onClick(View v) {\n        startPay();\n      }\n    });\n\n  }\n \n  //Step 4: start to pay\n  private void startPay() {\n    mToken = et_token.getText().toString().trim();\n    mPartnerId = et_id.getText().toString().trim();\n    mIapDeviceId = et_deviceId.getText().toString().trim();\n    mSign = et_sign.getText().toString().trim();\n    mAppId = et_app_id.getText().toString().trim();\n    if (TextUtils.isEmpty(mToken)\n        || TextUtils.isEmpty(mPartnerId)\n        || TextUtils.isEmpty(mIapDeviceId)\n        || TextUtils.isEmpty(mSign)\n        || TextUtils.isEmpty(mAppId)) {\n      Toast.makeText(this, "parameter should not be null", Toast.LENGTH_SHORT).show();\n      return;\n    }\n    // support DEV/UAT/PRO \n    PayTask task = PayTask.with(mToken, mIapDeviceId, mPartnerId, mSign, mAppId);\n    manager.pay(task, Environment.UAT);\n    //also,you can use the other method to pay\n    //manager.payWithOrderCallback(this);\n    // after calling this method,the loading dialog will not be canceled until gettting the paying app list.you need implement the method onOrder,in the method,you can pass the order information to SDK by successCallback.\n  }\n\n  @Override\n  public void onGetPayState(String s) {\n       // Step 5: get the payment result and do different processing according to different payment result status\n    if (TextUtils.equals(result, "SUCCESS")) {\n      // Successful, the payment has been received, the transaction is over\n    } else if (TextUtils.equals(result, "PAID")) {\n      // The payer has successfully paid and is waiting for the payee to receive the payment\n    } else if (TextUtils.equals(result, "PAYING")) {\n      // The payment is being processed\n    } else if (TextUtils.equals(result, "FAIL")) {\n      // Payment failed\n    }else{\n      // Other unknown errors\n    }\n  }\n  \n    @Override\n  public void onGetProtocolState(String protocolState) {\n    //PROTOCOL-SUCCESS,PROTOCOL-FAIL\n    if (TextUtils.equals(protocolState, "PROTOCOL-SUCCESS")) {\n      //success......\n    } else if (TextUtils.equals(protocolState, "PROTOCOL-FAIL")) {\n      //fail.....\n    }\n  }\n\n  @Override\n  public void onOrder(OnOrderSuccessCallback onOrderSuccessCallback, OnOrderFailCallback onOrderFailCallback) {\n  //Tips:if you call method manager.pay(task,environment),do nothing here.   \n  // if call method manager.payWithOrderCallback(this),you can do the following codes show.\n  // step1:in here,you need get order information by placing order.\n  // step2:construct a PayTask with the order information\n  // step3: if success,pass the order information to sdk with OnOrderSuccessCallback,if fail,just notify SDK the state with OnOrderFailCallback\n // the following code simulates the process of placeing order and pass the parameter to sdk\n    mToken = et_token.getText().toString().trim();\n    mPartnerId = et_id.getText().toString().trim();\n    mIapDeviceId = et_deviceId.getText().toString().trim();\n    mSign = et_sign.getText().toString().trim();\n    mAppId = et_app_id.getText().toString().trim();\n    if (TextUtils.isEmpty(mToken)\n        || TextUtils.isEmpty(mPartnerId)\n        || TextUtils.isEmpty(mIapDeviceId)\n        || TextUtils.isEmpty(mSign)\n        || TextUtils.isEmpty(mAppId)) {\n      Toast.makeText(this, "parameter should not be null", Toast.LENGTH_SHORT).show();\n      return;\n    }\n\n    // \n//    String signString ="iapAppId="+mAppId+ "&iapDeviceId=" + mIapDeviceId+ "&iapPartnerId=" + mPartnerId+"&token=" + mToken ;\n//    String sign = Base64.encode(\n//        RsaUtils.sign(\n//            signString, StandardCharsets.UTF_8, RsaUtils.getPrivateKey(privateKay)));\n\n    if (!TextUtils.isEmpty(mToken)) {\n      String signString = "iapAppId=" + mAppId + "&iapDeviceId=" + mIapDeviceId + "&iapPartnerId=" + mPartnerId + "&token=" + mToken;\n\n      String sign = Base64.encode(\n\n          RsaUtils.sign(\n              signString, StandardCharsets.UTF_8, RsaUtils.getPrivateKey(keyDev)));\n      PayTask task = PayTask.with(mToken, mIapDeviceId, mPartnerId, sign, mAppId);\n      new Handler().postDelayed(new Runnable() {\n        @Override\n        public void run() {\n          onOrderSuccessCallback.onSuccess(task, Environment.DEV);\n        }\n      }, 3000);\n    } else {\n      new Handler().postDelayed(new Runnable() {\n        @Override\n        public void run() {\n          onOrderFailCallback.onFail();\n        }\n      }, 4000);\n    }\n  }\n}\n')))}m.isMDXComponent=!0},93157:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/card-ue-hosted-e629ee3be589dba0396d16510aaa1850.png"},9214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inapp-633444862ed69152de709c4dc1118774.png"},8209:(e,t,n)=>{n(67294)}}]);