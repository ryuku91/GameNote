
const PostList = ({posts,handleEdit,handleDelete}) => {
    return (
        <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-3 rounded relative">
            <h2 className="font-semibold">{post.title}</h2>
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