import { useState } from "react";

type Callback = (...args: any[]) => Promise<void>;

export function useFetching(callback: Callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async (...args: any[]) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : String(e);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return [isLoading, error, fetching] as const;
}
