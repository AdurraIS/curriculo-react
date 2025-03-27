interface CardLinkProps {
    icon: React.ReactNode;
    text: string;
}

export const CardLink = ({ icon, text }: CardLinkProps) => (
    <div className="card-links">
        {icon}
        {text && <h3 className="ml-2">{text}</h3>}
    </div>
);