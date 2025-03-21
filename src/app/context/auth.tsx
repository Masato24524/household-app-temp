export const authRepository = {
    async signup(name: string, email: string, password: string) {
        // サインアップ処理
        // ここに処理を書く
        // const {data, error} = await firebase.auth.signUp({
        //     email,
        //     password,
        //     options: { data: { name }},
        // });
        // if (error != null) throw new Error(error.message);
        
        // return data.user;
    },
    async signin(email: string, password: string) {
        // サインイン処理
        // ここに処理を書く
    },
    async signout() {
        // サインアウト処理
        // ここに処理を書く
    }
}