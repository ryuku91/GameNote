import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, storage } from "../firebase/firebase";
import { ref as dbRef, push, get } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import PostForm from "../components/PostForm";

export default function NewPostPage({ user }) {
  const nav = useNavigate();
  const loc = useLocation();

  // フォーム用の状態（PostFormに渡す）
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    (async () => {
      if (!user?.uid) return;
      const snap = await get(dbRef(db, `users/${user.uid}`));
      setUserProfile(snap.val() || null);
    })();
  }, [user?.uid]);

  // 投稿後に戻る場所（一覧がデフォルト）
  const backTo = loc.state?.from || "/app/posts";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.uid) return;
    if (!title || !comment || !rating) {
      alert("タイトル・感想・評価は必須です");
      return;
    }

    try {
      let imageUrl = "";
      if (imageFile) {
        const path = `users/${user.uid}/images/${Date.now()}_${imageFile.name}`;
        const fileRef = storageRef(storage, path);
        const snap = await uploadBytes(fileRef, imageFile, {
          contentType: imageFile.type,
        });
        imageUrl = await getDownloadURL(snap.ref);
      }



      await push(dbRef(db, "posts"), {
        userId: user.uid,
        userName:  userProfile?.displayName || user.displayName || user.email || "名無し",
        userImage: userProfile?.profileUrl || user.photoURL || "",

        title,
        comment,
        genre,
        rating,
        ...(imageUrl && { imageUrl }),
        createdAt: Date.now(),
        likesCount: 0,
      });

      // クリア & 戻る
      setTitle("");
      setComment("");
      setGenre("");
      setRating(0);
      setImageFile(null);
      nav(backTo, { replace: true });
    } catch (err) {
      console.error(err);
      alert("投稿に失敗しました");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-3">新規投稿</h1>
      <PostForm
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        comment={comment}
        setComment={setComment}
        genre={genre}
        setGenre={setGenre}
        rating={rating}
        setRating={setRating}
        imageFile={imageFile}
        setImageFile={setImageFile}
        editingId={null}
        user={user}
      />
      <div className="mt-2">
        <button
          type="button"
          onClick={() => nav(backTo)}
          className="px-3 py-1 border rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
}
