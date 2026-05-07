import SubscribeForm from './subscribe-form';

export default async function Info() {
    return (
        <div className="infoCont">
            <div className="textCont">
                <p>The Hope Accelerator runs on an ethos: the regenerative power of Nature heals systems and us.</p>
                {/* <p>Hope Accelerator retreats are immersive and run on an ethos: the regenerative power of Nature heals systems and us.</p> */}
            </div>
            <SubscribeForm/>
        </div>
    );
}