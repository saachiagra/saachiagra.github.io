function Link({
    link,
    desc,
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg block"
        >
            {desc}
        </a>
    );
}

export default Link;