import Image from 'next/image';

export default async function Hero() {
    return (
        <div>
            <div className="heroCont">
                <Image
                    src="/02.jpg"
                    alt="Retreat Greenhouse"
                    fill
                    className="heroImg"
                />
            </div>
        </div>
    );
}