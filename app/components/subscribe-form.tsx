'use client';
import React from "react";
import { FormEvent, useState } from "react";
import axios from "axios";


const SubscribeForm = () => {

    const [email, setEmail] = useState<string>("");
    const [status, setStatus] = useState<
        "success" | "error" | "loading" | "idle"
    >("idle");
    const [responseMsg, setResponseMsg] = useState<string>("");
    const [statusCode, setStatusCode] = useState<number>();

    async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await axios.post("/api/subscribe", { email });

            setStatus("success");
            setStatusCode(response.status);
            setEmail("");
            setResponseMsg(response.data.message);
        } catch (err) {

            if (axios.isAxiosError(err)) {
                setStatus("error");
                setStatusCode(err.response?.status);
                setResponseMsg(err.response?.data.error);
            }
        }
        setTimeout(() => {
            setEmail("");
            setStatus("idle");
            setStatusCode(0);
          }, 200);
    }

    return (
        <div className="subscribeCont">
            <form className="formCont" onSubmit={handleSubscribe}>
                <div className="formInputCont">
                <input
                    type="email"
                    placeholder="Email"
                    className="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status == "loading"}
                />
                <button
                    type="submit"
                    className="subButton"
                    disabled={status == "loading"}
                >
                    Subscribe
                </button>
                </div>
            </form>
        </div>
    );
}

export default SubscribeForm;