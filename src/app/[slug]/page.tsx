import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

async function getData(postSlug: string) {
    const res = await fetch(
        `https://nextjswp.turgaykurt.com/wp-content/uploads/json/pages/?slug=${postSlug}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

    return (
        <div>
            <div
                className="blog-icerik"
                dangerouslySetInnerHTML={{
                    __html: data[0].content,
                }}
            />
        </div>
    );
}
