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
        },
    {
      type: 'category',
      label: 'Payment',
      items: [
        'Payment/OrderCreation/index.mdx',
        'Payment/OrderCancellation/index.mdx',
        'Payment/adjust-order-expiry-time.mdx',
        'Payment/chargeback-notif.mdx',
        'Payment/get-cashier-url.mdx',
        'Payment/order-revoke.mdx',
        'Payment/payment-result-notification.mdx',
        'Payment/retrieve-order-detail.mdx',
        'Payment/retrieve-order-payer.mdx',
        // NOTE: There may be more .mdx files not listed here. See all at:
        // https://github.com/PayBy/official-doc/tree/master/docs/Payment
      ],
    },
    {
      type: 'category',
      label: 'Refund',
      items: [
        'Refund/refund-order-initiate.mdx',
        'Refund/refund-order-query.mdx',
        'Refund/refund-result-notification.mdx',
        // Add more docs from Refund folder
      ],
    },
    {
      type: 'category',
      label: 'Transfer to bank',
      items: [
        'Transfer to bank/list-countries-and-currencies.mdx',
        'Transfer to bank/rate-calculator.mdx',
        'Transfer to bank/transfer-to-bank-notification.mdx',
        'Transfer to bank/transfer-to-bank-query.mdx',
        'Transfer to bank/transfer-to-bank.mdx',
        'Transfer to bank/get-iban-holder-name.mdx',
        // Add more docs from Transfer to bank folder if needed
      ],
    },
    {
      type: 'category',
      label: 'Transfer',
      items: [
        'Transfer/transfer-notification.mdx',
        'Transfer/transfer-query.mdx',
        'Transfer/transfer.mdx',
        // Add more docs from Transfer folder
      ],
    },
    {
      type: 'category',
      label: 'Transfer to Bank Card',
      items: [
        'Transfer to Bank Card/verify-card-payout-eligibility.mdx',
        'Transfer to Bank Card/transfer-to-bank-card.mdx',
        'Transfer to Bank Card/query-bank-card-transfer.mdx',
        'Transfer to Bank Card/bank-card-transfer-notif.mdx',
        // Add more docs from Transfer to Bank Card folder if needed
      ],
    },
    {
      type: 'category',
      label: 'Reconciliation',
      items: [
        'Reconciliation/statement-download.mdx',
        'Reconciliation/statement-parameters.mdx',
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      items: [
        'SDKs/inapp.md',
        'SDKs/online-JAVA.md',
        'SDKs/online-PHP.md',
      ],
    },
    // '_request-header' removed as requested
  ],
};

module.exports = sidebars;
