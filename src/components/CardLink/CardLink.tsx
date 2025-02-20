export const CardLink = ({ icon, text}) => (
    <div className="card-links">
        {icon}
        {text && <h3 className="ml-2">{text}</h3>}
    </div>
);