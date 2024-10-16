import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface ImageCarouselProps {
    images: { url: string; aspectRatio: '16to9' | '2to1' | '1to2' }[];
    alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
    const [index, setIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

    useEffect(() => {
        // Preload images
        const imagePromises = images.map((image, i) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = `${process.env.PUBLIC_URL}${image.url}`;
                img.onload = () => {
                    setImagesLoaded(prev => {
                        const newState = [...prev];
                        newState[i] = true;
                        return newState;
                    });
                    resolve(null);
                };
            });
        });

        Promise.all(imagePromises);
    }, [images]);

    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    const goToSlide = (slideIndex: number) => {
        setIndex(slideIndex);
    };

    const getContainerClass = (type: '16to9' | '2to1' | '1to2') => {
        switch (type) {
            case '2to1':
                return 'w-full pb-[50%]';
            case '1to2':
                return 'w-[80%] pb-[160%] xl:w-[60%] xl:pb-[120%] 2xl:w-[50%] 2xl:pb-[100%]';
            case '16to9':
                return 'w-full pb-[56.25%]';
            default:
                return 'w-full pb-[50%]';
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className={`relative mx-auto ${getContainerClass(images[index].aspectRatio)}`}>
                {transitions((style, i) => (
                    <animated.div
                        style={{
                            ...style,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        {!imagesLoaded[i] && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                        )}
                        <img
                            src={`${process.env.PUBLIC_URL}${images[i].url}`}
                            alt={`${alt} ${i + 1}`}
                            className={`w-full h-full object-cover transition-opacity duration-300 ${imagesLoaded[i] ? 'opacity-100' : 'opacity-0'}`}
                            loading={i === 0 ? 'eager' : 'lazy'}
                        />
                    </animated.div>
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                onClick={() => setIndex((state) => (state - 1 + images.length) % images.length)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-colors"
                aria-label="Previous image"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
                onClick={() => setIndex((state) => (state + 1) % images.length)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition-colors"
                aria-label="Next image"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Navigation dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'} hover:bg-gray-200 transition-colors`}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;