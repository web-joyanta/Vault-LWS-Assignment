import { useState } from 'react';

const BookmarkCard = ({ data }) => {
    const { url, color, category, username, password } = data;
    const [showPassword, setShowPassword] = useState(false);
    const [bookmarkData, setBookmarkData] = useState({
        
    })

    function parseUrl(url) {
        const clean = url.replace(/^https?:\/\//, '');
        const domain = clean.split('.')[0];
        const initials = domain
            .match(/[a-zA-Z]/g)
            .slice(0, 2)
            .map(l => l.toUpperCase())
            .join('');
        const capitalized = domain.replace(/^./, c => c.toUpperCase());
        return {
            logo: initials,
            title: capitalized,
            link: clean
        };
    }
    const { logo, title, link } = parseUrl(url);

    return (
        <article
            className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div
                        style={{
                            backgroundColor: `${color}10`,
                            color: color,
                            borderColor: `${color}40`,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-semibold uppercase"
                    >
                        <p>{logo}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">
                            {title}
                        </h3>
                        <p
                            className="text-xs uppercase tracking-wide text-neutral-500"
                        >
                            {category}
                        </p>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
                {link}
            </p>
            <dl className="mt-5 space-y-3 text-sm">
                <div
                    className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                >
                    <dt
                        className="text-xs uppercase tracking-wide text-neutral-500"
                    >
                        Username
                    </dt>
                    <dd className="text-neutral-50">
                        {username}
                    </dd>
                </div>
                <div
                    className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3"
                >
                    <dt
                        className="text-xs uppercase tracking-wide text-neutral-500"
                    >
                        Password
                    </dt>
                    <dd
                        className="flex items-center gap-2 text-neutral-50"
                    >
                        <span type="password">{showPassword ? password : "••••••••"}</span>
                        <button onClick={() => setShowPassword(!showPassword)}
                            className="text-xs font-semibold text-blue-400"
                        >
                            Reveal
                        </button>
                    </dd>
                </div>
            </dl>
        </article>
    );
};

export default BookmarkCard;