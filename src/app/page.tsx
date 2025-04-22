'use client';

import { ReactQueryProvider } from '@/lib/react-query-provider';
import Home from "@/app/Home";

export default function PageWrapper() {
    return (
        <ReactQueryProvider>
            <Home />
        </ReactQueryProvider>
    );
}
