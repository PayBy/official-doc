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
        'docs/General/integration-guide',
        'docs/General/response-code',
        'docs/General/test-accounts',
        // Add more docs from General if needed
      ],
    },
    {
      type: 'category',
      label: 'Member',
      items: [
        'docs/Member/get-balance.mdx',
        'docs/Member/vam-deposit-order.mdx',
        // Add more docs from Member folder
      ],
    },
    {
          type: 'category',
          label: 'Online Payment Integration',
          items: [
            'docs/Online Payment Integration/overview.md',
            {
              type: 'category',
              label: 'Checkout',
              items: [
                'docs/Online Payment Integration/Checkout/hosted-paypage.md',
                'docs/Online Payment Integration/Checkout/iframe-paypage.md',
                'docs/Online Payment Integration/Checkout/inapp-sdk-android.md',
                'docs/Online Payment Integration/Checkout/inapp-sdk-ios.md',
              ],
            },
            {
              type: 'category',
              label: 'Special Payment Scenes',
              items: [
                'docs/Online Payment Integration/Special Payment Scenes/_auto-debit.md',
                'docs/Online Payment Integration/Special Payment Scenes/cash-top-up.md',
                'docs/Online Payment Integration/Special Payment Scenes/direct-pay.md',
                'docs/Online Payment Integration/Special Payment Scenes/dynrq.md',
                'docs/Online Payment Integration/Special Payment Scenes/ewallet.md',
                'docs/Online Payment Integration/Special Payment Scenes/jsapi.md',
                'docs/Online Payment Integration/Special Payment Scenes/qrpay.md',
              ],
            },
            'docs/Online Payment Integration/best-practice.md',
            'docs/Online Payment Integration/test-case.mdx',
            // Plugins folder contains only subfolders; add their docs if needed
          ],
        },
    {
      type: 'category',
      label: 'Payment',
      items: [
        'docs/Payment/OrderCreation/index.mdx',
        'docs/Payment/OrderCancellation/index.mdx',
        'docs/Payment/adjust-order-expiry-time.mdx',
        'docs/Payment/chargeback-notif.mdx',
        'docs/Payment/get-cashier-url.mdx',
        'docs/Payment/order-revoke.mdx',
        'docs/Payment/payment-result-notification.mdx',
        'docs/Payment/retrieve-order-detail.mdx',
        'docs/Payment/retrieve-order-payer.mdx',
        // NOTE: There may be more .mdx files not listed here. See all at:
        // https://github.com/PayBy/official-doc/tree/master/docs/Payment
      ],
    },
    {
      type: 'category',
      label: 'Refund',
      items: [
        'docs/Refund/refund-order-initiate.mdx',
        'docs/Refund/refund-order-query.mdx',
        'docs/Refund/refund-result-notification.mdx',
        // Add more docs from Refund folder
      ],
    },
    {
      type: 'category',
      label: 'Transfer to bank',
      items: [
        'docs/Transfer to bank/list-countries-and-currencies.mdx',
        'docs/Transfer to bank/rate-calculator.mdx',
        'docs/Transfer to bank/transfer-to-bank-notification.mdx',
        'docs/Transfer to bank/transfer-to-bank-query.mdx',
        'docs/Transfer to bank/transfer-to-bank.mdx',
        'docs/Transfer to bank/get-iban-holder-name.mdx',
        // Add more docs from Transfer to bank folder if needed
      ],
    },
    {
      type: 'category',
      label: 'Transfer',
      items: [
        'docs/Transfer/transfer-notification.mdx',
        'docs/Transfer/transfer-query.mdx',
        'docs/Transfer/transfer.mdx',
        // Add more docs from Transfer folder
      ],
    },
    {
      type: 'category',
      label: 'Transfer to Bank Card',
      items: [
        'docs/Transfer to Bank Card/verify-card-payout-eligibility.mdx',
        'docs/Transfer to Bank Card/transfer-to-bank-card.mdx',
        'docs/Transfer to Bank Card/query-bank-card-transfer.mdx',
        'docs/Transfer to Bank Card/bank-card-transfer-notif.mdx',
        // Add more docs from Transfer to Bank Card folder if needed
      ],
    },
    {
      type: 'category',
      label: 'Reconciliation',
      items: [
        'docs/Reconciliation/statement-download.mdx',
        'docs/Reconciliation/statement-parameters.mdx',
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      items: [
        'docs/SDKs/inapp.md',
        'docs/SDKs/online-JAVA.md',
        'docs/SDKs/online-PHP.md',
      ],
    },
    // '_request-header' removed as requested
  ],
};

module.exports = sidebars;
