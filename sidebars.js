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
        'Member/get-balance',
        'Member/vam-deposit-order',
        // Add more docs from Member folder
      ],
    },
    {
          type: 'category',
          label: 'Online Payment Integration',
          items: [
            'Online Payment Integration/overview',
            {
              type: 'category',
              label: 'Checkout',
              items: [
                'Online Payment Integration/Checkout/hosted-paypage',
                'Online Payment Integration/Checkout/iframe-paypage',
                'Online Payment Integration/Checkout/inapp-sdk-android',
                'Online Payment Integration/Checkout/inapp-sdk-ios',
              ],
            },
            {
              type: 'category',
              label: 'Special Payment Scenes',
              items: [
                'Online Payment Integration/Special Payment Scenes/_auto-debit.md',
                'Online Payment Integration/Special Payment Scenes/cash-top-up',
                'Online Payment Integration/Special Payment Scenes/direct-pay',
                'Online Payment Integration/Special Payment Scenes/dynrq',
                'Online Payment Integration/Special Payment Scenes/ewallet',
                'Online Payment Integration/Special Payment Scenes/jsapi',
                'Online Payment Integration/Special Payment Scenes/qrpay',
              ],
            },
            'Online Payment Integration/best-practice',
            'Online Payment Integration/test-case',
            // Plugins folder contains only subfolders; add their docs if needed
          ],
        },
    {
      type: 'category',
      label: 'Payment',
      items: [
        'Payment/OrderCreation/index.mdx',
        'Payment/OrderCancellation/index.mdx',
        'Payment/adjust-order-expiry-time',
        'Payment/chargeback-notif',
        'Payment/get-cashier-url',
        'Payment/order-revoke',
        'Payment/payment-result-notification',
        'Payment/retrieve-order-detail',
        'Payment/retrieve-order-payer',
        // NOTE: There may be more  files not listed here. See all at:
        // https://github.com/PayBy/official-doc/tree/master/Payment
      ],
    },
    {
      type: 'category',
      label: 'Refund',
      items: [
        'Refund/order-refund',
        'Refund/order-refund-query',
        'Refund/refund-result-notification',
        // Add more docs from Refund folder
      ],
    },
    {
      type: 'category',
      label: 'Transfer to bank',
      items: [
        'Transfer to bank/list-countries-and-currencies',
        'Transfer to bank/rate-calculator',
        'Transfer to bank/transfer-to-bank-notification',
        'Transfer to bank/transfer-to-bank-query',
        'Transfer to bank/transfer-to-bank',
        'Transfer to bank/get-iban-holder-name',
        // Add more docs from Transfer to bank folder if needed
      ],
    },
    {
      type: 'category',
      label: 'Transfer',
      items: [
        'Transfer/transfer-notification',
        'Transfer/transfer-query',
        'Transfer/transfer',
        // Add more docs from Transfer folder
      ],
    },
    {
      type: 'category',
      label: 'Transfer to Bank Card',
      items: [
        'Transfer to Bank Card/verify-card-payout-eligibility',
        'Transfer to Bank Card/transfer-to-bank-card',
        'Transfer to Bank Card/query-bank-card-transfer',
        'Transfer to Bank Card/bank-card-transfer-notif',
        // Add more docs from Transfer to Bank Card folder if needed
      ],
    },
    {
      type: 'category',
      label: 'Reconciliation',
      items: [
        'Reconciliation/statement-download',
        'Reconciliation/statement-parameters',
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      items: [
        'SDKs/inapp.md',
        'SDKs/online-JAVA.md',
        'SDKs/online-php.md',
      ],
    },
    // '_request-header' removed as requested
  ],
};

module.exports = sidebars;
