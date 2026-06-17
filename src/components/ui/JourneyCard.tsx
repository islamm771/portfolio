
type JourneyCardProps = {
    year: string;
    title: string;
    company: string;
    description: string;
};

function JourneyCard({
    year,
    title,
    company,
    description,
}: JourneyCardProps) {
    return (
        <div className="w-full rounded-2xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            <span className="text-sm font-semibold text-primary">
                {year}
            </span>

            <h3 className="mt-2 text-xl font-semibold text-fg">
                {title}
            </h3>

            <p className="mt-1 text-sm text-primary">
                {company}
            </p>

            <p className="mt-3 leading-7 text-fg/70">
                {description}
            </p>
        </div>
    );
}


export default JourneyCard