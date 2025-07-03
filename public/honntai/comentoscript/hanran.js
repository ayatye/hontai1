import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  serverTimestamp,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeDWwlVCPrZIZhGoxuAsuvOD3XwvbBM7o",
  authDomain: "daigoroku-website.firebaseapp.com",
  projectId: "daigoroku-website",
  storageBucket: "daigoroku-website.appspot.com",
  messagingSenderId: "405763623042",
  appId: "1:405763623042:web:4371ab95c7b31d341d8c9b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const commentsRef = collection(db, "comments");
const pageId = "hanran";

document
  .getElementById("comment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username-input").value.trim();
    const comment = document.getElementById("comment-input").value.trim();

    if (!username || !comment) return;

    await addDoc(commentsRef, {
      username: username,
      comment: comment,
      timestamp: serverTimestamp(),
      pageId: pageId,
    });

    document.getElementById("username-input").value = "";
    document.getElementById("comment-input").value = "";
    loadComments();
  });

async function loadComments() {
  const q = query(
    commentsRef,
    where("pageId", "==", pageId),
    orderBy("timestamp", "desc")
  );
  const querySnapshot = await getDocs(q);

  const commentsContainer = document.getElementById("comments");
  commentsContainer.innerHTML = "";

  let count = 0;
  const docsToDelete = [];

  const icons = [
    "honntai/images/randomicon/ofensu.jpeg",
    "honntai/images/randomicon/posutomann.jpeg",
    "honntai/images/randomicon/kottousyou.jpeg",
    "honntai/images/randomicon/saisi.jpeg",
    "honntai/images/randomicon/youhei.jpeg",
    "honntai/images/randomicon/ouenndann.jpeg",
    "honntai/images/randomicon/syouzyo.jpeg",
    "honntai/images/randomicon/kikaigisi.jpeg",
    "honntai/images/randomicon/kuugunn.jpeg",
    "honntai/images/randomicon/tyoukousi.jpeg",
    "honntai/images/randomicon/kisya.jpeg",
  ];

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    if (data.username && data.comment && data.timestamp?.seconds) {
      if (
        containsBannedWord(data.username) ||
        containsBannedWord(data.comment)
      ) {
        return; // NGワードフィルター
      }

      if (count < 50) {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `
          <div class="timestamp">${new Date(
            data.timestamp.seconds * 1000
          ).toLocaleString()}</div>
          <img src="${randomIcon}" alt="User Icon" class="user-icon" />
          <div class="username"><strong>${data.username}</strong></div>
          <div class="message">${data.comment}</div>
        `;
        commentsContainer.appendChild(commentDiv);
      } else {
        docsToDelete.push(doc(db, "comments", docSnap.id));
      }
      count++;
    }
  });

  for (const d of docsToDelete) {
    await deleteDoc(d);
  }
}

loadComments();
