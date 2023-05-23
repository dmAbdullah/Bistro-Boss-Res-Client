

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto mb-10">
            <p className="text-orange-500">---{subHeading}---</p>
            <h3 className="uppercase border-y-2 py-4 font-extrabold text-3xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;