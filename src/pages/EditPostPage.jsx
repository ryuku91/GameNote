import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../firebase/firebase";
import { ref as dbRef, get, update } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import PostForm from "../components/PostForm";

export default function EditPostPage({ user }) {
  const { postId } = useParams();
  const nav = useNavigate();

  // フォーム用ステート（PostFormに渡す）
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [imageFile, setImageFile] = useState(null);

  // 既存データの保持（画像未変更ならこのURLを使う）
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [ownerUid, setOwnerUid] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const snap = await get(dbRef(db, `posts/${postId}`));
      const v = snap.val();
      if (!v) {
        alert("投稿が見つかりません");
        nav("/app/posts", { replace: true });
        return;
      }
      setOwnerUid(v.userId || "");
      setTitle(v.title || "");
      setComment(v.comment || "");
      setGenre(v.genre || "");
      setRating(Number(v.rating || 0));
      setCurrentImageUrl(v.imageUrl || "");
      setLoading(false);
    })();
  }, [postId, nav]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.uid || user.uid !== ownerUid) {
      alert("編集権限がありません");
      return;
    }

    try {
      let imageUrl = currentImageUrl;

      // 画像が選ばれていたらアップロードしてURL更新
      if (imageFile) {
        const path = `users/${user.uid}/images/${Date.now()}_${imageFile.name}`;
        const imgRef = storageRef(storage, path);
        const snap = await uploadBytes(imgRef, imageFile, {
          contentType: imageFile.type,
        });
        imageUrl = await getDownloadURL(snap.ref);
      }

      await update(dbRef(db, `posts/${postId}`), {
        title,
        comment,
        genre,
        rating,
        imageUrl,
        // createdAt は据え置き。並び順用に updatedAt を足したいなら以下を追加
        updatedAt: Date.now(),
      });

      nav("/app/posts", { replace: true });
    } catch (err) {
      console.error(err);
      alert("更新に失敗しました");
    }
  };

  if (loading) {
    return <div className="p-4">読み込み中…</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-3">投稿の編集</h1>

      {/* 既存画像のプレビュー（新しい画像を選ぶと PostForm 側のプレビューに切り替わる） */}
      {currentImageUrl && !imageFile && (
        <img
          src={currentImageUrl}
          alt="現在の画像"
          className="w-full max-w-[250px] max-h-24 object-cover rounded mx-auto mb-3"
        />
      )}

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
        editingId={postId}  // 編集モード表示用
        user={user}
      />
    </div>
  );
}
