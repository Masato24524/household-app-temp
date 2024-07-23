import { useEffect } from 'react';

const RedirectToRoot = () => {
  useEffect(() => {
    // ページがロードされたら、ルートページにリダイレクトする
    window.location.href = '/';
  }, []);

  return (
    <div>Redirecting...</div>
  );
};

export default RedirectToRoot;