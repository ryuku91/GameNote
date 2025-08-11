import { useState, useEffect } from 'react';
import { db, storage} from '../firebase/firebase.js';
import { ref as dbRef, update, get } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';


const ProfilePage = ({ user }) => {
  const [displayName, setDisplayName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [profileUrl, setProfileUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const snapshot = await get(dbRef(db, `users/${user.uid}`));
      const data = snapshot.val();
      if (data) {
        setDisplayName(data.displayName || '');
        setProfileUrl(data.profileUrl || '');
      }
    };
    fetchProfile();
  }, [user]);

  const handleSave = async () => {
    let url = profileUrl;
    if (profileImage) {
      const imgRef = storageRef(storage, `profiles/${user.uid}`);
      const snap = await uploadBytes(imgRef, profileImage);
      url = await getDownloadURL(snap.ref);
    }
    await update(dbRef(db, `users/${user.uid}`), {
      displayName,
      profileUrl: url,
    });
    alert('プロフィールを更新しました！');
    navigate('/posts');
  };

  

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">👤 プロフィール編集</h2>
      <input
        className="border p-2 w-full mb-4"
        placeholder="表示名"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfileImage(e.target.files[0])}
        className="mb-4"
      />
      {profileUrl && <img src={profileUrl} alt="プロフィール" className="w-32 h-32 rounded-full mb-4" />}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>
        保存
      </button>
    </div>
  );
};

export default ProfilePage;
