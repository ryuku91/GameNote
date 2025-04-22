
const PostForm = ({handleSubmit, title, setTitle, comment, setComment,editingId,user}) => {

    return (
        <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          className="border p-2 w-full"
          placeholder="ゲームタイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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