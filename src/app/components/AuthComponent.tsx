import React, { useState, useEffect, FC } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

interface User {
    displayName: string | null;
}

const AuthComponent: FC = () => {
    const [user, setUser] = useState<User | null>(null); // ログイン状態

    // ログイン状態の監視
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // ログインしている場合
                setUser({ displayName: user.displayName });
            } else {
                setUser(null);

            }
        });

        //　アンマウント時に監視解除
        return () => {
            unsubscribe();
        };
    }, []);

    // ログイン処理
    const handleSignIn = async () => {
        try {
            //　Googleログインポップアップを表示
            const result = await signInWithPopup(auth, googleProvider);
            //　ログイン成功時の処理
            console.log("ログイン成功", result.user);
        } catch (error) {
            //　エラーハンドリング
            console.error("ログインエラー", error);
        }
    };

    // ログアウト処理
    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("ログアウトエラー", error);
        }
    };

    return (
        <>
            {user ? (
                <>
                    <p>ログインユーザー: {user.displayName}</p>
                    <button onClick={handleSignOut}>ログアウト</button>
                </>
            ) : (
                <>
                    <p>ログインしていません</p>
                    <button onClick={handleSignIn}>ログイン</button>
                </>
            )}
        </>
    );
};

export default AuthComponent;