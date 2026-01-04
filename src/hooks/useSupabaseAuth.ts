import { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { useModalAuthStore } from "../store/AuthModalStore";

export const useSupabaseAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const { closeModal } = useModalAuthStore();

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED")
                    closeModal();
            },
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, [closeModal]);

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) setError(error.message);
        setLoading(false);
    };

    const signUp = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) setError(error.message);
        else setSuccessMessage("You have created account!");
        setLoading(false);
    };

    return { signIn, signUp, loading, error, successMessage };
};
