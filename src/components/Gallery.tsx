// src/components/Gallery.tsx
import Image from "next/image"

// list out all five JPEGs
const IMAGES = [
    "/images/gallery1.jpeg",
    "/images/gallery2.jpeg",
    "/images/gallery3.jpeg",
    "/images/gallery4.jpeg",
    "/images/gallery5.jpeg",
];

export default function Gallery() {
    return (
        <section className=" w-full">
            <h2 className="text-2xl font-bold mb-6 px-4">Featured Shots</h2>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 ">
                {IMAGES.map((src) => (
                    <div
                        key={src}
                        className="relative w-full pt-[100%] rounded-2xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src={src}
                            alt="picture"
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}