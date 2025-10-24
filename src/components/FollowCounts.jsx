import { useEffect, useState } from "react";
import { ref as dbRef, onValue } from "firebase/database";
import { db } from "../firebase/firebase";

export default function FollowCounts({ uid }) {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    return onValue(dbRef(db, `users/${uid}/stats/followersCount`), s =>
      setFollowers(s.val() || 0)
    );
  }, [uid]);

  useEffect(() => {
    return onValue(dbRef(db, `users/${uid}/stats/followingCount`), s =>
      setFollowing(s.val() || 0)
    );
  }, [uid]);

  return (
    <div className="text-xs text-gray-600">
      フォロワー {followers}・フォロー {following}
    </div>
  );
}