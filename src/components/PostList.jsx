import PostCard from "./PostCard";
import ViewsBadge from "./ViewsBadge";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";
import FollowButton from "./FollowButton";
import FollowCounts from "./FollowCounts";
import MessageButton from "./MessageButton";

const PostList = ({posts, user, userProfile, onEdit, onDelete}) => {
    return (
        <div className="space-y-4">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} user={user}>
              <div className="flex items-center mb-2">
              {post.userImage && (
                <img
                  src={post.userImage}
                  alt="ユーザー画像"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
              )}
               <div className="flex flex-col">
              <span className="text-sm text-gray-700">{post.userName}</span>
              {post.userId && <FollowCounts uid={post.userId} />}
              </div>
              <div className="ml-auto">
              {post.userId && <FollowButton targetUid={post.userId} user={user} />}
              {post.userId && <MessageButton targetUid={post.userId} user={user} />}
            </div>
            </div>
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
            <p className="text-sm text-gray-500 mt-1">
              投稿日: {
                      typeof post.createdAt === "number"
                      ? new Date(post.createdAt).toLocaleString()
                      : post.timestamp ? post.timestamp
                      : typeof post.updatedAt === "number"
                      ? new Date(post.updatedAt).toLocaleString()
                      : "-"
                       }
            </p> {/* 投稿日時を表示 */}
            <ViewsBadge postId={post.id} />


            <div className="mt-2 flex items-center gap-3">
              <LikeButton postId={post.id} user={user} />
              {user?.uid === post.userId && (
                <>
              <button
                onClick={() => onEdit?.(post)}
                className="text-blue-500 text-sm hover:underline"
              >
                編集
              </button>
              <button
                onClick={() => onDelete?.(post)}
                className="text-red-500 text-sm hover:underline"
              >
                削除
              </button>
              </>
              )}
            </div>
            <CommentSection postId={post.id} user={user} userProfile={userProfile} />
          </PostCard>
        ))}
      </div>
    )
}

export default PostList;