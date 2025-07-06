export default function Skills() {
    return (
        <section className="h-[140px] flex items-center justify-center mb-32">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
                {['React', 'React Native', 'Laravel', 'Flutter', 'Firebase', 'Next.js'].map(
                    (skill) => (
                        <li
                            key={skill}
                            className="rounded-full border px-4 py-1 text-sm font-medium text-[var(--fg)] border-[var(--fg)]/20"
                        >
                            {skill}
                        </li>
                    ),
                )}
            </ul>
        </section>
    );
  }