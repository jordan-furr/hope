import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
    return (
        <div className='headerCont'>
            <div className="hopeCont">
                <Link href="/">
                    <h1 className="hopeTitle">
                        Hope Accelerator
                    </h1>
                </Link>
            </div>
            <div className="menuIconCont">
                <Link href="/">
                    <Image
                        src="/Hope-Accelerator-Retreats-Normandy-France-w.PNG"
                        alt="Menu"
                        width={54}
                        height={54}
                    />
                </Link>
            </div>
        </div>
    );
}
