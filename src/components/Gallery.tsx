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
            <div className=" flex justify-evenly ">
                {IMAGES.map((src) => (
                    <div
                        key={src}
                        className="relative flex-none w-48 h-48 rounded-2xl overflow-hidden shadow-lg"
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