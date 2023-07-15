import { FC } from "react";



const SectionTitle = ({title}:{title:string}) => {
    return (
        <section className="my-8">
            <h3 className="text-2xl font-bold">{title}</h3>
            <hr />
        </section>
    );
};

export default SectionTitle;