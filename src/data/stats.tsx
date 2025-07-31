import { HiUserGroup, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "10K+",
        icon: <HiUserGroup size={34} className="text-blue-500" />,
        description: "Qualified insurance leads delivered to brokers and agencies nationwide."
    },
    {
        title: "95%",
        icon: <HiLightningBolt size={34} className="text-yellow-500" />,
        description: "Lead conversion rate, consistently outperforming industry standards."
    },
    {
        title: "500+",
        icon: <HiShieldCheck size={34} className="text-green-600" />,
        description: "Insurance agencies trust us for their lead generation and marketing needs."
    }
];