async function getData(postSlug: string) {
    const res = await fetch(
        `https://nextjswp.turgaykurt.com/wp-content/uploads/json/posts/?slug=${postSlug}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

    return (
        <div className="single-post">
            <div className="kapsayici">
                <div className="blog-giris">
                    <h1
                        dangerouslySetInnerHTML={{
                            __html: data[0].title,
                        }}
                    />
                    <div className="baslik-aciklama">
                        <p>{data[0].excerpt}</p>
                        <p>
                            {data[0].published_date} • <span>2</span> min read
                        </p>
                    </div>

                    <figure
                        dangerouslySetInnerHTML={{ __html: data[0].thumbnail }}
                    />
                </div>
                <div
                    className="blog-icerik"
                    dangerouslySetInnerHTML={{
                        __html: data[0].content,
                    }}
                />
            </div>
        </div>
    );
}
