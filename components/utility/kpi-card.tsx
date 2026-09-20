export default function KPICard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex items-center justify-between gap-4">
            <div className="flex items-center justify-center gap-3">
                <div className="text-2xl text-primary-500">{icon}</div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
            </div>
            <div>
                <p className="text-[2em] font-semibold text-gray-900 dark:text-gray-100">{value}</p>
            </div>
        </div>
    );
}