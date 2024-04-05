"use client";

import { useState } from "react";
import Accordion from "@/app/components/accordion/Accordion";
import { Header } from "@/app/components/header/Header";

export default function page() {
    const [activeSections, setActiveSections] = useState({});

    return (
        <div>
            <Header />
            <Accordion />
        </div>
    );
};