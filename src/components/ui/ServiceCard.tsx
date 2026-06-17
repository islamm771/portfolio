import { IService } from '@/utils/types'

interface IServiceCard {
    service: IService
}

const ServiceCard = ({ service }: IServiceCard) => {
    return (
        <div className="group rounded-xl bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 w-fit rounded-full bg-primary/10 p-4 text-primary">
                <service.icon size={40} />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-fg">
                {service.title}
            </h3>

            <p className="leading-7 text-fg/70">
                {service.description}
            </p>
        </div>
    )
}

export default ServiceCard