import { useEffect, useState } from "react";
import { ref as dbRef, onValue } from "firebase/database";
import { db } from "../firebase/firebase.js";

function ViewsBadge({ postId }) {
  const [views, setViews] = useState(0);
  useEffect(() => {
    const r = dbRef(db, `analytics/views/${postId}/count`);
    return onValue(r, (snap) => setViews(snap.val() || 0));
  }, [postId]);
  return <span className="text-xs text-gray-500">閲覧数: {views}</span>;
}

export default ViewsBadge;
