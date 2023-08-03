import { useEffect, useState } from "react";


const Services = () => {
    const [allServices, setServices] = useState([])

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 pt-4 px-4">
            {
                allServices.map(service => <div key={service.id} className=" text-center border shadow-lg p-4">
                    <img className="h-28 mx-auto hover:shadow-xl hover:-translate-y-4 duration-500" src={service.logo} alt="" />
                    <h4 className="bg-slate-200 px-2 py-1 font-semibold mt-2 text-teal-600">{service.name}</h4>
                </div>)
            }

        </div>
    );
};

export default Services;