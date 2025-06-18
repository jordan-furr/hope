import Image from 'next/image';

export default async function Hero() {
    return (
        <div>
            <div className="heroCont">
                <Image
                    src="/hope_dirt.jpg"
                    alt="Retreat Greenhouse"
                    fill
                    style={{ 
                        objectFit: 'cover',
                        objectPosition: '50% 42%'
                    }}
                />
            </div>
        </div>
    );
}