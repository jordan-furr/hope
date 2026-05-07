'use client';
import React, { FormEvent, useState } from "react";
import axios from "axios";

const ContactSubscribe = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"success" | "error" | "loading" | "idle">("idle");

    async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        try {
            await axios.post("/api/subscribe", { email });
            setStatus("success");
            setTimeout(() => setStatus("idle"), 2000);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 2000);
            }
        }
        setEmail("");
    }

    return (
        <div className="contactSubscribeCont">
            <form className="contactSubscribeForm" onSubmit={handleSubscribe}>
                <div className="contactSubscribeInputCont">
                    <input
                        type="email"
                        placeholder="Email"
                        className="contactSubscribeInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading"}
                    />
                    <button
                        type="submit"
                        className="contactSubscribeButton"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "..." : status === "success" ? "Done!" : "Subscribe"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactSubscribe;