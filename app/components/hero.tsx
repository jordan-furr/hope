import Image from 'next/image';

export default async function Hero() {
    return (
        <div>
            <div className="heroCont">
                <Image
                    src="/02.jpg"
                    alt="Retreat Greenhouse"
                    fill
                    style={{ 
                        objectFit: 'cover',
                        objectPosition: '50% 37%'
                    }}
                />
            </div>
        </div>
    );
}