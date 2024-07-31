'use client'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../firebase";
// import { Link, useNavigate } from "react-router-dom";
import { error } from "console";
import './page.css'
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";


function Signup() {
  const [isLogin, setIsLogin] = useState(true);

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
      console.log(useCredential);

      // ユーザー専用のコレクションを作成
      setDoc(doc(db, 'users', useCredential.user.uid), {
        email: useCredential.user.email,
        createdAt: new Date(),
      });

      router.push('/home');
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
  };

  const signin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        router.push("/home");
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-gray-900">家計簿アプリ</h2>
        <div className="mt-8 w-full max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              {/* <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="username"
                >
                  ユーザー名
                </label>
                <div className="mt-1">
                  <input
                    // onChange={(e) => setName(e.target.value)}
                    id="username"
                    name="username"
                    placeholder="ユーザー名"
                    required
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div> */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  メールアドレス
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="メールアドレス"
                    required
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="password"
                >
                  abcdefg
                </label>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  パスワード
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    placeholder="パスワード"
                    required
                    type="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={isLogin ? signup : signin} 
                  className="w-full flex justify-center mb-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={email === '' || password === ''}
                >
                   {isLogin ? "新規登録" : "ログイン"}
                </button>
              </div>
              <div className="mt-4 text-center text-sm">
                <Link 
                  href={""}
                  className="underline"  
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "ログイン" : "新規登録"}
                </Link>
                しますか？
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Signup;