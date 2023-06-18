import { FC } from "react";

interface SectionTitleProps {
    title: string;
  }

const SectionTitle:FC<SectionTitleProps> = ({title}) => {
    return (
        <section className="my-8">
            <h3 className="text-2xl font-bold">{title}</h3>
            <hr />
        </section>
    );
};

export default SectionTitle;