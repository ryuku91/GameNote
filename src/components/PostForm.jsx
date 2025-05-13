const PostForm = ({handleSubmit, title, setTitle, comment, setComment,genre, setGenre, rating, setRating, imageFile, setImageFile, editingId,user}) => {

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <span
          key={starValue}
          onClick={() => setRating(starValue)}
          className="cursor-pointer text-2xl"
        >
          {starValue <= rating ? '★' : '☆'}
        </span>
      );
    });
  };
    return (
        <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <div className="text-gray-700">
          <label>評価: </label>
          {renderStars()}
        </div>
        <input
          className="border p-2 w-full"
          placeholder="ゲームタイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
        className="border p-2 w-full"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">ジャンルを選択</option>
          <option value="RPG">RPG</option>
          <option value="FPS">FPS</option>
          <option value="アクション">アクション</option>
          <option value="音ゲー">音ゲー</option>
          <option value="パズル">パズル</option>
          <option value="その他">その他</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="プレビュー"
            className="w-full max-w-[250px] max-h-24 object-cover rounded mx-auto"
          />
        )}


        <textarea
          className="border p-2 w-full"
          placeholder="感想を入力..."
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        

        <button className="bg-blue-500 text-white px-4 py-2 rounded" 
                type="submit"
                disabled={!user}>
          {editingId ? '更新する' : '投稿'}
        </button>
      </form>
    )
}

export default PostForm;