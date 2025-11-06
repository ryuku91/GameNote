export function usernameToEmail(username) {
    // 半角英数字と _.- のみ許可（必要なら緩めてもOK）
    const clean = String(username).trim().toLowerCase();
    if (!/^[a-z0-9._-]{3,24}$/.test(clean)) {
      throw new Error("ユーザー名は半角英数字と ._-、3〜24文字にしてください");
    }
    return `${clean}@demo.gamenote`; // ドメインは任意
  }