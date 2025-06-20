/**
 * Manual sidebar generated based on the /docs folder contents at
 * commit 42d5683c9330befd1594220671501af7c98b3a68.
 * NOTE: This may not include all files/folders—see GitHub for the full list.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'General',
      items: [
        'General/integration-guide',
        'General/response-code',
        'General/test-accounts',
        // Add more docs from General if needed
      ],
    },
    {
      type: 'category',
      label: 'Member',
      items: [
        'Member/get-balance.mdx',
        'Member/vam-deposit-order.mdx',
        // Add more docs from Member folder
      ],
    },
    {
      type: 'category',
      label: 'Online Payment Integration',
      items: [
        {
          type: 'category',
          label: 'Online Payment Integration',
          items: [
            'Online Payment Integration/overview.md',
            {
              type: 'category',
              label: 'Checkout',
              items: [
                'Online Payment Integration/Checkout/hosted-paypage.md',
                'Online Payment Integration/Checkout/iframe-paypage.md',
                'Online Payment Integration/Checkout/inapp-sdk-android.md',
                'Online Payment Integration/Checkout/inapp-sdk-ios.md',
              ],
            },
            {
              type: 'category',
              label: 'Special Payment Scenes',
              items: [
                'Online Payment Integration/Special Payment Scenes/_auto-debit.md',
                'Online Payment Integration/Special Payment Scenes/cash-top-up.md',
                'Online Payment Integration/Special Payment Scenes/direct-pay.md',
                'Online Payment Integration/Special Payment Scenes/dynrq.md',
                'Online Payment Integration/Special Payment Scenes/ewallet.md',
                'Online Payment Integration/Special Payment Scenes/jsapi.md',
                'Online Payment Integration/Special Payment Scenes/qrpay.md',
              ],
            },
            'Online Payment Integration/best-practice.md',
            'Online Payment Integration/test-case.mdx',
            // Plugins folder contains only subfolders; add their docs if needed
          ],
       
