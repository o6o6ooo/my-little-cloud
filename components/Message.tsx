import SmoothSlideText from '@/components/SmoothSlideText';

export default function Message() {
    return (
        <section className="h-[300px] flex flex-col items-center justify-center text-center md:mt-64 px-4"> {/* delete mt-64 when getting more apps */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] leading-snug">
                <div><SmoothSlideText text="Minimal on the surface." /></div>
                <div><SmoothSlideText text="Maximum in experience." /></div>
            </h2>
            <p className="mt-4 text-lg text-[var(--lightblue)] font-semibold">
                I craft silence into structure.
            </p>
        </section>
    );
}