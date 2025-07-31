import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 'Contact Us',
        features: [
            '50 qualified insurance leads per month',
            'Basic lead scoring & filtering',
            'Email & phone support',
            'Lead delivery via CRM integration',
            'Basic analytics dashboard',
            'Standard lead quality guarantee',
        ],
    },
    {
        name: 'Professional',
        price: 'Contact Us',
        features: [
            '150 qualified insurance leads per month',
            'Advanced lead scoring & qualification',
            'Priority email & phone support',
            'Custom CRM integration setup',
            'Advanced analytics & reporting',
            'Dedicated account manager',
            'Lead quality guarantee',
            'Custom lead criteria',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Contact Us',
        features: [
            'Unlimited qualified leads',
            'Custom lead generation campaigns',
            '24/7 dedicated support',
            'White-label lead delivery system',
            'Advanced analytics & ROI tracking',
            'Custom website development',
            'Full marketing automation setup',
            'On-site training & consultation',
        ],
    },
]