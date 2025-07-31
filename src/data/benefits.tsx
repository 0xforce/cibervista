import { FiPhone, FiFileText, FiShield, FiFilter, FiMessageSquare, FiRefreshCw, FiTarget } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Warm Transfer Leads",
        description: "Connect with prospects at the perfect moment. Our warm transfer system puts you in direct contact with interested leads when they're most likely to convert.",
        bullets: [
            {
                title: "Real-Time Transfers",
                description: "Speak to prospects immediately when they show interest.",
                icon: <FiPhone size={26} />
            },
            {
                title: "Pre-Qualified Prospects",
                description: "Every lead is screened and ready for your pitch.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Instant Connection",
                description: "No waiting - direct connection when prospects are engaged.",
                icon: <FiMessageSquare size={26} />
            }
        ],
        imageSrc: "/images/benefits1.png"
    },
    {
        title: "Coverage-Specific Targeting",
        description: "Target the exact insurance products your agency specializes in. From life and health to auto and business insurance, we deliver leads interested in your specific offerings.",
        bullets: [
            {
                title: "Life Insurance Leads",
                description: "Qualified prospects seeking life coverage solutions.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Health & Auto Coverage",
                description: "Targeted leads for health and automotive insurance needs.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Business Insurance",
                description: "Commercial clients looking for comprehensive business coverage.",
                icon: <FiFileText size={26} />
            }
        ],
        imageSrc: "/images/benefits2.png"
    },
    {
        title: "Advanced Lead Filtering",
        description: "Get exactly the leads you want with our sophisticated demographic and behavioral filtering system. Target by age, income, family status, and business size.",
        bullets: [
            {
                title: "Demographic Filters",
                description: "Filter by age, income, family status, and location.",
                icon: <FiFilter size={26} />
            },
            {
                title: "Business Size Targeting",
                description: "Target specific business sizes and industries.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Behavioral Insights",
                description: "Data-driven targeting based on online behavior.",
                icon: <FiFilter size={26} />
            }
        ],
        imageSrc: "/images/benefits3.png"
    },
    {
        title: "100% Satisfaction Guarantee",
        description: "We stand behind our leads. If a lead doesn't meet our quality standards, we'll replace it at no cost. Your success is our priority.",
        bullets: [
            {
                title: "Lead Replacements",
                description: "100% satisfaction guarantee with free replacements.",
                icon: <FiRefreshCw size={26} />
            },
            {
                title: "Quality Assurance",
                description: "Every lead verified before delivery.",
                icon: <FiShield size={26} />
            },
            {
                title: "Dedicated Support",
                description: "24/7 support to ensure your success.",
                icon: <FiMessageSquare size={26} />
            }
        ],
        imageSrc: "/images/benefits4.png"
    },
]