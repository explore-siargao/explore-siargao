import React from 'react';
import { Typography } from '@/common/components/ui/Typography';

interface SummaryData {
    labels: string[];
    values: string[][];
    total: string;
}

interface OverAllSummaryProps {
    overAllSummaryData: SummaryData;
}
const OverAllSummary: React.FC<OverAllSummaryProps> = ({ overAllSummaryData }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 sticky top-36">
            <Typography variant="h2" fontWeight="semibold" className="mb-2">
                Overall Summary
            </Typography>
            <div className="flex flex-col">
                {overAllSummaryData.labels.map((header, index) => (
                    <div key={`header-${index}`} className="flex gap-4 justify-between">
                        <Typography variant="p" fontWeight="semibold" className="pt-2 text-sm">
                            {header}:
                        </Typography>
                        <Typography variant="p" fontWeight="semibold" className="pt-2 text-sm">
                            {overAllSummaryData.values[0]?.[index]}
                        </Typography>
                    </div>
                ))}
            </div>
            <div className="bottom-0 border-t flex gap-4 justify-between">
                <Typography className="pt-4" variant="p" fontWeight="semibold">
                    Total
                </Typography>
                <Typography
                    className="pt-4 text-sm"
                    variant="p"
                    fontWeight="semibold"
                >
                   {overAllSummaryData.total} 
                </Typography>
            </div>
        </div>
    )
}

export default OverAllSummary;
