import Image from 'next/image';

export default async function Hero() {
    return (
        <div>
            <div className="heroCont">
                <Image
                    src="/aizier_yard.jpg"
                    alt="Retreat Greenhouse"
                    fill
                    className="heroImg"
                />
            </div>
        </div>
    );
}