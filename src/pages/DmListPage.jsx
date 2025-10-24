import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { ref as dbRef, onValue, query, orderByChild } from "firebase/database";
import { Link } from "react-router-dom";

export default function DmListPage({ user }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user?.uid) return;
    const q = query(dbRef(db, `users/${user.uid}/dmList`), orderByChild("updatedAt"));
    return onValue(q, (s) => {
      const v = s.val() || {};
      const arr = Object.entries(v).map(([cid, it]) => ({ cid, ...it }));
      arr.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
      setItems(arr);
    });
  }, [user?.uid]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-3">✉ DM</h2>
      <div className="space-y-2">
        {items.length === 0 && (
          <div className="text-sm text-gray-500">会話はまだありません</div>
        )}
        {items.map((x) => (
          <Link
            key={x.cid}
            to={`/app/dm/${x.cid}`}
            className="block p-3 bg-white rounded shadow hover:bg-gray-50"
          >
            <div className="text-sm font-medium break-all">{x.cid}</div>
            <div className="text-xs text-gray-500">
              更新: {x.updatedAt ? new Date(x.updatedAt).toLocaleString() : "-"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
