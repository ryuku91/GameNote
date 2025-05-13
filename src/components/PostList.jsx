
const PostList = ({posts,handleEdit,handleDelete}) => {
    return (
        <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-3 rounded relative">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-700 mt-1">ジャンル: {post.genre || '未設定'}</p>
            <img
              src={post.imageUrl}
              alt="投稿画像"
              className="w-full max-w-[250px] max-h-24 object-cover rounded mx-auto"
            />
            <p className="text-sm text-yellow-500 mt-1">
            評価: {'★'.repeat(post.rating || 0)}{'☆'.repeat(5 - (post.rating || 0))}
            </p>
            <p>{post.comment}</p>
            <p className="text-sm text-gray-500 mt-1">投稿日: {post.timestamp}</p> {/* 投稿日時を表示 */}
            
            

            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(post)}
                className="text-blue-500 text-sm hover:underline"
              >
                編集
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 text-sm hover:underline"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
    )
}

export default PostList;