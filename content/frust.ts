export const frust = {
  name: "Frust",
  estimateHref: "#pricing",
  demoHref: "#how-it-works",
  loginHref: "#faq",
  marketplaceHref: "#marketplace",
  language: "En",
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Products", href: "#products", hasMenu: true },
    { label: "Princing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#blog" },
  ],
  hero: {
    headline: "Cut your AWS bill 10–30%, pay only when we save you money",
    body: "Frust applies flexible Reserved Instances and Savings Plans at the billing layer. No infrastructure changes, no commitment, no upfront cost — read-only access you can revoke anytime.",
    demo: "Book a demo",
    estimate: "Get my saving estimate",
  },
  partners: [
    { src: "/images/frust/partner-1.png", alt: "Partner logo", width: 112, height: 17 },
    { src: "/images/frust/partner-2.png", alt: "Partner logo", width: 90, height: 24 },
    { src: "/images/frust/partner-3.png", alt: "Partner logo", width: 90, height: 21 },
    { src: "/images/frust/partner-4.png", alt: "Partner logo", width: 106, height: 18 },
  ],
  visual: {
    savingsLabel: "Total savings with Frust",
    savingsValue: "$ 2,573,210",
    savingsCaption: "across 100+ companies - and counting",
    setupLabel: "Setup",
    setupValue: "10",
    setupUnit: "min",
    setupCaption: "Read-only.",
    rateLabel: "Savings rate",
    rateValue: "30%",
    rateCaption: "up to",
    pricingLabel: "Success-based pricing",
    pricingLead: "You pay",
    pricingMid: " 20% ",
    pricingTrail: "of what we save",
  },
  stats: [
    { value: "$2.5M+", label: "Saved for costumers" },
    { value: "100+", label: "Companies trus us" },
    { value: "10-30%", label: "Lower AWS bills" },
    { value: "<48h", label: "to your savings estimate" },
  ],
  steps: {
    title: "Three steps to lower AWS bill - with no commitment",
    items: [
      {
        n: "1",
        icon: "/images/frust/step-1.svg",
        title: "Discovery your savings",
        body: "Estimate it yourself or book a demo — our automated analyzer calculates how much Frust could save you with AWS Savings Plans.",
      },
      {
        n: "2",
        icon: "/images/frust/step-2.svg",
        title: "Review & install",
        body: "If the result convinces you, install Frust's optimizer in your account. It attaches Frust-managed Savings Plans to maximize savings, without touching your infrastructure.",
      },
      {
        n: "3",
        icon: "/images/frust/step-3.svg",
        title: "Pay only if you save",
        body: "At month's end you pay 20% of what you saved, via your AWS bill. No savings, no charge — and no lock-in, so you can leave anytime.",
      },
    ],
  },
  fraction: {
    title: "You pay only a fraction of what you save — billed directly from AWS",
    body: "At the end of each month we charge 20% of the savings we generate in your account. If we generate no savings, we don't charge you. The fee comes through your AWS bill — no separate invoices, no extra payment methods.",
    cards: [
      {
        icon: "/images/frust/chip-20.svg",
        kicker: "Pay only",
        value: "20%",
        body: "of the savings generated. Save $1,000, pay $200. Save $0, pay nothing.",
      },
      {
        icon: "/images/frust/chip-aws.svg",
        kicker: "Direcly",
        value: "AWS",
        body: "Charged directly on your existing AWS bill — no new vendor contracts.",
      },
    ],
  },
  keep: {
    title: "You keep the lion’s share of every dollar we save",
    body: "Frust applies flexible commitments to cut your spend, then charges 20% of what we save - only if we save it. The other 80% stays in your account, month after month. Here’s the math on a typical month.",
    keepPct: "80%",
    keepLabel: "of savings stay yours",
    zero: "$0",
    zeroLabel: "If we save you nothing",
    statementTitle: "Your monthly statement",
    unlocked: "Monthly savings Frust unlocks",
    unlockedValue: "$733",
    fee: "Frust fee (20% of savings)",
    feeValue: "$733",
    keepLine: "What you keep",
    keepValue: "$ 587",
    keepLegend: "You keep 80%",
    feeLegend: "Frust fee 20%",
    note: "Illustrative example- Your savings depend on your AWS usage mix.",
  },
  audience: {
    title: "Built for the people who own the AWS bill",
    cards: [
      {
        icon: "/images/frust/chip-infra.svg",
        title: "Zero changes to your infrastructure",
        body: "Frust works entirely at the billing layer. We need read-only Cost Exporer access - no sub-org migration, no agent installation, no IAM role changes to your workloads.",
        note: "2 hour activation",
      },
      {
        icon: "/images/frust/chip-lockin.svg",
        title: "Reduce AWS spend without the lock-in risk",
        body: "We buy the reserved capacity on our accounts. You pay Frust a fee - an fraction of what we save - with no multi-year commitment to AWS.",
        note: "Up to 30% savings, success-based fee",
      },
      {
        icon: "/images/frust/chip-runway.svg",
        title: "Extend runway on your biggest infrastructure cost",
        body: "AWS is typically the #1 or #2 infrastructure line item. Frust turn that into an immediate, recurring saving - 0$ upfront, cancel anytime.",
        note: "$0 upfront • cancel anytime",
      },
    ],
  },
  control: {
    title: "Always in your control-no access to infrastructure or data",
    body: "Trust is the whole point. Frust operates at the billing layer with permissions you grant, see, and revoke.",
    cards: [
      {
        icon: "/images/frust/chip-billing.svg",
        title: "Billing - level read permissions only",
        body: "You deploy a read-only CloudFormation stack. Frust sees your usage and billing, never your data or your resources.",
      },
      {
        icon: "/images/frust/chip-no-change.svg",
        title: "No infrastructure changes",
        body: "Frust never creates, modifies, or deletes any resource in your AWS account. It only reads.",
      },
      {
        icon: "/images/frust/chip-org.svg",
        title: "No sub-org migration",
        body: "Your account doesn’t move to another organization, the invite only manages the savings commitments.",
      },
      {
        icon: "/images/frust/chip-billing.svg",
        title: "Remove the permissions anytime",
        body: "Delete Frust´s stacks whenever you want and revoke all access. No lock-in, no multi-year contracts.",
      },
    ],
  },
  policy: {
    kicker: "Onboarding in 10 minutes",
    title: "See exactly what we can read - it’s the whole policy",
    body: "You deploy a ready-only CloudFormation stack - the AWS standard for secure integrations. Frust can describe, get, and list your Cost Explorer data, and nothing else. No write access, no recourses, no business data.",
    snippet: `{
  "PolicyDocument": {
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "ce:Describe*",
          "ce:Get*",
          "ce:List*"
        ],
        "Resource": ["*"]
      }
    ]
  }
}`,
  },
  marketplace: {
    kicker: "Available on AWS Marketplace",
    title: "Subscribe directly through AWS - one clic, no new paperwork",
    body: "Frust is listed on AWS Marketplace, so you can subscribe with your existing AWS account in a single click - and start capturing savings without routing new vendor through procurement.",
    cta: "View on AWS Marketplace",
    points: [
      {
        icon: "/images/frust/chip-vendor.svg",
        title: "No new vendor contract",
        body: "Subscribe under your existing AWS agreement - nothing new for legal or procurement to sign.",
      },
      {
        icon: "/images/frust/chip-invoice.svg",
        title: "Consolidate AWS billing",
        body: "Frust appears on the AWS invoice you already pay. No separate payment method to set up.",
      },
      {
        icon: "/images/frust/chip-procurement.svg",
        title: "Procurement already approved",
        body: "AWS reviews and approves every Marketplace listing, so the vendor due diligence is done.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    body: "Everything you need to know before getting started",
    items: [
      {
        q: "How much can I save on AWS with Frust?",
        a: "Customers typically cut 10–30% of their AWS bill. Across 100+ companies Frust has unlocked more than $2.5M in savings — and counting.",
      },
      {
        q: "How does Frust work?",
        a: "Frust applies flexible Reserved Instances and Savings Plans at the billing layer. You discover your savings, review and install a read-only optimizer, then pay 20% of what we save — only if we save it.",
      },
      {
        q: "What does Frust cost?",
        a: "You pay 20% of the savings generated, billed on your existing AWS invoice. Save $1,000, pay $200. Save $0, pay nothing. No upfront cost and no separate vendor contract.",
      },
      {
        q: "Is Frust save? What access does it need?",
        a: "You deploy a read-only CloudFormation stack with Cost Explorer Describe / Get / List permissions. Frust never writes to infrastructure or business data, and you can delete the stack to revoke access anytime.",
      },
      {
        q: "Am I locked in? What happens if my AWS usage changes?",
        a: "No. Frust buys reserved capacity on its own accounts, so you have no multi-year AWS commitment. Cancel anytime — if usage changes, you still only pay when we save you money.",
      },
    ],
  },
  footer: {
    email: "un@frust.co",
    chile: "🇨🇱 Callao 2911, of 4144, Santiago, RM, 7550285",
    us: "🇺🇸 1111B S Governors Ave STE 29963, Dover, DE 19904",
  },
} as const;
