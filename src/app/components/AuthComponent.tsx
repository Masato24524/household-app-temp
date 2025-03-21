import React, { useState, useEffect, FC, use, useContext, createContext, ReactNode } from "react";
import { auth, googleProvider } from "../../firebase";
import { onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { ex } from "@fullcalendar/core/internal-common";
import { set } from "date-fns";

interface AuthContextType {
    user: User | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null); // ユーザー情報
    const [loading, setLoading] = useState(true); // ログイン状態
    const router = useRouter();
    const pathname = usePathname();

    // ログイン状態の監視
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            console.log('User authenticated:', user); // ユーザー認証情報をログに出力
            if (!user && pathname !== "/") {
                // ログインしていない場合はルートページ（Signupページ）にリダイレクト
                router.push("/");
            }
        });

        //　アンマウント時に監視解除
        return () => unsubscribe();
    }, [router]);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
};

interface AuthComponentProps {
    children: ReactNode;
}

const AuthComponent: React.FC<AuthComponentProps> = ({ children }) => {
    const { loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>;
    }
        
    // ログイン処理
    // const handleSignIn = async () => {
    //     try {
    //         //　Googleログインポップアップを表示
    //         const result = await signInWithPopup(auth, googleProvider);
    //         //　ログイン成功時の処理
    //         console.log("ログイン成功", result.user);
    //     } catch (error) {
    //         //　エラーハンドリング
    //         console.error("ログインエラー", error);
    //     }
    // };

    // ログアウト処理
    // const handleSignOut = async () => {
    //     try {
    //         await signOut(auth);
    //     } catch (error) {
    //         console.error("ログアウトエラー", error);
    //     }
    // };

    return (
        <>
            { children }
        </>
    );
        // <>
        //     {user ? (
        //         <>
        //             <p>ログインユーザー: {user.displayName}</p>
        //             <button onClick={handleSignOut}>ログアウト</button>
        //         </>
        //     ) : (
        //         <>
        //             <p>ログインしていません</p>
        //             <button onClick={handleSignIn}>ログイン</button>
        //         </>
        //     )}
        // </>
    // );
};

export default AuthComponent;