import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <div className="space-y-12 mt-48 mb-48" id="pricing">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Lead Generation Packages</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Get qualified insurance leads that convert. Our custom packages are designed to scale with your agency&apos;s growth and target your specific market segments.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
                ))}
            </div>
        </div>
    )
}

export default Pricing