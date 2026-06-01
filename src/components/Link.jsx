function Link({
    link,
    desc,
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline hover:text-blue-600 text-lg block w-fit"
        >
            {desc}
        </a>
    );
}

export default Link;